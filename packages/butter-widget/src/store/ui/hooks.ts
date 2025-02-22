"use client";
import { useAppSelector } from "../hooks";
import {
  selectBestRouteCardShow,
  selectCanSlideNext,
  selectCanSlidePrev,
  selectEmbAbi,
  selectShowBestCard,
  selectShowHistoryCard,
  selectShowMoreCard,
  // selectSwiperInstance,
} from "./selectors";

export const useShowHistoryCard = () => {
  return useAppSelector(selectShowHistoryCard);
};

export const useShowBestCard = () => {
  return useAppSelector(selectShowBestCard);
};

export const useBestRouteCardShow = () => {
  return useAppSelector(selectBestRouteCardShow);
};

export const useShowMoreCard = () => {
  return useAppSelector(selectShowMoreCard);
};

// export const useSwiperInstance = () => {
//   return useAppSelector(selectSwiperInstance);
// };

export const useCanSlidePrev = () => {
  return useAppSelector(selectCanSlidePrev);
};

export const useCanSlideNext = () => {
  return useAppSelector(selectCanSlideNext);
};

export const useEmbAPI = () => {
  return useAppSelector(selectEmbAbi);
};

export const useSelectedProject = () => {
  return useAppSelector((state) => state.ui.selectedProject);
};
