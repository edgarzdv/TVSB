import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface Props {
    bidenThreads: any[];
    trumpThreads: any[];
}

const OrganizationChart = ({ bidenThreads, trumpThreads }: Props) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart<"bar", unknown[], string> | null>(null);

    useEffect(() => {
        if (trumpThreads.length > 0 && bidenThreads.length > 0) {
            const trumpCounts = countOrganizations(trumpThreads);
            const bidenCounts = countOrganizations(bidenThreads);

            const labels = Object.keys(trumpCounts);
            const trumpData = Object.values(trumpCounts);
            const bidenData = Object.values(bidenCounts);

            if (chartRef.current) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }
                const ctx = chartRef.current.getContext('2d');
                if (ctx) {
                    chartInstance.current = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Trump',
                                data: trumpData,
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 1
                            }, {
                                label: 'Biden',
                                data: bidenData,
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                }
            }
        }
    }, [trumpThreads, bidenThreads]);

    const countOrganizations = (threads: any[]) => {
        const counts: { [organization: string]: number } = {};
        threads.forEach((thread) => {
            thread.entities.organizations.forEach((organization: any) => {
                counts[organization.name] = (counts[organization.name] || 0) + 1;
            });
        });
        return counts;
    };

    return (
        <div>
            <span>Organization mentions Chart</span>
            <canvas ref={chartRef} id="organizationChart" width="800" height="400"></canvas>
        </div>
    );
};

export default OrganizationChart;
