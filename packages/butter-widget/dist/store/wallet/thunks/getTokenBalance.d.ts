import { Wallet } from '../../../lib/wallets/useWallets';
declare const getTokenBalance: import('@reduxjs/toolkit').AsyncThunk<{
    address: string;
    balance: string;
    chainId: string;
} | null, {
    wallet: Wallet | null;
    tokenAddress: string;
    decimals: number;
    chainId: string;
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
export default getTokenBalance;
