"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMantineTheme } from "@mantine/core";
const IconChecked = ({ checked = false }) => {
    const theme = useMantineTheme();
    return (_jsxs("svg", { width: "15", height: "15", viewBox: "0 0 15 15", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("defs", { children: _jsx("path", { id: "rttjzfgrxa", d: "M0 0h9v6H0z" }) }), _jsxs("g", { fill: "none", fillRule: "evenodd", children: [_jsx("circle", { fill: checked ? theme.colors.primary[6] : theme.colors.background1[6], cx: "7.5", cy: "7.5", r: "7.5" }), _jsxs("g", { transform: "translate(3 5)", children: [_jsx("mask", { id: "6l6rcyzadb", fill: "#fff", children: _jsx("use", { xlinkHref: "#rttjzfgrxa" }) }), _jsx("path", { d: "M2.977 6a.587.587 0 0 1-.403-.177L.171 3.434a.61.61 0 0 1 0-.848.597.597 0 0 1 .845 0l1.96 1.97L7.984.177a.587.587 0 0 1 .841 0 .595.595 0 0 1 0 .845L3.4 5.823A.6.6 0 0 1 2.977 6", fill: theme.colors.foreground[6], mask: "url(#6l6rcyzadb)" })] })] })] }));
};
export default IconChecked;
