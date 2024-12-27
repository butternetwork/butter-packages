"use client";
import { TokenBalanceProps, WalletProvider } from "./useWallets";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import {
  Address,
  erc20ABI,
  useAccount,
  useChainId,
  useDisconnect,
} from "wagmi";
import { useCallback } from "react";
import { AddressZero } from "@ethersproject/constants";
import { zipWith } from "lodash";
import { createPublicClient, fallback, formatUnits, http } from "viem";
import { WalletName } from "../types";
import { WalletIcons } from "../configs";
import { useChainsMap } from "../../store/global/hooks";
import { transformChain } from "../transformChain";

const useEvmWallet = (): WalletProvider => {
  const name = WalletName.EVM;
  const { openConnectModal } = useConnectModal();
  const { disconnectAsync } = useDisconnect();
  const account = useAccount();
  const chainId = useChainId();
  const chains = useChainsMap();
  const connectWallet = useCallback(() => {
    openConnectModal && openConnectModal();
  }, [openConnectModal]);

  const disconnectWallet = useCallback(async () => {
    return disconnectAsync && (await disconnectAsync());
  }, [disconnectAsync]);

  const getBalances = useCallback(
    async (tokens: TokenBalanceProps[], chainId?: number) => {
      if (!account.address) {
        return [];
      }
      // const client = getPublicClient({chainId});
      try {
        const originalChain = chains[chainId || 1];
        const chain = transformChain(originalChain);
        const client = createPublicClient({
          chain,
          transport: fallback(
            originalChain.metamask.rpcUrls.map((rpc) => http(rpc)),
          ),
        });
        client.batch = {
          multicall: {
            batchSize: 2048,
            wait: 128,
          },
        };
        const res = await Promise.all(
          tokens.map((token) => {
            if (token.address === AddressZero) {
              return client
                .getBalance({
                  address: account.address as Address,
                })
                .then((balance) => {
                  return balance;
                });
            }
            return client.readContract({
              abi: erc20ABI,
              address: token.address as Address,
              args: [account.address as Address],
              functionName: "balanceOf",
            });
          }),
        );
        return zipWith(tokens, res, (token, balance) => {
          return formatUnits(balance, token.decimals || 18);
        });
      } catch (e) {
        console.error(e);
        return [];
      }
    },
    [account.address, chains],
  );

  const getConnectedWallet = useCallback(() => {
    if (account && account.address && account.connector) {
      return {
        address: account.address,
        connector:
          (account.connector as any)?._wallets?.[0]?.id || account.connector?.id,
        providerName: name,
        getBalances: getBalances,
        icon: chains[chainId]?.logoUri || WalletIcons[WalletName.EVM],
      };
    }
  }, [account, chainId, chains, getBalances, name]);

  return {
    connectWallet,
    disconnectWallet,
    getConnectedWallet,
    name,
  };
};

export default useEvmWallet;
