export interface Article {
    thread: {
        uuid: string;
        url: string;
        site_full: string;
        site: string;
        site_section: string;
        site_categories: string[];
        section_title: string;
        title: string;
        title_full: string;
        published: string;
        replies_count: number;
        participants_count: number;
        site_type: string;
        country: string;
        main_image: string;
        performance_score: number;
        domain_rank: number;
        domain_rank_updated: string;
        reach: null; // The type is unclear from the provided JSON
        social: {
            updated: string;
            facebook: {
                likes: number;
                comments: number;
                shares: number;
            };
            gplus: {
                shares: number;
            };
            pinterest: {
                shares: number;
            };
            linkedin: {
                shares: number;
            };
            stumbledupon: {
                shares: number;
            };
            vk: {
                shares: number;
            };
        };
    };
    uuid: string;
    url: string;
    ord_in_thread: number;
    parent_url: null | string;
    author: string;
    published: string;
    title: string;
    text: string;
    highlightText: string;
    highlightTitle: string;
    highlightThreadTitle: string;
    language: string;
    sentiment: string;
    categories: string[];
    external_links: string[];
    external_images: string[];
    entities: {
        persons: { name: string; sentiment: string }[];
        organizations: { name: string; sentiment: string }[];
        locations: { name: string; sentiment: string }[];
    };
    rating: null | number;
    crawled: string;
    updated: string;
}
