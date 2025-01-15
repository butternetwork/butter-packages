import { WalletName } from './types';
export declare const TON_CHAINID = "1360104473493505";
export declare const BTC_CHAINID = "313230561203979757";
export declare const IsomericChainIds: {
    [key: string]: string;
};
export declare const isIsomericChain: (chainId: string | number) => boolean;
export declare const getWalletNameForChainId: (chainId?: string | number) => WalletName;
export declare const WalletIcons: {
    near: string;
    tron: string;
    solana: string;
    evm: string;
};
