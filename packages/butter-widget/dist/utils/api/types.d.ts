import { Chain, SwapHistory, SwapHistoryDetail, Token } from '@butternetwork/sdk';
export type TokenItem = Token;
export interface MetamaskData {
    chainName: string;
    blockExplorerUrls: string[];
    chainId: string;
    nativeCurrency: {
        symbol: string;
        decimals: number;
        name: string;
    };
    rpcUrls: string[];
}
export interface NativeTokenData {
    symbol: string;
    address: string;
    coinKey: string;
    priceUSD: string;
    chainId: number;
    decimals: number;
    name: string;
    logoURI: string;
}
export type ChainItem = Chain;
export interface ChainTokenSelectedItem {
    chain: ChainItem | null;
    token: TokenItem | null;
}
export interface RouteTokenItem {
    address: string;
    name: string;
    decimals: number;
    symbol: string;
    icon: string;
}
export interface RouteSubRouteItem {
    amountIn: string;
    amountOut: string;
    dexName: string;
    path: [];
}
export interface RouteChainItem {
    bridge: string;
    chainId: string;
    tokenIn: RouteTokenItem;
    tokenOut: RouteTokenItem;
    totalAmountIn: string;
    totalAmountOut: string;
    route: RouteSubRouteItem[];
    singleRoute?: RouteSubRouteItem;
}
export interface RouteObj {
    diff: string;
    bridgeFee: {
        amount: string;
        symbol: string;
    };
    tradeType: number;
    gasFee: {
        amount: string;
        symbol: string;
    };
    gasEstimated: string;
    hash: string;
    srcChain: RouteChainItem;
    bridgeChain: RouteChainItem;
    dstChain: RouteChainItem;
    minAmountOut: {
        amount: string;
        symbol: string;
    };
    timeEstimated: number;
}
export interface RouteTxData {
    to: string;
    data: string;
    value: string;
    method?: string;
    chainId: string;
    args: {
        type: string;
        value: any;
    }[];
}
export type UserSwapHistoryResponseItem = SwapHistory;
export type UserSwapHistoryDetailResponse = SwapHistoryDetail;
