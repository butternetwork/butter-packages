import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Wallet } from "../../lib/wallets/useWallets";
import { Token, Chain } from "@butternetwork/sdk";
export interface GlobalState {
    chains: Chain[];
    metamaskChains: Chain[];
    loadingChains: boolean;
    chainsMap: {
        [key: string]: Chain;
    };
    tokensForChain: {
        [key: string]: Token[];
    };
    tokensForChainPages: {
        [key: string]: number;
    };
    tokensForChainNoMore: {
        [key: string]: boolean;
    };
    tokensLoading: boolean;
    showConfirmCard: boolean;
}
export declare const fetchChainsData: import("@reduxjs/toolkit").AsyncThunk<Chain[], void, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const getTokensForChain: import("@reduxjs/toolkit").AsyncThunk<Pick<GlobalState, "tokensForChain" | "tokensForChainPages" | "tokensForChainNoMore">, {
    network: string;
    page: number;
    chainId: string;
    wallet: Wallet | null;
    symbol: string;
}, {
    state: RootState;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const globalSlice: import("@reduxjs/toolkit").Slice<GlobalState, {
    updateTokensPage: (state: import("immer").WritableDraft<GlobalState>, action: PayloadAction<{
        [network: string]: number;
    }>) => void;
    setShowConfirmCard: (state: import("immer").WritableDraft<GlobalState>, action: PayloadAction<boolean>) => void;
    setTokensNoMoreForNetwork(state: import("immer").WritableDraft<GlobalState>, action: PayloadAction<{
        network: string;
        noMore: boolean;
    }>): void;
}, "global", "global", import("@reduxjs/toolkit").SliceSelectors<GlobalState>>;
export declare const updateTokensPage: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    [network: string]: number;
}, "global/updateTokensPage">, setShowConfirmCard: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "global/setShowConfirmCard">, setTokensNoMoreForNetwork: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    network: string;
    noMore: boolean;
}, "global/setTokensNoMoreForNetwork">;
declare const _default: import("redux").Reducer<GlobalState>;
export default _default;
