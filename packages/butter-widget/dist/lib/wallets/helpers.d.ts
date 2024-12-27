import { WalletName } from "../types";
export declare function isValidTonAddress(address: string): boolean;
export declare function isValidAddress({ address, walletName, }: {
    address?: string;
    walletName: WalletName;
}): boolean;
