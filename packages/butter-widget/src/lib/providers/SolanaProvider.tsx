"use client";

import { PropsWithChildren, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  UnsafeBurnerWalletAdapter,
  TrustWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

const SolanaProvider = ({ children }: PropsWithChildren) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network =
    process.env.NEXT_PUBLIC_DEV === "1"
      ? WalletAdapterNetwork.Devnet
      : WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => {
    if (network === WalletAdapterNetwork.Devnet) return clusterApiUrl(network);
    // return "https://lb.drpc.org/ogrpc?network=solana&dkey=AknBRwAOBUmSsmLlA3fGJ3R4KXXcIaoR76h1rr3WfgV4";
    return "https://necessary-broken-tent.solana-mainnet.quiknode.pro/12741a7fd6e506423f3be7cf75afdd283fc0674a/";
  }, [network]);

  const wallets = useMemo(
    () => [
      /**
       * Wallets that implement either of these standards will be available automatically.
       *
       *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
       *     (https://github.com/solana-mobile/mobile-wallet-adapter)
       *   - Solana Wallet Standard
       *     (https://github.com/anza-xyz/wallet-standard)
       *
       * If you wish to support a wallet that supports neither of those standards,
       * instantiate its legacy wallet adapter here. Common legacy adapters can be found
       * in the npm package `@solana/wallet-adapter-wallets`.
       */
      new TrustWalletAdapter(),
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new UnsafeBurnerWalletAdapter(),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network],
  );

  return (
    <ConnectionProvider
      endpoint={endpoint}
      config={{
        confirmTransactionInitialTimeout: 120 * 1000,
      }}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default SolanaProvider;
