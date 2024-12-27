export declare const useChainsSelector: () => import("@butternetwork/sdk").Chain[];
export declare const useMetamaskChains: () => import("@butternetwork/sdk").Chain[];
export declare const useChainsMap: () => {
    [key: string]: import("@butternetwork/sdk").Chain;
};
export declare const useChainById: (chainId: string) => import("@butternetwork/sdk").Chain;
export declare const useChainLogoById: (chainId: string) => string | null;
export declare const useTokensForNetwork: (network: string) => import("@butternetwork/sdk").ResponseTokenItem[];
export declare const useTokenNoMoreForNetwork: (network: string) => boolean;
export declare const useTokensPageForNetwork: (network: string) => number;
export declare const useTokenLoading: () => boolean;
export declare const useShowConfirmCard: () => boolean;
