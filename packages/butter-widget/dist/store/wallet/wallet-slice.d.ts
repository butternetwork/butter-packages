import { WalletState } from './types';
export declare const USER_TOKEN_KEY = "BT_USER_TOKEN";
export declare const walletSlice: import('@reduxjs/toolkit').Slice<WalletState, {
    setUserToken: (state: import('immer').WritableDraft<WalletState>, action: {
        payload: any;
        type: string;
    }) => void;
}, "wallet", "wallet", import('@reduxjs/toolkit').SliceSelectors<WalletState>>;
export declare const setUserToken: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "wallet/setUserToken">;
declare const _default: import('redux').Reducer<WalletState>;
export default _default;
