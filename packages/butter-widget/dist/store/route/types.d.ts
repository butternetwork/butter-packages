import { Chain, SwapHistory, Token, Route, RouteTxData } from '@butternetwork/sdk';
export interface ChainTokenSelectedItem {
    chain: Chain | null;
    token: Token | null;
}
export interface RoutesState {
    from: ChainTokenSelectedItem | null;
    to: ChainTokenSelectedItem | null;
    slippage: string;
    amount: string;
    loadingRoutes: boolean;
    routes: Route[];
    inputAddress: string;
    selectedRoute: Route | null | "empty";
    showAddressEditor: boolean;
    showSetting: boolean;
    userHistoryTotal: {
        [key: string]: number;
    };
    userHistory: {
        [key: string]: SwapHistory[];
    };
    userHistoryPages: {
        [key: string]: number;
    };
    historyLoading: boolean;
    showExchangeModal: boolean;
    routeTxData: RouteTxData[] | null;
    loadingRouteTx: boolean;
    currentHistory: SwapHistory | null;
    lastRequestId: number;
    fetchRouteError: {
        code: string;
        message: string;
    } | null;
}
