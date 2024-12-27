"use client";
import { TokenBalanceProps, WalletProvider } from "./useWallets";
import { useCallback } from "react";
import { AddressZero } from "@ethersproject/constants";
import { zipWith } from "lodash";
import { formatUnits } from "viem";
import { WalletName } from "../types";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { Address as TonAddress } from "@ton/core";
import { JettonMaster, TonClient } from "@ton/ton";


const useTonWallet = (): WalletProvider => {
  const name = WalletName.TON;
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress(true);
  const connectWallet = useCallback(() => {
    tonConnectUI.openModal();
  }, [tonConnectUI]);

  const disconnectWallet = useCallback(async () => {
    tonConnectUI.disconnect();
  }, [tonConnectUI]);

  const getBalances = useCallback(
    async (tokens: TokenBalanceProps[]) => {
      if (!tonConnectUI.account?.address || !tonConnectUI.wallet) {
        return [];
      }
      const address = TonAddress.parse(tonConnectUI.account.address);
      // const tonClient = await getHttpEndpoint().then((endpoint) => {
      //   return new TonClient({
      //     endpoint,
      //   });
      // });
      const tonClient = new TonClient({
        endpoint:
          "https://smart-white-emerald.ton-mainnet.quiknode.pro/c4a95791e2bd921f5fce7a4aceff0f717e1a9cd6/jsonRPC",
      });

      // const res: bigint[] = [];
      const calls = tokens.map((token) => {
        if (token.address === AddressZero) {
          return tonClient.getBalance(address);
        } else {
          const JettonMasterAddress = TonAddress.parse(token.address);
          const jettonMaster = tonClient.open(
            JettonMaster.create(JettonMasterAddress),
          );
          return jettonMaster
            .getWalletAddress(address)
            .then((userTokenAddress) => {
              return tonClient
                .runMethod(userTokenAddress, "get_wallet_data")
                .then((result) => {
                  const value = result.stack.pop();
                  return BigInt((value as any).value);
                })
                .catch((e) => {
                  console.log(e, "error");
                  return BigInt(0);
                });
            });
        }
      });
      const res = await Promise.all(calls);
      // for (let token of tokens) {
      //   if (token.address === AddressZero) {
      //     const balance = await tonClient.getBalance(address);
      //     res.push(balance);
      //     // await sleep(1);
      //     continue;
      //   }
      //   const JettonMasterAddress = TonAddress.parse(token.address);
      //   const jettonMaster = tonClient.open(
      //     JettonMaster.create(JettonMasterAddress),
      //   );
      //   const userTokenAddress = await jettonMaster.getWalletAddress(address);
      //   // await sleep(1);
      //   const value = await tonClient
      //     .runMethod(userTokenAddress, "get_wallet_data")
      //     .then((result) => {
      //       const value = result.stack.pop();
      //       return (value as any).value;
      //     })
      //     .catch((e) => {
      //       console.log(e, "error");
      //       return "0";
      //     });
      //   // await sleep(1);
      //
      //   res.push(BigInt(value));
      // }

      // const res = await Promise.allSettled(
      //   tokens.map((token) => {
      //     if (token.address === AddressZero) {
      //       return tonClient.getBalance(address);
      //     }
      //     const JettonMasterAddress = TonAddress.parse(token.address);
      //     const jettonMaster = tonClient.open(
      //       JettonMaster.create(JettonMasterAddress),
      //     );
      //
      //     return jettonMaster
      //       .getWalletAddress(address)
      //       .then((userTokenAddress) => {
      //         return tonClient
      //           .callGetMethod(userTokenAddress, "get_wallet_data")
      //           .then((result) => {
      //             const value = result.stack.pop();
      //             return (value as any).value;
      //           });
      //       });
      //   }),
      // ).then((res) => {
      //   console.log(res, "res");
      //   return res.map((item) => {
      //     if (item.status === "fulfilled") {
      //       return item.value;
      //     }
      //     return "0";
      //   });
      // });
      return zipWith(tokens, res, (token, balance) => {
        return formatUnits(balance, token.decimals || 18);
      });
    },
    [tonConnectUI],
  );

  const getConnectedWallet = useCallback(() => {
    if (address) {
      return {
        address: address,
        connector: tonConnectUI.wallet?.connectItems?.tonProof?.name,
        providerName: name,
        getBalances: getBalances,
      };
    }
  }, [address, getBalances]);

  return {
    connectWallet,
    disconnectWallet,
    getConnectedWallet,
    name,
  };
};

export default useTonWallet;
