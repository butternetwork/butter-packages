"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Container } from "@mantine/core";
import SwapPageProvider from "./views/Swap/swap-page-provider";
import SwapSearchContainer from "./views/Swap/swap-search-container";
import SwapPageContent from "./views/Swap/swap-page-content";
import useConfigSdk from "./hooks/useConfigSdk";
const App = () => {
    useConfigSdk();
    return (_jsx(Container, { fluid: true, p: 0, c: "foreground", children: _jsx(SwapPageProvider, { children: _jsx(SwapSearchContainer, { children: _jsx(SwapPageContent, {}) }) }) }));
};
export default App;
