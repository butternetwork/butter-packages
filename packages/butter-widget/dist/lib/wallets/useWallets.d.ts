export type TokenBalanceProps = {
    address: string;
    decimals?: number;
};
export type Wallet = {
    address: string | `0x${string}`;
    providerName: string;
    icon?: string;
    connector?: string;
    metadata?: any;
    chainId?: string | number;
    getBalances: (tokens: TokenBalanceProps[], chainId?: number) => Promise<string[]>;
};
export type WalletProvider = {
    connectWallet: (chain?: string | number | undefined | null) => Promise<void> | undefined | void;
    disconnectWallet: () => Promise<void> | undefined | void;
    getConnectedWallet: () => Wallet | undefined;
    name: string;
};
export default function useWallets(): {
    wallets: Wallet[];
    connectWallet: (providerName: string, chain?: string | number) => void;
    disconnectWallet: (providerName: string) => Promise<void>;
};
