import { Route } from "@butternetwork/sdk";
export type GetRouteDataProps = {
    fromChainId: string;
    toChainId: string;
    amount: string;
    tokenInAddress: string;
    tokenOutAddress: string;
    slippage: string;
    signal?: AbortSignal;
    id?: number;
    entrance: string;
};
declare const getRouteData: import("@reduxjs/toolkit").AsyncThunk<{
    data: Route[];
    id: number;
}, GetRouteDataProps, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export default getRouteData;
