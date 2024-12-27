"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, Box, Flex, Text, Tooltip } from "@mantine/core";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { notifications } from "@mantine/notifications";
import { truncateAndTrimDecimals } from "../../utils/numbers";
import axios from "axios";
const mapKey = {
    USDC: "usd-coin",
    WETH: "weth",
    "M-BTC": "bitcoin",
    USDT: "tether",
    "USDT.e": "tether",
    ETH: "ethereum",
    oETH: "ethereum",
    WMAPO: "marcopolo",
    MAP: "marcopolo",
    oUSDT: "tether",
};
const GasInfoBox = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState("");
    const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });
    const selectedRoute = useAppSelector((state) => state.routes.selectedRoute);
    const to = useAppSelector((state) => state.routes.to);
    const from = useAppSelector((state) => state.routes.from);
    const [gasPrice, setGasPrice] = useState(0);
    const route = useMemo(() => {
        if (selectedRoute && selectedRoute !== "empty") {
            axios("https://api.coingecko.com/api/v3/simple/price?ids=" +
                mapKey[selectedRoute.bridgeFee.symbol] +
                "&vs_currencies=usd&include_24hr_change=true").then((res) => {
                setGasPrice(res.data[mapKey[selectedRoute.bridgeFee.symbol]]?.usd);
            });
            return selectedRoute;
        }
        return null;
    }, [selectedRoute]);
    useEffect(() => {
        if (route?.bridgeFee.amount !== undefined) {
            setActive("customization");
            // querySlippage().then(res => {
            //     if (Number(slippage) <= Number(res.data.slippage.replace(/[^0-9]/g, '')) / 100)
            //         notifications.show({
            //             message: <>
            //                 {`The destination chain swap is likely to fail and you will recieve the intermidate tokens as a result with the current slippage setting. Please acknowlegde the risk and increase your slippage `}<text style={{
            //                     fontWeight: 500,
            //                     color: '#F6D536'
            //                 }}>{`( suggested slippage ${Number(res.data.slippage.replace(/[^0-9]/g, '')) / 100}% )`}</text>
            //             </>,
            //             color: "yellow",
            //             title: "Slippage",
            //             autoClose: 5000,
            //             withCloseButton: true,
            //         })
            // })
        }
    }, [route?.bridgeFee.amount]);
    useEffect(() => {
        if (route?.gasFee.symbol !== undefined) {
            if (to?.chain?.chainId == "1")
                notifications.show({
                    message: (_jsxs(_Fragment, { children: [`This transaction will cost `, _jsx("text", { style: {
                                    fontWeight: 500,
                                    color: "#F6D536",
                                }, children: route?.gasFee.amount + " " + route?.gasFee.symbol }), ` in gas fees.`] })),
                    title: "High Gas Alert",
                    color: "yellow",
                    autoClose: 5000,
                    withCloseButton: true,
                });
        }
    }, [route?.gasFee.symbol]);
    return (_jsx(Accordion, { value: active, sx: {
            ".mantine-Accordion-item": {
                borderBottom: "none",
            },
            ".mantine-Accordion-label": {
                padding: "12px",
            },
            ".mantine-Accordion-control": {
                padding: 0,
            },
            ".mantine-Accordion-content": {
                padding: "10px 6px",
            },
        }, children: _jsx(Accordion.Item, { value: "customization", children: _jsx(Accordion.Panel, { children: _jsxs(Flex, { direction: "column", align: "stretch", gap: mdUp ? 6 : 0, w: "100%", children: [_jsxs(Flex, { align: "center", w: "100%", justify: "space-between", children: [_jsx(Flex, { align: "center", gap: 4, children: _jsx(Text, { fz: 13, c: "opw.3", children: t("Exchange Rate") }) }), _jsx(Text, { fz: 13, fw: 500, c: "opw.3", children: route ? (_jsx(_Fragment, { children: "1 " +
                                            from?.token?.symbol +
                                            " = " +
                                            truncateAndTrimDecimals(Number(route?.dstChain?.totalAmountOut
                                                ? route?.dstChain?.totalAmountOut
                                                : route?.srcChain?.totalAmountOut) / Number(route?.srcChain?.totalAmountIn), 6) +
                                            " " +
                                            to?.token?.symbol })) : ("--") })] }), _jsxs(Flex, { align: "center", w: "100%", justify: "space-between", children: [_jsxs(Flex, { align: "center", gap: 4, children: [_jsx(Text, { fz: 13, c: "opw.3", children: t("fee") }), _jsx(Tooltip, { label: "info", children: _jsx(Box, {}) })] }), _jsx(Text, { fz: 13, fw: 500, c: "opw.3", children: route
                                        ? truncateAndTrimDecimals(route?.bridgeFee.amount, 6) +
                                            " " +
                                            (route?.bridgeFee?.symbol || "") +
                                            (route?.bridgeFee?.symbol
                                                ? " ≈ ($ " +
                                                    truncateAndTrimDecimals(Number(gasPrice * Number(route?.bridgeFee.amount)), 4) +
                                                    ")"
                                                : "")
                                        : "--" })] }), _jsxs(Flex, { align: "center", w: "100%", justify: "space-between", children: [_jsx(Flex, { align: "center", gap: 4, children: _jsx(Text, { fz: 13, c: "opw.3", maw: "50%", children: t("orignal_gas") }) }), _jsx(Text, { fz: 13, fw: 500, c: "opw.3", children: route
                                        ? truncateAndTrimDecimals(route?.gasFee.amount, 6) +
                                            " " +
                                            route?.gasFee.symbol
                                        : "--" })] }), _jsxs(Flex, { align: "center", w: "100%", justify: "space-between", children: [_jsx(Flex, { align: "center", gap: 4, children: _jsx(Text, { fz: 13, c: "opw.3", children: t("estimate_time") }) }), _jsxs(Text, { fz: 13, fw: 500, c: "opw.3", children: [route
                                            ? Math.ceil((route?.timeEstimated || 120) / 60) + " minutes"
                                            : "--", " "] })] })] }) }) }) }));
};
export default GasInfoBox;
