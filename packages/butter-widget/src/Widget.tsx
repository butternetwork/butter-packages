"use client";

import "./global.css";
import i18n from './i18n';
import { PropsWithChildren, useEffect, createContext, useContext } from "react";
import { ButterWidgetConfig } from "./config/types";
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
import { BrowserRouter } from "react-router"
import BtcProvider from "./lib/providers/BtcProvider";

const ButterWidgetContext = createContext<{ config: ButterWidgetConfig | null }>({ config: null });

export const useButterWidgetContext = () => {
    return useContext(ButterWidgetContext);
}

export const InnerWidget = ({ children, ...config }: PropsWithChildren<ButterWidgetConfig>) => {
    useEffect(() => {
        butterConfig.setOptions({
            providers: [],
            rpcs: config.sdkOptions.rpcs,
            ...config.sdkOptions
        });
    });
    return (
        <Provider store={store}>
            <EvmProvider>
                <TonProvider>
                    <SolanaProvider>
                        <TronProvider>
                            <NearProvider>
                                <BtcProvider>
                                    <I18nextProvider i18n={i18n}>
                                        <BrowserRouter>
                                            <ButterWidgetContext.Provider value={{ config }}>
                                                <App />
                                            </ButterWidgetContext.Provider>
                                        </BrowserRouter>
                                    </I18nextProvider>
                                </BtcProvider>
                            </NearProvider>
                        </TronProvider>
                    </SolanaProvider>
                </TonProvider>
            </EvmProvider>
        </Provider>
    )
}

export default InnerWidget;