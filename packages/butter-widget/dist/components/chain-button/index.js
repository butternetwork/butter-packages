"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Menu, Text, UnstyledButton, useMantineTheme } from "@mantine/core";
import testchain from "../../../public/chain-test.webp";
import { useState } from "react";
import IconAlertCircle from "../icons/icon-alert-circle";
import { useChainButtonStyles } from "./styles";
import IconArrowDownSimple from "../icons/icon-arrow-down-simple";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
const Chains = [
    {
        name: "Ethereum",
        chainID: 1,
        icon: testchain,
    },
    {
        name: "Polygon",
        chainID: 37,
        icon: testchain,
    },
    {
        name: "Celo",
        chainID: 123,
        icon: testchain,
    },
    {
        name: "Fantom",
        chainID: 222,
        icon: testchain,
    },
];
const ChainButton = () => {
    const { classes } = useChainButtonStyles();
    const [unSupport,] = useState(false);
    const [selectedChain,] = useState({
        name: "Fantom",
        chainID: 222,
        icon: testchain,
    });
    const theme = useMantineTheme();
    const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });
    return (_jsxs(Menu, { shadow: "md", width: mdUp ? 200 : 40, classNames: classes, children: [_jsx(Menu.Target, { children: _jsx(UnstyledButton, { className: classes.button, children: _jsxs(Flex, { align: "center", justify: "space-between", gap: "xs", children: [unSupport && (_jsxs(Flex, { children: [_jsx(IconAlertCircle, {}), _jsx(Text, { fz: 14, fw: 600, children: "Unsupported" })] })), selectedChain && (_jsxs(Flex, { align: "center", gap: "xs", children: [_jsx("img", { src: selectedChain.icon.src, width: mdUp ? 25 : 18 }), mdUp && (_jsx(Text, { fz: 14, fw: 600, children: selectedChain.name }))] })), _jsx(IconArrowDownSimple, { color: theme.colors.dark[6] })] }) }) }), _jsx(Menu.Dropdown, { children: Chains.map((chain, index) => (_jsx(Menu.Item, { leftSection: _jsx("img", { src: chain.icon.src, width: mdUp ? 30 : 18 }), children: mdUp && (_jsx(Text, { fz: 14, fw: 600, children: chain.name })) }, index))) })] }));
};
export default ChainButton;
