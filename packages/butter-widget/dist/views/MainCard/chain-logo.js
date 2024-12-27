"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mantine/core";
import { useChainLogoStyles } from "./styles";
import DefaultNet from "../../assets/images/networks.svg";
const ChainLogo = ({ empty = false, chainIcon, tokenIcon }) => {
    const { classes } = useChainLogoStyles({ empty });
    return (_jsx(Box, { className: classes.root, children: empty ? (_jsxs(_Fragment, { children: [_jsx(Box, { className: classes.chainImg }), _jsx(Box, { className: classes.tokenImg })] })) : (_jsxs(_Fragment, { children: [_jsx("img", { width: 32, height: 32, src: tokenIcon || DefaultNet.src, alt: "chain", className: classes.chainImg }), _jsx("img", { width: 12, height: 12, src: chainIcon || DefaultNet.src, alt: "token", className: classes.tokenImg })] })) }));
};
export default ChainLogo;
