"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Badge, Box, Flex, Text } from "@mantine/core";
import { useRouteItemStyles } from "./styles";
import IconGas from "../icons/icon-gas";
import IconClock from "../icons/icon-clock";
import IconPath from "../icons/icon-path";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
import { useMemo } from "react";
import { customToFixed } from "../../utils/numbers";
import { useTranslation } from "react-i18next";
// import { useChainsMap } from "@/store/global/hooks";
const RouteItem = ({ best, onClick, data }) => {
    const { classes } = useRouteItemStyles({ best });
    const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });
    // const chainsMap = useChainsMap();
    // const chainLogo = useCallback(
    //   (chainId?: number) => {
    //     if (chainId) {
    //       return chainsMap[chainId]?.logoUri;
    //     }
    //     return "";
    //   },
    //   [chainsMap],
    // );
    const displayData = useMemo(() => {
        const totalPath = data.srcChain.route.length +
            (data.bridgeChain?.route.length || 0) +
            (data.dstChain?.route.length || 0);
        const paths = [data.srcChain];
        if (data.bridgeChain) {
            paths.push(data.bridgeChain);
        }
        if (data.dstChain) {
            paths.push(data.dstChain);
        }
        return {
            totalPath,
            paths,
        };
    }, [data.srcChain, data.bridgeChain, data.dstChain]);
    const { t } = useTranslation();
    return (_jsx(Box, { className: classes.root, onClick: onClick, children: _jsxs(Flex, { direction: "column", align: "flex-start", gap: mdUp ? 15 : 6, w: "100%", children: [_jsxs(Flex, { align: "center", justify: "space-between", w: "100%", children: [_jsx(Badge, { color: best ? "primary" : "gray", c: best ? "white" : "white", style: { borderRadius: "6px" }, variant: "filled", children: best ? t("best") : t("fastest") }), _jsxs(Flex, { align: "center", gap: "xs", children: [_jsxs(Flex, { align: "center", gap: 2, children: [_jsx(IconGas, {}), _jsx(Text, { fz: 12, fw: 600, children: customToFixed(data.gasFee.amount) + " " + data.gasFee.symbol })] }), _jsxs(Flex, { align: "center", gap: 2, children: [_jsx(IconClock, {}), _jsxs(Text, { fz: 12, fw: 600, children: [Math.ceil(data.timeEstimated / 60), "m"] })] }), _jsxs(Flex, { align: "center", gap: 2, children: [_jsx(IconPath, {}), _jsx(Text, { fz: 12, fw: 600, children: displayData.totalPath })] })] })] }), _jsx(Flex, { align: "center", justify: "end", w: "100%", children: _jsxs(Flex, { align: "center", gap: 6, children: [_jsx(Avatar, { radius: "xl", src: data?.dstChain
                                    ? data.dstChain.tokenOut.icon
                                    : data.srcChain.tokenOut.icon, size: 28 }), _jsxs(Text, { fz: 15, fw: 600, children: [" ", customToFixed(data?.dstChain
                                        ? data.dstChain.totalAmountOut
                                        : data.srcChain.totalAmountOut) +
                                        " " +
                                        (data?.dstChain
                                            ? data.dstChain.tokenOut.symbol
                                            : data.srcChain.tokenOut.symbol), " "] })] }) })] }) }));
};
export default RouteItem;
