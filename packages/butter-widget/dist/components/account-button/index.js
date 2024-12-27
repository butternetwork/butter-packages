"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@mantine/core";
import { useMemo } from "react";
import { useClipboard } from "@mantine/hooks";
import useWallets from "../../lib/wallets/useWallets";
import useFromWallet from "../../hooks/useFromWallet";
import AccountMenuButton from "./account-menu-button";
import { WalletName } from "../../lib/types";
import useToWallet from "../../hooks/useToWallet";
const AccountButton = () => {
    const { wallets, disconnectWallet, connectWallet } = useWallets();
    const fromWallet = useFromWallet();
    const toWallet = useToWallet();
    const evmWallet = useMemo(() => {
        return wallets.find((wallet) => wallet.providerName === WalletName.EVM);
    }, [wallets]);
    const { copy } = useClipboard();
    return (_jsxs(_Fragment, { children: [fromWallet && fromWallet.providerName !== evmWallet?.providerName && (_jsx(AccountMenuButton, { icon: fromWallet.icon, onDisconnect: () => {
                    disconnectWallet(fromWallet?.providerName);
                }, onCopyAddress: () => {
                    copy(fromWallet?.address);
                }, address: fromWallet.address })), toWallet &&
                toWallet.providerName !== evmWallet?.providerName &&
                toWallet.providerName !== fromWallet?.providerName && (_jsx(AccountMenuButton, { icon: toWallet.icon, onDisconnect: () => {
                    disconnectWallet(toWallet?.providerName);
                }, onCopyAddress: () => {
                    copy(fromWallet?.address);
                }, address: toWallet.address })), evmWallet ? (_jsx(AccountMenuButton, { icon: evmWallet.icon, onDisconnect: () => {
                    disconnectWallet(evmWallet?.providerName);
                }, onCopyAddress: () => {
                    copy(evmWallet?.address);
                }, address: evmWallet?.address })) : (_jsx(Button, { variant: "outline", h: 26, radius: "sm", onClick: () => {
                    connectWallet(WalletName.EVM);
                }, children: "Connect Wallet" }))] }));
};
export default AccountButton;
