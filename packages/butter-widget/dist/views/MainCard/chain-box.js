"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Flex, Text } from "@mantine/core";
import { useChainBoxStyles } from "./styles";
import ChainLogo from "./chain-logo";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
import { useTranslation } from "react-i18next";
const ChainBox = ({ position, chain, token, onClick, disabled, }) => {
    const { t } = useTranslation();
    const { classes } = useChainBoxStyles();
    const { isLargerOrEqual: mdUp } = useBreakpointsUp({
        breakpoint: "md",
    });
    return (_jsxs(Box, { className: classes.root, children: [_jsxs(Flex, { align: "flex-start", direction: "column", gap: mdUp ? "lg" : 0, className: classes.content, onClick: onClick, children: [_jsx(Text, { fz: 14, fw: 700, children: t(position.toLowerCase()) }), _jsxs(Flex, { align: "stretch", gap: "xs", children: [_jsx(ChainLogo, { chainIcon: chain?.logoUri, tokenIcon: token?.image, empty: !chain }), _jsxs(Flex, { direction: "column", align: "flex-start", justify: "space-between", children: [_jsx(Text, { fz: 18, fw: 700, lh: 1, children: token?.symbol || t("choose") }), _jsxs(Text, { fz: 12, fw: 500, children: ["on ", chain?.name || t("chain_token")] })] })] })] }), disabled && _jsx(Box, { className: classes.overlay })] }));
};
export default ChainBox;
