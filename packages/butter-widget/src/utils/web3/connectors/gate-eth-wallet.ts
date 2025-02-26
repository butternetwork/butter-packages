"use client";
import { Wallet } from "@rainbow-me/rainbowkit";
// import gateLogo from "../../../public/gate.svg";
import { InjectedConnector } from "wagmi/connectors/injected";

class GateEvmConnector extends InjectedConnector {
  readonly id = "gate";
  readonly name = "Gate Wallet";
  readonly ready = true;
  #provider?: any;

  async getProvider() {
    if (!this.#provider) {
      this.#provider = (window as any).gatewallet;
      (window as any).gatewallet.ethereum.on(
        "accountsChanged",
        (_accounts: any) => { },
      );
    }
    return this.#provider;
  }
}

const GateEvmWallet = ({ chains }: any): Wallet => ({
  id: "gate",
  name: "Gate wallet",
  iconUrl: "",
  iconBackground: "#FFFFFF",
  downloadUrls: {
    // android: 'https://play.google.com/store/apps/details?id=my.wallet',
    // ios: 'https://apps.apple.com/us/app/my-wallet',
    chrome:
      "https://chromewebstore.google.com/detail/gate-wallet/cpmkedoipcpimgecpmgpldfpohjplkpp",
    // qrCode: 'https://my-wallet/qr',
  },
  createConnector: () => {
    const connector = new GateEvmConnector({ chains, options: {} });
    return {
      connector,
      mobile: {
        getUri: async () => {
          const provider = await connector.getProvider();
          const uri = await new Promise<string>((resolve) =>
            provider.once("display_uri", resolve),
          );
          return uri;
        },
      },
      qrCode: {
        getUri: async () => {
          const provider = await connector.getProvider();
          const uri = await new Promise<string>((resolve) =>
            provider.once("display_uri", resolve),
          );
          return uri;
        },
        instructions: {
          learnMoreUrl: "",
          steps: [
            {
              description:
                "We recommend putting My Wallet on your home screen for faster access to your wallet.",
              step: "install",
              title: "Open the My Wallet app",
            },
            {
              description:
                "After you scan, a connection prompt will appear for you to connect your wallet.",
              step: "scan",
              title: "Tap the scan button",
            },
          ],
        },
      },
      extension: {
        instructions: {
          learnMoreUrl: "https://gate.io/",
          steps: [
            {
              description:
                "We recommend pinning Gate Wallet to your taskbar for quicker access to your wallet.",
              step: "install",
              title: "Install the Gate Wallet extension",
            },
            {
              description:
                "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
              step: "create",
              title: "Create or Import a Wallet",
            },
            {
              description:
                "Once you set up your wallet, click below to refresh the browser and load up the extension.",
              step: "refresh",
              title: "Refresh your browser",
            },
          ],
        },
      },
    };
  },
});

export default GateEvmWallet;
