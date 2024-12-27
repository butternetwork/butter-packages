"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Flex, Text } from "@mantine/core";
import IconArrowIn from "../icons/icon-arrow-in";
import IconArrowOut from "../icons/icon-arrow-out";
import IconArrowRight from "../icons/icon-arrow-right";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
const RouteContentItem = ({ data, index }) => {
    const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });
    return (_jsxs(Flex, { align: "center", justify: "space-between", sx: {
            position: "relative",
            paddingTop: 4,
        }, children: [_jsxs(Flex, { align: "center", gap: 10, children: [_jsxs(Flex, { direction: "column", align: "flex-start", children: [_jsxs(Flex, { align: "center", gap: 2, children: [_jsx(IconArrowIn, {}), _jsx(Text, { c: "white", fz: mdUp ? 14 : 12, fw: 600, children: Number(data?.singleRoute?.amountIn).toFixed(4) })] }), _jsxs(Flex, { align: "center", gap: 2, children: [_jsx(IconArrowOut, {}), _jsx(Text, { c: "white", fz: mdUp ? 14 : 12, fw: 600, children: Number(data?.singleRoute?.amountOut).toFixed(4) })] })] }), _jsxs(Flex, { align: "center", gap: 6, children: [_jsx(Avatar, { src: data?.tokenIn.icon, size: 20 }), _jsx(Text, { c: "white", fz: mdUp ? 14 : 12, fw: 600, children: data?.tokenIn.symbol }), _jsx(IconArrowRight, {}), _jsx(Avatar, { src: data?.tokenOut.icon, size: 20 }), _jsx(Text, { c: "white", fz: mdUp ? 14 : 12, fw: 600, children: data?.tokenOut.symbol })] })] }), mdUp && (_jsxs(Flex, { align: "center", justify: "flex-end", gap: 4, sx: {
                    position: "absolute",
                    top: -10,
                    right: -6,
                }, children: [_jsx(Text, { fz: 12, fw: 500, c: "white", children: data?.singleRoute?.dexName }), _jsx(Text, { fz: 21, fw: 700, c: "opw.", children: index })] }))] }));
};
export default RouteContentItem;
