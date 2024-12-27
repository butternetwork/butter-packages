"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@rainbow-me/rainbowkit/styles.css";
import { useEffect, useMemo, useState } from "react";
import { Center, Container, Loader } from "@mantine/core";
import { connectorsForWallets, darkTheme, RainbowKitProvider, } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig, } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import GateEvmWallet from "../../lib/connectors/gate-eth-wallet";
import { bitgetWallet, injectedWallet, metaMaskWallet, okxWallet, oneKeyWallet, safeWallet, tokenPocketWallet, 
// trustWallet,
// walletConnectWallet,
imTokenWallet,
// coin98Wallet,
 } from "@rainbow-me/rainbowkit/wallets";
import { useAppDispatch } from "../../store/hooks";
import { fetchChainsData } from "../../store/global/global-slice";
import { useMetamaskChains } from "../../store/global/hooks";
import { bsc } from "wagmi/chains";
// import binanceWallet from "@binance/w3w-rainbow-connector";
import KaikasWallet from "../../lib/connectors/kaikas-connector";
// import { unWallet } from "../../lib/connectors/custom-wallets";
import { transformChain } from "../../lib/transformChain";
import { uxuy } from "../../lib/connectors/uxuy-wallet";
import useDeviceType from "../../hooks/useDeviceType";
const EvmProvider = ({ children }) => {
    // const router = useRouter();
    const chains = useMetamaskChains();
    const dispatch = useAppDispatch();
    const { deviceType } = useDeviceType();
    const [uxuyProvider, setUxuy] = useState(null);
    useEffect(() => {
        import("@uxuycom/web3-tg-sdk").then((sdk) => {
            setUxuy(new sdk.WalletTgSdk().ethereum);
        });
    }, []);
    useEffect(() => {
        dispatch(fetchChainsData());
    }, []);
    const { chainList, publicClient } = useMemo(() => {
        if (chains.length === 0) {
            return {
                chainList: [],
                publicClient: null,
            };
        }
        const wagmiChains = chains.map((item) => transformChain(item));
        const res = wagmiChains.find((item) => item.id === 56);
        if (!res) {
            wagmiChains.push(bsc);
        }
        const { chains: chainList, publicClient } = configureChains(wagmiChains, [
            publicProvider(),
        ]);
        return {
            chainList,
            publicClient,
        };
    }, [chains]);
    const config = useMemo(() => {
        if (chainList.length > 0 && !!publicClient) {
            const wallets = [
                metaMaskWallet({
                    chains: chainList,
                    projectId: "3b5a989bac49588a809dd43cecd7c69d",
                }),
                uxuy({
                    chains: chainList,
                    projectId: "3b5a989bac49588a809dd43cecd7c69d",
                    provider: uxuyProvider,
                }),
                imTokenWallet({
                    chains: chainList,
                    projectId: "3b5a989bac49588a809dd43cecd7c69d",
                }),
                // coin98Wallet({
                //   chains: chainList,
                //   projectId: "3b5a989bac49588a809dd43cecd7c69d",
                // }),
                tokenPocketWallet({
                    chains: chainList,
                    projectId: "3b5a989bac49588a809dd43cecd7c69d",
                }),
                bitgetWallet({
                    chains: chainList,
                    projectId: "3b5a989bac49588a809dd43cecd7c69d",
                }),
                safeWallet({
                    chains: chainList,
                }),
                injectedWallet({
                    chains: chainList,
                }),
                okxWallet({
                    chains: chainList,
                    projectId: "3b5a989bac49588a809dd43cecd7c69d",
                }),
                oneKeyWallet({
                    chains: chainList,
                }),
                // binanceWallet({
                //   chains: chainList,
                // }),
                // trustWallet({
                //   chains: chainList,
                //   projectId: "3b5a989bac49588a809dd43cecd7c69d",
                // }),
                KaikasWallet({
                    chains: chainList,
                    projectId: "3b5a989bac49588a809dd43cecd7c69d",
                }),
                // walletConnectWallet({
                //   chains: chainList,
                //   projectId: "3b5a989bac49588a809dd43cecd7c69d",
                // }),
                // unWallet(),
                GateEvmWallet({
                    chains: chainList,
                    projectId: "3b5a989bac49588a809dd43cecd7c69d",
                }),
            ];
            const sorted = wallets.sort((a, _b) => {
                if (deviceType === "mobile") {
                    if (a.id === "uxuy") {
                        return -1;
                    }
                    return 0;
                }
                return 0;
            });
            const connectors = connectorsForWallets([
                {
                    groupName: "Recommanded",
                    wallets: [...sorted],
                },
            ]);
            return createConfig({
                autoConnect: true,
                connectors,
                publicClient: publicClient,
            });
        }
        return null;
    }, [chainList, publicClient, uxuyProvider, deviceType]);
    if (!config || !uxuyProvider) {
        return (_jsx(Container, { fluid: true, h: "100vh", children: _jsxs(Center, { w: "100%", h: "100%", children: [process.env.NEXT_PUBLIC_APP_ENV === "dev" && "Loading EVM", _jsx(Loader, {})] }) }));
    }
    return (_jsx(WagmiConfig, { config: config, children: _jsx(RainbowKitProvider, { locale: "en", theme: darkTheme(), chains: chainList, modalSize: "compact", children: children }) }));
};
export default EvmProvider;
