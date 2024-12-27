import { Cards } from "../store/ui/types";
declare const usePageController: () => {
    insertCard: ({ card }: {
        card: Cards;
    }) => void;
    pages: Cards[];
    showBestRouteCard: boolean;
    showMoreRoute: boolean;
    showHistory: boolean;
    handleHistoryClose: () => void;
    handleBestContentRemoved: () => void;
    handleMoreContentRemoved: () => void;
};
export default usePageController;
