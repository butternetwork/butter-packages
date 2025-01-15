import { AccountState, WalletSelector } from '@near-wallet-selector/core';
import { WalletSelectorModal } from '@near-wallet-selector/modal-ui';
import { ReactNode, default as React } from 'react';
import { Near } from 'near-api-js';
declare global {
    interface Window {
        selector: WalletSelector;
        modal: WalletSelectorModal;
    }
}
interface WalletSelectorContextValue {
    selector: WalletSelector;
    modal: WalletSelectorModal;
    accounts: Array<AccountState>;
    accountId: string | null;
    connection: Near | null;
}
declare const NearProvider: React.FC<{
    children: ReactNode;
}>;
export declare function useNearWalletSelector(): WalletSelectorContextValue;
export default NearProvider;
