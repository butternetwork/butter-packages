import { PayloadAction } from '@reduxjs/toolkit';
import { SwapHistory, Route } from '@butternetwork/sdk';
import { RoutesState } from './types';
export declare const getUserHistory: import('@reduxjs/toolkit').AsyncThunk<{
    list: SwapHistory[];
    total: number;
    account: string;
    page: number;
}, {
    account: string;
    page: number;
}, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const routesSlices: import('@reduxjs/toolkit').Slice<RoutesState, {
    updateFrom: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateTo: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateSlippage: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateAmount: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateLoading: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateRoutes: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateInputAddress: (state: import('immer').WritableDraft<RoutesState>, action: PayloadAction<string>) => void;
    updateSelectedRoute: (state: import('immer').WritableDraft<RoutesState>, action: PayloadAction<Route | null | "empty">) => void;
    swapComplete: (state: import('immer').WritableDraft<RoutesState>) => void;
    toggleAddressEditor: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    toggleSetting: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    toggleShowExchangeModal: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    setRouteTxData: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    setCurrentHistoryData: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    setFetchRouteError: (state: import('immer').WritableDraft<RoutesState>, action: {
        payload: any;
        type: string;
    }) => void;
    closeRoute: (state: import('immer').WritableDraft<RoutesState>) => void;
}, "routes", "routes", import('@reduxjs/toolkit').SliceSelectors<RoutesState>>;
export declare const updateFrom: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/updateFrom">, updateTo: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/updateTo">, updateSlippage: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/updateSlippage">, updateAmount: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/updateAmount">, updateLoading: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/updateLoading">, updateRoutes: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/updateRoutes">, updateInputAddress: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "routes/updateInputAddress">, updateSelectedRoute: import('@reduxjs/toolkit').ActionCreatorWithPayload<Route | "empty" | null, "routes/updateSelectedRoute">, swapComplete: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"routes/swapComplete">, toggleSetting: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/toggleSetting">, toggleAddressEditor: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/toggleAddressEditor">, toggleShowExchangeModal: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/toggleShowExchangeModal">, setRouteTxData: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/setRouteTxData">, setCurrentHistoryData: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/setCurrentHistoryData">, setFetchRouteError: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "routes/setFetchRouteError">, closeRoute: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"routes/closeRoute">;
declare const _default: import('redux').Reducer<RoutesState>;
export default _default;
