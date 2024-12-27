"use client";
import {
  UserSwapHistoryDetailResponse,
  UserSwapHistoryResponseItem,
} from "../../utils/api/types";

export type HistoryDetailCardProps = {
  show: boolean;
  onClose: () => void;
  data: UserSwapHistoryResponseItem | null;
};

export type HistoryTimelineProps = {
  currentStep: number;
  data: UserSwapHistoryDetailResponse | null | undefined;
};

export type HistoryTimelineItemProps = {
  isLast: boolean;
  step: number;
  currentStep: number;
  state: number;
};
