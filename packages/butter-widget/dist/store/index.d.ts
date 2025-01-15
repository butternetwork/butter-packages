declare const store: import('@reduxjs/toolkit').EnhancedStore<{
    wallet: import('./wallet/types').WalletState;
    routes: import('./route/types').RoutesState;
    global: import('./global/global-slice').GlobalState;
    ui: import('./ui/types').UIState;
    api: import('@reduxjs/toolkit/query').CombinedState<{
        getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
    }, never, "api">;
}, import('redux').UnknownAction, import('@reduxjs/toolkit').Tuple<[import('redux').StoreEnhancer<{
    dispatch: import('redux-thunk').ThunkDispatch<{
        wallet: import('./wallet/types').WalletState;
        routes: import('./route/types').RoutesState;
        global: import('./global/global-slice').GlobalState;
        ui: import('./ui/types').UIState;
        api: import('@reduxjs/toolkit/query').CombinedState<{
            getChains: import('@reduxjs/toolkit/query').QueryDefinition<void, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('@reduxjs/toolkit/query').FetchArgs, unknown, import('@reduxjs/toolkit/query').FetchBaseQueryError, {}, import('@reduxjs/toolkit/query').FetchBaseQueryMeta>, never, import('@butternetwork/sdk').Chain[], "api">;
        }, never, "api">;
    }, undefined, import('redux').UnknownAction>;
}>, import('redux').StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
