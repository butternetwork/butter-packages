"use client";
import { Wallet } from "@rainbow-me/rainbowkit";
import kaikasLogo from "../../assets/kaikas.png";
import {
  Address,
  Chain,
  ConnectorNotFoundError,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import {
  ProviderRpcError,
  getAddress,
  UserRejectedRequestError,
  ResourceUnavailableRpcError,
} from "viem";

declare global {
  interface Window {
    klaytn: any;
  }
}

class KaikasConnector extends InjectedConnector {
  readonly id = "kaikas";
  readonly name = "Kaikas Wallet";
  readonly ready = true;

  #provider?: any;

  constructor(config: { chains?: Chain[]; options: any }) {
    super(config);
  }

  async getProvider() {
    if (!this.#provider) {
      this.#provider = (window as any).klaytn;
      (window as any).klaytn.on("accountsChanged", () => { });
    }
    return this.#provider;
  }

  async connect({ chainId }: { chainId?: number } = {}) {
    try {
      const provider = await this.getProvider();
      if (!provider) throw new ConnectorNotFoundError();

      if (provider.on) {
        provider.on("accountsChanged", this.onAccountsChanged);
        provider.on("networkChanged", this.onChainChanged);
        provider.on("disconnected", this.onDisconnect);
      }

      this.emit("message", { type: "connecting" });

      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      const account = getAddress(accounts[0] as string);
      // Switch to chain if provided
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        const chain = await this.switchChain(chainId);
        id = chain.id;
        unsupported = this.isChainUnsupported(id);
      }

      // Add shim to storage signalling wallet is connected
      if (this.options.shimDisconnect)
        this.storage?.setItem(this.shimDisconnectKey, true);

      return { account, chain: { id, unsupported } };
    } catch (error) {
      if (this.isUserRejectedRequestError(error))
        throw new UserRejectedRequestError(error as Error);
      if ((error as ProviderRpcError).code === -32002)
        throw new ResourceUnavailableRpcError(error as ProviderRpcError);
      throw error;
    }
  }

  async disconnect() {
    const provider = await this.getProvider();
    if (!provider?.removeListener) return;

    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("networkChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);

    // Remove shim signalling wallet is disconnected
    if (this.options.shimDisconnect)
      this.storage?.removeItem(this.shimDisconnectKey);
  }

  async getAccount() {
    const provider = await this.getProvider();
    if (!provider) throw new ConnectorNotFoundError();
    const accounts = await provider.request({
      method: "eth_accounts",
    });
    // return checksum address
    return getAddress(accounts[0] as string);
  }

  async getChainId() {
    const provider = await this.getProvider();
    if (!provider) throw new ConnectorNotFoundError();
    return provider
      .request({ method: "eth_chainId" })
      .then((res: any) => Number(res));
  }

  async isAuthorized() {
    try {
      if (
        this.options.shimDisconnect &&
        // If shim does not exist in storage, wallet is disconnected
        !this.storage?.getItem(this.shimDisconnectKey)
      )
        return false;

      const provider = await this.getProvider();
      if (!provider) throw new ConnectorNotFoundError();
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }

  // async switchChain(chainId: number) {
  //     const provider = await this.getProvider()
  //     if (!provider) throw new ConnectorNotFoundError()
  //     const id = numberToHex(chainId)
  //
  //     try {
  //         await Promise.all([
  //             provider.request({
  //                 method: 'wallet_switchEthereumChain',
  //                 params: [{ chainId: id }],
  //             }),
  //             new Promise<void>((res) =>
  //                 this.on('change', ({ chain }) => {
  //                     if (chain?.id === chainId) res()
  //                 }),
  //             ),
  //         ])
  //         return (
  //             this.chains.find((x) => x.id === chainId) ?? {
  //                 id: chainId,
  //                 name: `Chain ${id}`,
  //                 network: `${id}`,
  //                 nativeCurrency: { name: 'Ether', decimals: 18, symbol: 'ETH' },
  //                 rpcUrls: { default: { http: [''] }, public: { http: [''] } },
  //             }
  //         )
  //     } catch (error) {
  //         const chain = this.chains.find((x) => x.id === chainId)
  //         if (!chain)
  //             throw new ChainNotConfiguredForConnectorError({
  //                 chainId,
  //                 connectorId: this.id,
  //             })
  //
  //         // Indicates chain is not added to provider
  //         if (
  //             (error as ProviderRpcError).code === 4902 ||
  //             // Unwrapping for MetaMask Mobile
  //             // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
  //             (error as ProviderRpcError<{ originalError?: { code: number } }>)?.data
  //                 ?.originalError?.code === 4902
  //         ) {
  //             try {
  //                 await provider.request({
  //                     method: 'wallet_addEthereumChain',
  //                     params: [
  //                         {
  //                             chainId: id,
  //                             chainName: chain.name,
  //                             nativeCurrency: chain.nativeCurrency,
  //                             rpcUrls: [chain.rpcUrls.public?.http[0] ?? ''],
  //                             blockExplorerUrls: this.getBlockExplorerUrls(chain),
  //                         },
  //                     ],
  //                 })
  //
  //                 const currentChainId = await this.getChainId()
  //                 if (currentChainId !== chainId)
  //                     throw new UserRejectedRequestError(
  //                         new Error('User rejected switch after adding network.'),
  //                     )
  //
  //                 return chain
  //             } catch (error) {
  //                 throw new UserRejectedRequestError(error as Error)
  //             }
  //         }
  //
  //         if (this.isUserRejectedRequestError(error))
  //             throw new UserRejectedRequestError(error as Error)
  //         throw new SwitchChainError(error as Error)
  //     }
  // }

  async watchAsset({
    address,
    decimals = 18,
    image,
    symbol,
  }: {
    address: Address;
    decimals?: number;
    image?: string;
    symbol: string;
  }) {
    const provider = await this.getProvider();
    if (!provider) throw new ConnectorNotFoundError();
    return provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address,
          decimals,
          image,
          symbol,
        },
      },
    });
  }

  // protected onAccountsChanged = (accounts: string[]) => {
  //     if (accounts.length === 0) this.emit('disconnect')
  //     else
  //         this.emit('change', {
  //             account: getAddress(accounts[0] as string),
  //         })
  // }

  // protected onDisconnect = async (error: Error) => {
  //     // If MetaMask emits a `code: 1013` error, wait for reconnection before disconnecting
  //     // https://github.com/MetaMask/providers/pull/120
  //     if ((error as ProviderRpcError).code === 1013) {
  //         const provider = await this.getProvider()
  //         if (provider) {
  //             const isAuthorized = await this.getAccount()
  //             if (isAuthorized) return
  //         }
  //     }
  //
  //     this.emit('disconnect')
  //     // Remove shim signalling wallet is disconnected
  //     if (this.options.shimDisconnect)
  //         this.storage?.removeItem(this.shimDisconnectKey)
  // }

  protected isUserRejectedRequestError(error: unknown) {
    return (error as ProviderRpcError).code === 4001;
  }
}

const KaikasWallet = ({ chains }: any): Wallet => ({
  id: "kaikas",
  name: "Kaikas wallet",
  iconUrl: kaikasLogo.src,
  iconBackground: "#FFFFFF",
  downloadUrls: {
    // android: 'https://play.google.com/store/apps/details?id=my.wallet',
    // ios: 'https://apps.apple.com/us/app/my-wallet',
    chrome:
      "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi",
    // qrCode: 'https://my-wallet/qr',
  },
  createConnector: () => {
    const connector = new KaikasConnector({ chains, options: {} });

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
          learnMoreUrl: "https://docs.kaikas.io/",
          steps: [
            {
              description:
                "We recommend pinning Kaikas Wallet to your taskbar for quicker access to your wallet.",
              step: "install",
              title: "Install the Kaikas Wallet extension",
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

export default KaikasWallet;
