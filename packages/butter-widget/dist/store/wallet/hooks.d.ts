export declare const useTokenBalances: () => Record<string, Record<string, string>>;
export declare const useTokenBalance: (token: string, chainId: string) => string;
export declare const useUserToken: () => {
    address: string;
    token: string;
    expired: number;
} | null;
