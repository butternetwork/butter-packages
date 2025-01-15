import { RootState } from '../../store';
export declare const selectChains: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('./global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => import('@butternetwork/sdk').Chain[];
export declare const selectChainsMap: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('./global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => {
    [key: string]: import('@butternetwork/sdk').Chain;
};
export declare const selectMetamaskChains: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('./global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => import('@butternetwork/sdk').Chain[];
export declare const selectChainById: (state: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('./global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}, chainId: string) => import('@butternetwork/sdk').Chain;
export declare const selectChainLogoById: (state: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('./global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}, chainId: string) => string | null;
export declare const selectAllChainTokens: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('./global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => {
    [key: string]: import('@butternetwork/sdk').ResponseTokenItem[];
};
export declare const selectTokensForNetwork: (state: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('./global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}, network: string) => import('@butternetwork/sdk').ResponseTokenItem[];
export declare const selectTokensNoMoreForNetwork: ((state: any, network: string) => boolean) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: {
        [key: string]: boolean;
    }, resultFuncArgs_1: string) => boolean;
    memoizedResultFunc: ((resultFuncArgs_0: {
        [key: string]: boolean;
    }, resultFuncArgs_1: string) => boolean) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => boolean;
    dependencies: [(state: RootState) => {
        [key: string]: boolean;
    }, (_state: any, network: string) => string];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import('reselect').weakMapMemoize;
    argsMemoize: typeof import('reselect').weakMapMemoize;
};
export declare const selectTokensPageForNetwork: ((state: any, network: string) => number) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: {
        [key: string]: number;
    }, resultFuncArgs_1: string) => number;
    memoizedResultFunc: ((resultFuncArgs_0: {
        [key: string]: number;
    }, resultFuncArgs_1: string) => number) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => number;
    dependencies: [(state: RootState) => {
        [key: string]: number;
    }, (_state: any, network: string) => string];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import('reselect').weakMapMemoize;
    argsMemoize: typeof import('reselect').weakMapMemoize;
};
export declare const selectTokenByNetrokAndSymbol: (state: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('./global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}, network: string, symbol: string) => import('@butternetwork/sdk').ResponseTokenItem | null;
export declare const selectShowConfirmCard: (obj: {
    wallet: import('../wallet/types').WalletState;
    routes: import('../route/types').RoutesState;
    global: import('./global-slice').GlobalState;
    ui: import('../ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}) => boolean;
