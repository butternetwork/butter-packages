export declare const selectTokenBalances: (obj: {
    wallet: import('./types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => Record<string, Record<string, string>>;
export declare const selectTokenBalance: (state: {
    wallet: import('./types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}, address: string, chainId: string) => string;
export declare const selectUserToken: (obj: {
    wallet: import('./types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => {
    address: string;
    token: string;
    expired: number;
} | null;
