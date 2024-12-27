"use client";
import { useWalletClient } from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { useWallet as useTronWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { useNearWalletSelector } from "../lib/providers/NearProvider";
import { useEffect } from "react";
import {
  butterConfig,
  createEvmProvider,
  createNearProvider,
  createSolanaProvider,
  createTonProvider,
  createTronProvider,
} from "@butternetwork/sdk";

const useConfigSdk = () => {
  const { data: signer } = useWalletClient();
  const { wallet } = useWallet();
  const [tonConnectUI, _setOptions] = useTonConnectUI();
  const { wallet: tronWallet } = useTronWallet();
  const { selector } = useNearWalletSelector();

  useEffect(() => {
    selector.wallet().then((wallet: any) => {
      butterConfig.setOptions({
        providers: [
          createNearProvider({
            getWallet: async () => wallet as any,
          }),
        ],
      });
    });
  }, [selector]);

  useEffect(() => {
    console.log(tronWallet, tronWallet?.adapter, "tron wallet");
    butterConfig.setOptions({
      providers: [
        createTronProvider({
          getAdapter: async () => tronWallet?.adapter as any,
        }),
      ],
    });
  }, [tronWallet]);

  useEffect(() => {
    if (!tonConnectUI) {
      return;
    }
    butterConfig.setOptions({
      providers: [
        createTonProvider({
          getConnector: async () => tonConnectUI as any,
        }),
      ],
    });
  }, [tonConnectUI]);

  useEffect(() => {
    console.log(signer, "signer");
    butterConfig.setOptions({
      providers: [
        createEvmProvider({
          walletClient: signer as any,
        }),
      ],
    });
  }, [signer]);

  useEffect(() => {
    butterConfig.setOptions({
      providers: [
        createSolanaProvider({
          getWalletAdapter: async () => wallet?.adapter as any,
        }),
      ],
    });
  }, [wallet]);
};

export default useConfigSdk;
