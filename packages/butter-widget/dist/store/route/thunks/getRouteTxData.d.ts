import { RouteTxData, Route } from "@butternetwork/sdk";
export declare const getRouteTxData: import("@reduxjs/toolkit").AsyncThunk<RouteTxData[] | null, {
    route: Route;
    slippage: string;
    toAddress: string;
    from: string;
}, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export default getRouteTxData;
