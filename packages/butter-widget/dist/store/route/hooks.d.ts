export declare const useRouteTxData: () => import('@butternetwork/sdk').RouteTxData[] | null;
export declare const useLoadingRouteTxData: () => boolean;
export declare const useCurrentHistory: () => import('@butternetwork/sdk').SwapHistory | null;
export declare const useBestRoute: () => import('@butternetwork/sdk').Route | "empty" | null;
export declare const useLoadingRoute: () => boolean;
export declare const useFetchRouteError: () => {
    code: string;
    message: string;
} | null;
