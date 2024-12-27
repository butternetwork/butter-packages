import { SwapHistory, SwapHistoryChainItem, SwapHistoryDetail, SwapHistoryTokenItem } from "@butternetwork/sdk";
interface HistoryListItemStepItem {
    token?: SwapHistoryTokenItem | null;
    chain: SwapHistoryChainItem;
}
export declare const useSwapHistoryInfo: ({ data }: {
    data: SwapHistory;
}) => {
    steps: HistoryListItemStepItem[];
};
interface HistoryDetailStep {
    hash?: string | null;
    token?: SwapHistoryTokenItem | null;
    chain?: SwapHistoryChainItem | null;
    step: string;
}
export declare const useSwapDetailSteps: ({ data, }: {
    data: SwapHistoryDetail | null | undefined;
}) => {
    steps: HistoryDetailStep[];
    fromData: {
        token: SwapHistoryTokenItem;
        chain: SwapHistoryChainItem;
        amount: string;
        hash: string;
        address: string;
    } | null;
    toData: {
        token: any;
        chain: SwapHistoryChainItem;
        amount: string;
        hash: string;
        address: string;
    } | null;
};
export {};
