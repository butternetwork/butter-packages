"use client";
import { memoize } from "proxy-memoize";
import { selectBestRoute, selectFetchRouteError, selectLoadingRoute, } from "../route/selectors";
export const selectShowHistoryCard = memoize((state) => state.ui.showHistoryCard);
export const selectShowBestCard = memoize((state) => state.ui.showBestCard);
export const selectShowMoreCard = memoize((state) => state.ui.showMoreCard);
export const selectActiveIndex = memoize((state) => state.ui.activeIndex);
export const selectEmbAbi = memoize((state) => state.ui.embApi);
export const selectCanSlidePrev = memoize((state) => {
    const showHistory = selectShowHistoryCard(state);
    const activeIndex = selectActiveIndex(state);
    if (activeIndex === 0) {
        return false;
    }
    else if (activeIndex === 1) {
        return showHistory;
    }
    return true;
});
export const selectCanSlideNext = memoize((state) => {
    const showBest = selectShowBestCard(state);
    const showMore = selectShowMoreCard(state);
    const activeIndex = selectActiveIndex(state);
    if (activeIndex === 3) {
        return false;
    }
    else if (activeIndex === 2) {
        return showMore;
    }
    else if (activeIndex === 1) {
        return showBest;
    }
    return true;
});
export const selectBestRouteCardShow = memoize((state) => {
    const bestRoute = selectBestRoute(state);
    const routeLoading = selectLoadingRoute(state);
    const routeError = selectFetchRouteError(state);
    return !!bestRoute || routeLoading || !!routeError;
});
