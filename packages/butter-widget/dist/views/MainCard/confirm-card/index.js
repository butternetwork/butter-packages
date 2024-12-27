"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Accordion, ActionIcon, Avatar, Box, Button, Center, Flex, Loader, Space, Text, useMantineTheme, } from "@mantine/core";
import { useConfirmCardStyles } from "./styles";
import { gsap } from "gsap";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useAmount, useAppDispatch, useFrom, useIsSwap, useSlippage, useTo, } from "../../../store/hooks";
import { truncateAndTrimDecimals } from "../../../utils/numbers";
import { useNetwork } from "wagmi";
import useToAddress from "../../../hooks/useToAddress";
import { useTranslation } from "react-i18next";
import useFromWallet from "../../../hooks/useFromWallet";
import getRouteTxData from "../../../store/route/thunks/getRouteTxData";
import { useBestRoute, useLoadingRouteTxData } from "../../../store/route/hooks";
import useFromTokenBalance from "../../../hooks/useFromTokenBalance";
import IconCloseCircle from "../../../components/icons/icon-close-circle";
import BridgeButton from "../../../components/bridge-button";
import { useShowConfirmCard } from "../../../store/global/hooks";
import { setShowConfirmCard } from "../../../store/global/global-slice";
import { showError } from "../../../utils/notifications";
import { TON_CHAINID } from "../../../lib/configs";
const InfoContent = () => {
    const { classes } = useConfirmCardStyles({ show: true });
    const loadingData = useLoadingRouteTxData();
    const selectedRoute = useBestRoute();
    const toAddress = useToAddress();
    const from = useFrom();
    const to = useTo();
    const route = useMemo(() => {
        if (selectedRoute && selectedRoute !== "empty") {
            return selectedRoute;
        }
        return null;
    }, [selectedRoute]);
    const exchangeRate = useMemo(() => {
        const fromAmount = route?.srcChain.totalAmountIn || "0";
        const toAmount = route?.dstChain
            ? route.dstChain.totalAmountOut
            : route?.srcChain.totalAmountOut || "0";
        return Number(toAmount) === 0 ? 0 : Number(toAmount) / Number(fromAmount);
    }, [
        route?.srcChain.totalAmountIn,
        route?.dstChain,
        route?.srcChain.totalAmountOut,
    ]);
    const theme = useMantineTheme();
    const { t } = useTranslation();
    if (loadingData) {
        return (_jsx(Box, { w: "100%", h: 300, children: _jsx(Center, { w: "100%", children: _jsx(Loader, {}) }) }));
    }
    return (_jsxs(Flex, { align: "stretch", direction: "column", gap: 10, children: [_jsx(Accordion, { variant: "transparent", value: "0", style: {
                    [".mantine-Accordion-control"]: {
                        backgroundColor: theme.colors.background1[6],
                        borderRadius: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                    },
                    [".mantine-Accordion-item"]: {
                        borderRadius: "10px",
                        backgroundColor: theme.colors.background1[6],
                    },
                    [".mantine-Accordion-panel"]: {
                        padding: "12px",
                    },
                    [".mantine-Accordion-content"]: {
                        padding: "0 0 10px 0",
                    },
                }, children: _jsx(Accordion.Item, { value: "0", children: _jsx(Accordion.Panel, { children: _jsxs(Flex, { direction: "column", align: "stretch", gap: 6, w: "100%", children: [_jsx(Flex, { style: { marginBottom: "12px" }, align: "center", gap: 4, children: _jsxs(Text, { fz: 14, fw: 600, c: "foreground.6", children: ["1 ", from?.token?.symbol, " =", " ", truncateAndTrimDecimals(exchangeRate || 0, 6), " ", to?.token?.symbol] }) }), _jsxs(Flex, { align: "center", w: "100%", justify: "space-between", children: [_jsx(Flex, { align: "center", gap: 4, children: _jsx(Text, { fz: 13, c: "foreground1.6", children: t("fee") }) }), _jsxs(Text, { fz: 13, fw: 500, c: "foreground1.6", children: [truncateAndTrimDecimals(route?.bridgeFee.amount || 0, 6), " ", route?.bridgeFee.symbol] })] }), _jsxs(Flex, { align: "center", w: "100%", justify: "space-between", children: [_jsx(Flex, { align: "center", gap: 4, children: _jsx(Text, { fz: 13, c: "foreground1.6", maw: "50%", children: t("orignal_gas") }) }), _jsxs(Text, { fz: 13, fw: 500, c: "foreground1.6", children: [truncateAndTrimDecimals(Number(route?.gasFee.amount), 6), " ", route?.gasFee.symbol] })] }), _jsxs(Flex, { align: "center", w: "100%", justify: "space-between", children: [_jsx(Flex, { align: "center", gap: 4, children: _jsx(Text, { fz: 13, c: "foreground1.6", children: "Minimum received" }) }), _jsxs(Text, { fz: 13, fw: 500, c: "foreground1.6", children: [truncateAndTrimDecimals(Number(route?.minAmountOut.amount || 0), 6), " ", route?.minAmountOut.symbol] })] }), _jsxs(Flex, { align: "center", w: "100%", justify: "space-between", children: [_jsx(Flex, { align: "center", gap: 4, children: _jsx(Text, { fz: 13, c: "foreground1.6", children: t("estimate_time") }) }), _jsxs(Text, { fz: 13, fw: 500, c: "foreground1.6", children: [Math.ceil((route?.timeEstimated || 120) / 60), " minutes"] })] })] }) }) }) }), _jsxs(Flex, { align: "flex-start", direction: "column", className: classes.addressBox, children: [_jsxs(Text, { fz: 14, fw: 700, children: [t("receive_address"), ":"] }), _jsx(Text, { fz: 13, style: {
                            wordBreak: "break-all",
                        }, children: toAddress })] })] }));
};
const ConfirmCard = () => {
    const show = useShowConfirmCard();
    const { classes } = useConfirmCardStyles({ show });
    const rootBox = useRef(null);
    const contentBox = useRef(null);
    useEffect(() => {
        if (show) {
            const tl = gsap.timeline();
            tl.set(rootBox.current, {
                display: "block",
            });
            tl.to(contentBox.current, {
                translateY: "0",
                ease: "back.out(1.7)",
                duration: "0.45",
            });
        }
        else {
            const tl = gsap.timeline();
            tl.to(contentBox.current, {
                translateY: "-100%",
                duration: "0.3",
            });
            tl.set(rootBox.current, {
                display: "none",
            });
        }
    }, [show]);
    const dispatch = useAppDispatch();
    const fromWallet = useFromWallet();
    const selectedRoute = useBestRoute();
    const toAddress = useToAddress();
    const slippage = useSlippage();
    const from = useFrom();
    const to = useTo();
    const amount = useAmount();
    const { chain } = useNetwork();
    const balance = useFromTokenBalance();
    const slippage_ = useMemo(() => {
        if (from?.chain?.chainId === TON_CHAINID ||
            to?.chain?.chainId === TON_CHAINID) {
            if (Number(slippage) < 3) {
                return "3";
            }
        }
        return slippage;
    }, [from?.chain?.chainId, to?.chain?.chainId, slippage]);
    const insufficientBalance = useMemo(() => {
        if (!balance) {
            return true;
        }
        if (!amount) {
            return false;
        }
        return Number(balance) < Number(amount);
    }, [balance, amount]);
    const onClose = useCallback(() => {
        dispatch(setShowConfirmCard(false));
    }, []);
    // const { insufficientBalance, needApprove, approve } = useFromBalance({ routeTxData: result })
    useEffect(() => {
        if (!selectedRoute || !fromWallet) {
            onClose();
        }
    }, [selectedRoute, fromWallet, onClose]);
    useEffect(() => {
        if (chain?.id !== Number(from?.chain?.chainId))
            onClose();
    }, [chain?.id, from?.chain?.chainId]);
    const isSwap = useIsSwap();
    const route = useMemo(() => {
        if (selectedRoute && selectedRoute !== "empty") {
            return selectedRoute;
        }
        return null;
    }, [selectedRoute]);
    useEffect(() => {
        if (!fromWallet || !route || !toAddress || !slippage_ || !show)
            return;
        dispatch(getRouteTxData({
            route: selectedRoute,
            from: fromWallet.address,
            toAddress: toAddress,
            slippage: slippage_ + "",
        })).then((res) => {
            if (res.error) {
                showError(res.error.message);
                onClose();
            }
        });
    }, [fromWallet, selectedRoute, show, slippage_, toAddress]);
    // const handleBridgeNear = async () => {
    //     if (result) {
    //         try {
    //             await nearConnector.bridgeToken({ data: result })
    //         } catch (e: any) {
    //         }
    //     }
    // }
    // const handleBridgeTron = async () => {
    //     if (result) {
    //         try {
    //             await tronConnector.bridgeToken({ data: result })
    //         } catch (e: any) {
    //         }
    //     }
    // }
    const totalAmountOut = useMemo(() => {
        if (route?.dstChain) {
            return route.dstChain.totalAmountOut;
        }
        if (route?.bridgeChain) {
            return route.bridgeChain.totalAmountOut;
        }
        return route?.srcChain.totalAmountOut;
    }, [route]);
    const { t } = useTranslation();
    const theme = useMantineTheme();
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: classes.modalOverlay }), _jsx(Box, { className: classes.root, ref: rootBox, children: _jsxs(Box, { className: classes.content, ref: contentBox, children: [_jsxs(Flex, { align: "center", justify: "space-between", children: [_jsx(Text, { fz: 18, fw: 700, children: t("confirm_swap") }), _jsx(ActionIcon, { onClick: onClose, variant: "transparent", children: _jsx(IconCloseCircle, { color: theme.colors.foreground[6] }) })] }), _jsx(Space, { h: 20 }), _jsxs(Flex, { direction: "column", align: "stretch", gap: 10, w: "100%", children: [_jsxs(Flex, { align: "center", justify: "space-between", w: "100%", className: classes.tokenBox, children: [_jsx(Text, { fz: 18, fw: 700, children: truncateAndTrimDecimals(route?.srcChain.totalAmountIn || 0, 10) }), _jsxs(Flex, { align: "center", justify: "flex-end", gap: 4, children: [_jsx(Avatar, { src: route?.srcChain.tokenIn.icon, size: 25 }), _jsx(Text, { fz: 18, fw: 600, children: route?.srcChain.tokenIn.symbol })] })] }), _jsxs(Flex, { align: "center", justify: "space-between", w: "100%", className: classes.tokenBox, children: [_jsx(Text, { fz: 18, fw: 700, children: truncateAndTrimDecimals(totalAmountOut || 0, 10) }), _jsxs(Flex, { align: "center", justify: "flex-end", gap: 4, children: [_jsx(Avatar, { src: isSwap
                                                        ? route?.srcChain?.tokenOut.icon
                                                        : route?.dstChain?.tokenOut.icon, size: 25 }), _jsx(Text, { fz: 18, fw: 600, children: isSwap
                                                        ? route?.srcChain.tokenOut.symbol
                                                        : route?.dstChain?.tokenOut.symbol })] })] })] }), _jsx(Space, { h: 20 }), _jsx(InfoContent, {}), insufficientBalance ? (_jsx(Button, { fz: 18, c: "black", h: 42, disabled: true, children: t("insufficient_balance") })) : (show && _jsx(BridgeButton, {}))] }) })] }));
};
ConfirmCard.displayName = "ConfirmCard";
export default ConfirmCard;
