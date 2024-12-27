"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import "./global.css";
import i18n from './i18n';
import { useEffect, createContext, useContext } from "react";
import EvmProvider from "./lib/providers/EvmProvider";
import SolanaProvider from "./lib/providers/SolanaProvider";
import TronProvider from "./lib/providers/TronProvider";
import TonProvider from "./lib/providers/TonProvider";
import { butterConfig } from "@butternetwork/sdk";
import NearProvider from "./lib/providers/NearProvider";
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from "react-router";
import BtcProvider from "./lib/providers/BtcProvider";
const ButterWidgetContext = createContext({ config: null });
export const useButterWidgetContext = () => {
    return useContext(ButterWidgetContext);
};
export const InnerWidget = ({ children, ...config }) => {
    useEffect(() => {
        butterConfig.setOptions({
            providers: [],
            rpcs: config.sdkOptions.rpcs,
            ...config.sdkOptions
        });
    });
    return (_jsx(Provider, { store: store, children: _jsx(EvmProvider, { children: _jsx(TonProvider, { children: _jsx(SolanaProvider, { children: _jsx(TronProvider, { children: _jsx(NearProvider, { children: _jsx(BtcProvider, { children: _jsx(I18nextProvider, { i18n: i18n, children: _jsx(BrowserRouter, { children: _jsx(ButterWidgetContext.Provider, { value: { config }, children: _jsx(App, {}) }) }) }) }) }) }) }) }) }) }));
};
export default InnerWidget;
