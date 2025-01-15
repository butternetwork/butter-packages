import { Chain } from '@butternetwork/sdk';
import { Chain as WagmiChain } from 'wagmi';
export declare const transformChain: (chainItem: Chain) => WagmiChain;
