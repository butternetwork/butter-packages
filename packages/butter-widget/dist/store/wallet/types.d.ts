export interface WalletState {
    tokenBalances: Record<string, Record<string, string>>;
    userToken: {
        address: string;
        token: string;
        expired: number;
    } | null;
}
