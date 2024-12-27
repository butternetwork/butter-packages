import { UserSwapHistoryResponseItem } from "../../utils/api/types";
export type HistoryMainCardProps = {
    onRemoved: () => void;
};
export declare enum HistoryState {
    Crossing = "Crossing",
    RelayerComplete = "RelayerComplete",
    Relaying = "Relaying",
    Complete = "Complete",
    Imcomplete = "Imcomplete"
}
export type HistoryItemProps = {
    onClick: () => void;
    data: UserSwapHistoryResponseItem;
};
export type HistoryItemStateTagProps = {
    state: HistoryState;
};
