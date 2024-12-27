"use client";
import { Wallet, getWalletConnectConnector } from "@rainbow-me/rainbowkit";
import { InjectedConnector } from "wagmi/connectors/injected";
import uxuyLogo from "../../assets/images/wallets/uxuy.webp";
import { Chain } from "wagmi";
import { EthereumProvider } from "eip1193-provider";

export interface MyWalletOptions {
  projectId: string;
  chains: Chain[];
  provider: EthereumProvider;
}

// const getUxuyWalletInjectedProvider = async () => {
//   const { ethereum } = new (await import("@uxuycom/web3-tg-sdk")).WalletTgSdk();
//   return ethereum;
// };

export const uxuy = ({
  projectId,
  chains,
  provider,
  ...options
}: MyWalletOptions): Wallet => {
  const isInjected = Boolean(provider);
  const shouldUseWalletConnect = !isInjected;
  return {
    id: "uxuy",
    name: "UXUY Wallet",
    iconUrl: async () => uxuyLogo.src,
    iconBackground: "#1A1A1C",
    installed: true,
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=com.uxuyt",
      ios: "https://apps.apple.com/us/app/uxuy-bitcoin-lightning-wallet/id6457257372",
      qrCode: "https://uxuy.com/zh-Hans",
      chrome:
        "https://chrome.google.com/webstore/detail/core-crypto-wallet-nft-ex/agoakfejjabomempkjlepdflaleeobhb",
      browserExtension: "https://uxuy.com/zh-Hans",
    },
    createConnector: () => {
      const connector = shouldUseWalletConnect
        ? getWalletConnectConnector({
          projectId,
          chains,
          options: {
            projectId,
          },
          version: "2",
        })
        : new InjectedConnector({
          chains,
          options: {
            getProvider: () => provider as any,
            ...options,
          },
        });
      const getUri = async () => {
        return "";
        // const uri = await getWalletConnectUri(connector, "2");
        // return uri;
      };
      return {
        connector,
        mobile: { getUri: shouldUseWalletConnect ? getUri : void 0 },
        qrCode: shouldUseWalletConnect
          ? {
            getUri,
            instructions: {
              learnMoreUrl:
                "https://support.avax.network/en/articles/6115608-core-mobile-how-to-add-the-core-mobile-to-my-phone",
              steps: [
                {
                  description:
                    "wallet_connectors.core.qr_code.step1.description",
                  step: "install",
                  title: "wallet_connectors.core.qr_code.step1.title",
                },
                {
                  description:
                    "wallet_connectors.core.qr_code.step2.description",
                  step: "create",
                  title: "wallet_connectors.core.qr_code.step2.title",
                },
                {
                  description:
                    "wallet_connectors.core.qr_code.step3.description",
                  step: "scan",
                  title: "wallet_connectors.core.qr_code.step3.title",
                },
              ],
            },
          }
          : void 0,
        extension: {
          instructions: {
            learnMoreUrl: "https://extension.core.app/",
            steps: [
              {
                description:
                  "wallet_connectors.core.extension.step1.description",
                step: "install",
                title: "wallet_connectors.core.extension.step1.title",
              },
              {
                description:
                  "wallet_connectors.core.extension.step2.description",
                step: "create",
                title: "wallet_connectors.core.extension.step2.title",
              },
              {
                description:
                  "wallet_connectors.core.extension.step3.description",
                step: "refresh",
                title: "wallet_connectors.core.extension.step3.title",
              },
            ],
          },
        },
      };
    },
  };
};
