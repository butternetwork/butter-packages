"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useMemo } from "react";
import { Button } from "@mantine/core";
import useWallets from "../../lib/wallets/useWallets";
import { WalletName } from "../../lib/types";
import useFromWallet from "../../hooks/useFromWallet";
import { getWalletNameForChainId } from "../../lib/configs";
import { setShowConfirmCard } from "../../store/global/global-slice";
import useToAddress from "../../hooks/useToAddress";
const EvmConfirmButton = ({ disabled, onSubmit, }) => {
    const { connectWallet } = useWallets();
    const { t } = useTranslation();
    const from = useAppSelector((state) => state.routes.from);
    const { chain } = useNetwork();
    const { switchNetworkAsync } = useSwitchNetwork();
    const { isConnected } = useAccount();
    const selectedRoute = useAppSelector((state) => state.routes.selectedRoute);
    const to = useAppSelector((state) => state.routes.to);
    const toAddress = useToAddress();
    const isEvmNetworkCorrect = useMemo(() => {
        return chain?.id === Number(from?.chain?.chainId);
    }, [from?.chain?.chainId, chain?.id]);
    const handleSwitchNetwork = () => {
        console.log("from?.chain", from?.chain, switchNetworkAsync);
        if (from?.chain && switchNetworkAsync) {
            switchNetworkAsync(Number(from.chain.chainId));
        }
    };
    if (isConnected) {
        if (isEvmNetworkCorrect) {
            return (_jsx(Button, { onClick: onSubmit, disabled: disabled ||
                    !selectedRoute ||
                    selectedRoute === "empty" ||
                    (selectedRoute?.dstChain?.chainId == "56" &&
                        to?.token?.id == 12264) ||
                    !toAddress, variant: "filled", h: 44, fz: 18, c: "black", w: "100%", children: t("confirm") }));
        }
        else {
            return (_jsx(Button, { disabled: disabled, onClick: handleSwitchNetwork, h: 44, fz: 18, c: "black", w: "100%", variant: "filled", children: t("switch_network") }));
        }
    }
    else {
        return (_jsx(Button
        // loading={isConnecting}
        , { 
            // loading={isConnecting}
            onClick: () => {
                connectWallet(WalletName.EVM);
            }, h: 44, fz: 18, c: "black", w: "100%", variant: "filled", children: t("connect_wallet") }));
    }
};
const ConfirmButton = ({ disabled }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { connectWallet } = useWallets();
    const from = useAppSelector((state) => state.routes.from);
    const to = useAppSelector((state) => state.routes.to);
    const toAddress = useToAddress();
    const selectedRoute = useAppSelector((state) => state.routes.selectedRoute);
    const fromWallet = useFromWallet();
    const fromWalletName = useMemo(() => {
        return getWalletNameForChainId(from?.chain?.chainId);
    }, [from]);
    const onSubmit = () => {
        dispatch(setShowConfirmCard(true));
    };
    if (fromWallet?.providerName === "evm") {
        return _jsx(EvmConfirmButton, { disabled: disabled, onSubmit: onSubmit });
    }
    if (!!fromWallet) {
        return (_jsx(Button, { disabled: disabled ||
                !selectedRoute ||
                selectedRoute === "empty" ||
                (selectedRoute?.dstChain?.chainId == "56" &&
                    to?.token?.id == 12264) ||
                !toAddress, onClick: onSubmit, h: 44, fz: 18, c: "black", w: "100%", variant: "filled", children: t("confirm") }));
    }
    return (_jsx(Button, { onClick: async () => {
            console.log("fromWalletName", fromWalletName);
            connectWallet(fromWalletName);
        }, h: 44, fz: 18, c: "black", w: "100%", variant: "filled", children: t("connect_wallet") }));
};
export default ConfirmButton;
