import { EmblaCarouselType } from "embla-carousel";
export declare enum Cards {
    History = "history",
    BestRoute = "bestRoute",
    MoreRoute = "moreRoute",
    MainCard = "mainCard"
}
export interface UIState {
    pages: Cards[];
    embApi?: EmblaCarouselType | null;
    showBestCard: boolean;
    showMoreCard: boolean;
    showHistoryCard: boolean;
    activeIndex: number;
    selectedProject: string;
    supportedProjects: {
        label: string;
        value: string;
    }[];
}
