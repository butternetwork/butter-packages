import { RouteObj } from "../utils/api/types";
export interface HistoryEntity {
    fromAddress: string;
    toAddress: string;
    route: RouteObj;
    txHash: string;
    timestamp: number;
}
export declare function saveHistory(data: HistoryEntity): void;
export declare function loadHistory(): {
    [key: string]: HistoryEntity;
} | null;
