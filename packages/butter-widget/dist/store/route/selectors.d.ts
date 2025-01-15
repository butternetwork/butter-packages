export declare const selectRouteTxData: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('./types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => import('@butternetwork/sdk').RouteTxData[] | null;
export declare const selectLoadingRouteTxData: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('./types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => boolean;
export declare const selectCurrentHistory: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('./types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => import('@butternetwork/sdk').SwapHistory | null;
export declare const selectBestRoute: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('./types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => import('@butternetwork/sdk').Route | "empty" | null;
export declare const selectLoadingRoute: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('./types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => boolean;
export declare const selectFetchRouteError: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('./types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => {
    code: string;
    message: string;
} | null;
