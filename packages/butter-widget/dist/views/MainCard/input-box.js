"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useInputBoxStyles } from "./styles";
import { ActionIcon, Box, Button, Divider, Flex, Space, Text, TextInput, } from "@mantine/core";
import IconEdit from "../../components/icons/icon-edit";
import ChainLogo from "./chain-logo";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
import { useAmount, useAppDispatch, useFrom, useTo } from "../../store/hooks";
import { toggleAddressEditor, updateAmount } from "../../store/route/routes-slice";
import useToAddress from "../../hooks/useToAddress";
import { useTranslation } from "react-i18next";
import useFromTokenBalance from "../../hooks/useFromTokenBalance";
import useSWR from "swr";
import getTokenBalance from "../../store/wallet/thunks/getTokenBalance";
import useFromWallet from "../../hooks/useFromWallet";
import useWallets from "../../lib/wallets/useWallets";
import { getWalletNameForChainId } from "../../lib/configs";
import useClearInputAddress from "../../hooks/useClearInputAddress";
const InputBox = () => {
    const { t } = useTranslation();
    const { classes } = useInputBoxStyles();
    const wallet = useFromWallet();
    const { connectWallet } = useWallets();
    const from = useFrom();
    const to = useTo();
    const amount = useAmount();
    const toAddress = useToAddress();
    const dispatch = useAppDispatch();
    const handleValueChange = (e) => {
        if (Number(e.target.value) >= 0)
            dispatch(updateAmount(e.target.value));
    };
    const handleClickEdit = () => {
        dispatch(toggleAddressEditor(true));
    };
    const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });
    const balance = useFromTokenBalance();
    const handleMax = () => {
        dispatch(updateAmount(balance));
    };
    useSWR([wallet, from, "fetchFromTokenBalance"], ([wallet, from]) => {
        if (wallet && from?.token && from?.chain) {
            dispatch(getTokenBalance({
                wallet: wallet,
                tokenAddress: from?.token?.address,
                decimals: from?.token?.decimals,
                chainId: from?.chain?.chainId,
            }));
        }
    }, {
        refreshInterval: 6000,
    });
    useClearInputAddress();
    return (_jsx(Box, { className: classes.root, children: _jsxs(Box, { className: classes.boxRoot, children: [_jsxs(Box, { className: classes.addressBar, children: [_jsxs(Text, { className: classes.addressLabel, fz: 14, fw: 700, children: [t("receive_address"), ":"] }), !toAddress ? (_jsxs(Flex, { gap: 10, align: "center", mt: 6, children: [_jsx(Button, { size: "xs", variant: "outline", onClick: () => {
                                        connectWallet(getWalletNameForChainId(to?.chain?.chainId));
                                    }, children: "Connect Wallet" }), "or", _jsx(Button, { size: "xs", variant: "light", onClick: handleClickEdit, children: "Enter Address" })] })) : (_jsxs(Box, { className: classes.addressText, onClick: handleClickEdit, children: [_jsx(Text, { className: classes.addressInput, fz: 12, style: {
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }, children: toAddress ? (toAddress) : (_jsxs("div", { style: { color: "#5C5F65", fontSize: "14px" }, children: [" ", "Please enter Address"] })) }), _jsx(ActionIcon, { variant: "transparent", children: _jsx(IconEdit, {}) })] }))] }), _jsx(Divider, { color: "rgba(255,255,255,0.05)" }), _jsxs(Box, { className: classes.valueBox, children: [_jsx(Text, { fz: 14, fw: 700, children: t("you_pay") }), _jsx(Space, { h: mdUp ? 10 : 0 }), _jsx(Flex, { align: "flex-start", justify: "space-between", children: _jsxs(Flex, { align: "center", gap: "xs", w: "100%", children: [_jsx(ChainLogo, { empty: !from?.chain?.logoUri, chainIcon: from?.chain?.logoUri, tokenIcon: from?.token?.image }), _jsxs(Flex, { direction: "column", style: {
                                            flexGrow: 1,
                                        }, children: [_jsx(TextInput, { type: "number", value: amount, onChange: handleValueChange, placeholder: "0.0", size: "xs", variant: "transparent", styles: (theme) => ({
                                                    input: {
                                                        background: "transparent",
                                                        fontSize: "18px",
                                                        fontWeight: 700,
                                                        color: theme.colors.foreground[6],
                                                        padding: 0,
                                                        ["&:focus"]: {
                                                            border: "none",
                                                        },
                                                    },
                                                }), w: "100%", rightSectionWidth: "38px", rightSection: _jsx(Button, { px: 0, h: 20, w: 38, variant: "light", size: "xs", onClick: handleMax, children: t("max") }) }), _jsxs(Flex, { w: "100%", align: "center", justify: "space-between", children: [_jsx(Text, { c: "opw.3", fz: 12 }), _jsxs(Text, { fz: 12, children: [t("balance"), ": ", from?.chain?.chainId ? balance : 0] })] })] })] }) })] })] }) }));
};
export default InputBox;
