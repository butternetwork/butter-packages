"use client";
import { useCallback, useMemo } from "react";
import useEvmWallet from "./useEvmWallet";
import useSolanaWallet from "./useSolanaWallet";
import { showError } from "../../utils/notifications";
import useNearWallet from "./useNearWallet";
import useTronWallet from "./useTronWallet";
import useTonWallet from "./useTonWallet";
import useBtcWallet from "./useBtcWallet";
export default function useWallets() {
    const evm = useEvmWallet();
    const solana = useSolanaWallet();
    const near = useNearWallet();
    const tron = useTronWallet();
    const ton = useTonWallet();
    const btc = useBtcWallet();
    const WalletProviders = useMemo(() => {
        return [evm, solana, near, tron, ton, btc];
    }, [evm, solana, near, tron, ton, btc]);
    const handleConnect = useCallback((providerName, chain) => {
        const provider = WalletProviders.find((provider) => provider.name === providerName);
        try {
            provider?.connectWallet(chain);
        }
        catch {
            console.error("Couldn't connect the account");
        }
    }, [WalletProviders]);
    const handleDisconnect = useCallback(async (providerName) => {
        const provider = WalletProviders.find((provider) => provider.name === providerName);
        try {
            await provider?.disconnectWallet();
        }
        catch (e) {
            showError("Couldn't disconnect the account");
        }
    }, [WalletProviders]);
    const getConnectedWallets = useCallback(() => {
        let connectedWallets = [];
        WalletProviders.forEach((wallet) => {
            const w = wallet.getConnectedWallet();
            connectedWallets = w ? [...connectedWallets, w] : [...connectedWallets];
        });
        return connectedWallets;
    }, [WalletProviders]);
    return {
        wallets: getConnectedWallets(),
        connectWallet: handleConnect,
        disconnectWallet: handleDisconnect,
    };
}
