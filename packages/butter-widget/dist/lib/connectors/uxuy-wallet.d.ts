import { Wallet } from '@rainbow-me/rainbowkit';
import { Chain } from 'wagmi';
import { EthereumProvider } from 'eip1193-provider';
export interface MyWalletOptions {
    projectId: string;
    chains: Chain[];
    provider: EthereumProvider;
}
export declare const uxuy: ({ projectId, chains, provider, ...options }: MyWalletOptions) => Wallet;
