export declare const selectShowHistoryCard: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('./types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => boolean;
export declare const selectShowBestCard: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('./types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => boolean;
export declare const selectShowMoreCard: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('./types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => boolean;
export declare const selectActiveIndex: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('./types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => number;
export declare const selectEmbAbi: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('./types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => import('embla-carousel').EmblaCarouselType | null | undefined;
export declare const selectCanSlidePrev: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('./types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => boolean;
export declare const selectCanSlideNext: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('./types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => boolean;
export declare const selectBestRouteCardShow: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('../global/global-slice').GlobalState;
    ui: import('./types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => boolean;
