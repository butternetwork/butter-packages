"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { setupCoin98Wallet } from "@near-wallet-selector/coin98-wallet";
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupNarwallets } from "@near-wallet-selector/narwallets";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupNearFi } from "@near-wallet-selector/nearfi";
import { setupSender } from "@near-wallet-selector/sender";
import { setupBitgetWallet } from "@near-wallet-selector/bitget-wallet";
import { setupWelldoneWallet } from "@near-wallet-selector/welldone-wallet";
import { setupNeth } from "@near-wallet-selector/neth";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupLedger } from "@near-wallet-selector/ledger";
import { setupRamperWallet } from "@near-wallet-selector/ramper-wallet";
import React, { useCallback, useContext, useEffect, useState, useMemo, } from "react";
import { distinctUntilChanged, map } from "rxjs";
import { Flex, Loader } from "@mantine/core";
import { keyStores, connect } from "near-api-js";
const mainnetConfig = {
    networkId: "mainnet",
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://mainnet.mynearwallet.com/",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://mainnet.nearblocks.io",
};
const testnetConfig = {
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://testnet.mynearwallet.com/",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://testnet.nearblocks.io",
};
const nearConfig = process.env.NEXT_PUBLIC_DEV === "1" ? testnetConfig : mainnetConfig;
const NearContext = React.createContext(null);
const NearProvider = ({ children }) => {
    const [selector, setSelector] = useState(null);
    const [modal, setModal] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [nearConnection, setNearConnection] = useState(null);
    const [loading, setLoading] = useState(true);
    const init = useCallback(async () => {
        try {
            const connectionConfig = {
                keyStore: new keyStores.BrowserLocalStorageKeyStore(),
                ...nearConfig,
            };
            const nearConnection = await connect(connectionConfig);
            const _selector = await setupWalletSelector({
                network: nearConfig.networkId,
                debug: true,
                modules: [
                    setupMyNearWallet(),
                    setupLedger(),
                    setupSender(),
                    setupBitgetWallet(),
                    setupMathWallet(),
                    setupMeteorWallet(),
                    setupNarwallets(),
                    setupWelldoneWallet(),
                    setupHereWallet(),
                    setupCoin98Wallet(),
                    setupNearFi(),
                    setupRamperWallet(),
                    setupNeth({
                        gas: "300000000000000",
                        bundle: false,
                    }),
                    // setupXDEFI(),
                    // setupNearMobileWallet(),
                    // setupMintbaseWallet({ contractId: "guest-book.testnet" }),
                ],
            });
            const _modal = setupModal(_selector, {
                contractId: "",
            });
            const state = _selector.store.getState();
            setAccounts(state.accounts);
            // this is added for debugging purpose only
            // for more information (https://github.com/near/wallet-selector/pull/764#issuecomment-1498073367)
            // window.selector = _selector;
            // window.modal = _modal;
            setSelector(_selector);
            setModal(_modal);
            setNearConnection(nearConnection);
            setLoading(false);
        }
        catch (e) {
            console.error(e);
        }
    }, []);
    useEffect(() => {
        init().catch((err) => {
            console.error(err);
            alert("Failed to initialise wallet selector");
        });
    }, [init]);
    useEffect(() => {
        if (!selector) {
            return;
        }
        const subscription = selector.store.observable
            .pipe(map((state) => state.accounts), distinctUntilChanged())
            .subscribe((nextAccounts) => {
            console.log("Accounts Update", nextAccounts);
            setAccounts(nextAccounts);
        });
        const onHideSubscription = modal.on("onHide", ({ hideReason }) => {
            console.log(`The reason for hiding the modal ${hideReason}`);
        });
        return () => {
            subscription.unsubscribe();
            onHideSubscription.remove();
        };
    }, [selector, modal]);
    const walletSelectorContextValue = useMemo(() => ({
        selector: selector,
        modal: modal,
        accounts,
        accountId: accounts.find((account) => account.active)?.accountId || null,
        connection: nearConnection,
    }), [selector, modal, accounts, nearConnection]);
    if (loading) {
        return (_jsxs(Flex, { align: "center", justify: "center", w: "100vw", h: "100vh", children: [process.env.NEXT_PUBLIC_APP_ENV === "dev" && "Loading NEAR", _jsx(Loader, {})] }));
    }
    return (_jsx(NearContext.Provider, { value: walletSelectorContextValue, children: children }));
};
export function useNearWalletSelector() {
    const context = useContext(NearContext);
    if (!context) {
        throw new Error("useWalletSelector must be used within a WalletSelectorContextProvider");
    }
    return context;
}
export default NearProvider;
