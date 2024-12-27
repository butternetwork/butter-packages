import { RootState } from "../store";
export declare const selectFrom: (obj: {
    wallet: import("./wallet/types").WalletState;
    routes: import("./route/types").RoutesState;
    global: import("./global/global-slice").GlobalState;
    ui: import("./ui/types").UIState;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        getChains: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("@butternetwork/sdk").Chain[], "api">;
    }, never, "api">;
}) => import("./route/types").ChainTokenSelectedItem | null;
export declare const selectTo: (obj: {
    wallet: import("./wallet/types").WalletState;
    routes: import("./route/types").RoutesState;
    global: import("./global/global-slice").GlobalState;
    ui: import("./ui/types").UIState;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        getChains: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("@butternetwork/sdk").Chain[], "api">;
    }, never, "api">;
}) => import("./route/types").ChainTokenSelectedItem | null;
export declare const selectSlippage: (obj: {
    wallet: import("./wallet/types").WalletState;
    routes: import("./route/types").RoutesState;
    global: import("./global/global-slice").GlobalState;
    ui: import("./ui/types").UIState;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        getChains: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("@butternetwork/sdk").Chain[], "api">;
    }, never, "api">;
}) => string;
export declare const selectAmount: (obj: {
    wallet: import("./wallet/types").WalletState;
    routes: import("./route/types").RoutesState;
    global: import("./global/global-slice").GlobalState;
    ui: import("./ui/types").UIState;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        getChains: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("@butternetwork/sdk").Chain[], "api">;
    }, never, "api">;
}) => string;
export declare const selectInputAddress: (obj: {
    wallet: import("./wallet/types").WalletState;
    routes: import("./route/types").RoutesState;
    global: import("./global/global-slice").GlobalState;
    ui: import("./ui/types").UIState;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        getChains: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("@butternetwork/sdk").Chain[], "api">;
    }, never, "api">;
}) => string;
export declare const selectShowAddressEditor: (obj: {
    wallet: import("./wallet/types").WalletState;
    routes: import("./route/types").RoutesState;
    global: import("./global/global-slice").GlobalState;
    ui: import("./ui/types").UIState;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        getChains: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("@butternetwork/sdk").Chain[], "api">;
    }, never, "api">;
}) => boolean;
export declare const selectShowSetting: (obj: {
    wallet: import("./wallet/types").WalletState;
    routes: import("./route/types").RoutesState;
    global: import("./global/global-slice").GlobalState;
    ui: import("./ui/types").UIState;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        getChains: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("@butternetwork/sdk").Chain[], "api">;
    }, never, "api">;
}) => boolean;
export declare const selectIsSwap: (obj: {
    wallet: import("./wallet/types").WalletState;
    routes: import("./route/types").RoutesState;
    global: import("./global/global-slice").GlobalState;
    ui: import("./ui/types").UIState;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        getChains: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("@butternetwork/sdk").Chain[], "api">;
    }, never, "api">;
}) => boolean;
export declare const selectUserHistory: ((state: {
    wallet: import("./wallet/types").WalletState;
    routes: import("./route/types").RoutesState;
    global: import("./global/global-slice").GlobalState;
    ui: import("./ui/types").UIState;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        getChains: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, never, import("@butternetwork/sdk").Chain[], "api">;
    }, never, "api">;
}, account: string) => import("@butternetwork/sdk").SwapHistory[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: string, resultFuncArgs_1: {
        [key: string]: import("@butternetwork/sdk").SwapHistory[];
    }) => import("@butternetwork/sdk").SwapHistory[];
    memoizedResultFunc: ((resultFuncArgs_0: string, resultFuncArgs_1: {
        [key: string]: import("@butternetwork/sdk").SwapHistory[];
    }) => import("@butternetwork/sdk").SwapHistory[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => import("@butternetwork/sdk").SwapHistory[];
    dependencies: [(_state: RootState, account: string) => string, (state: RootState) => {
        [key: string]: import("@butternetwork/sdk").SwapHistory[];
    }];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import("reselect").weakMapMemoize;
    argsMemoize: typeof import("reselect").weakMapMemoize;
};
export declare const selectUserHistoryTotalCount: (state: RootState) => {
    [key: string]: number;
};
export declare const selectUserHistoryForPage: ((state: any, page: number, size: number, account: string) => {
    list: import("@butternetwork/sdk").SwapHistory[];
    total: number;
}) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: {
        page: number;
        size: number;
        account: string;
    }, resultFuncArgs_1: {
        [key: string]: import("@butternetwork/sdk").SwapHistory[];
    }, resultFuncArgs_2: {
        [key: string]: number;
    }) => {
        list: import("@butternetwork/sdk").SwapHistory[];
        total: number;
    };
    memoizedResultFunc: ((resultFuncArgs_0: {
        page: number;
        size: number;
        account: string;
    }, resultFuncArgs_1: {
        [key: string]: import("@butternetwork/sdk").SwapHistory[];
    }, resultFuncArgs_2: {
        [key: string]: number;
    }) => {
        list: import("@butternetwork/sdk").SwapHistory[];
        total: number;
    }) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => {
        list: import("@butternetwork/sdk").SwapHistory[];
        total: number;
    };
    dependencies: [(_state: any, page: number, size: number, account: string) => {
        page: number;
        size: number;
        account: string;
    }, (state: RootState) => {
        [key: string]: import("@butternetwork/sdk").SwapHistory[];
    }, (state: RootState) => {
        [key: string]: number;
    }];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import("reselect").weakMapMemoize;
    argsMemoize: typeof import("reselect").weakMapMemoize;
};
