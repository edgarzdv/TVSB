import React, { useEffect, useRef, useState } from 'react'
import Chart from "chart.js/auto";


interface Props {
    bidenSentiments: any;
    trumpSentiments: any;
}


const SentimentsChart = ({ bidenSentiments, trumpSentiments }:Props) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart<"bar", unknown[], string> | undefined>(undefined);

    
    useEffect(() => {
        if (trumpSentiments.length > 0 && bidenSentiments.length > 0) {
            const trumpCounts = countSentiments(trumpSentiments);
            const bidenCounts = countSentiments(bidenSentiments);

            const labels = Object.keys(trumpCounts);
            const trumpData = Object.values(trumpCounts);
            const bidenData = Object.values(bidenCounts);
            let ctx
            if (chartRef.current) {

                ctx = chartRef.current.getContext('2d');
            }
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }
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
                });
            }
        }
    }, [trumpSentiments, bidenSentiments]);

    const countSentiments = (sentiments: any) => {
        return sentiments.reduce((acc: any, thread: any) => {
            acc[thread.sentiment] = (acc[thread.sentiment] || 0) + 1;
            return acc;
        }, {});
    };


    return (
        <div>
            <span>Thread sentiments Chart</span>
            <canvas ref={chartRef} id="comparisonChart" width="800" height="400"></canvas>
        </div>

    )

}

export default SentimentsChart