"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import "./global.css";
import { MantineProvider } from '@mantine/core';
import { useEffect } from "react";
import { butterConfig } from "@butternetwork/sdk";
import { emotionTransform, MantineEmotionProvider, } from '@mantine/emotion';
import useMantineThemeWithConfig from "./hooks/useMantineThemeWithConfig";
import InnerWidget from "./Widget";
export const ButterWidget = ({ children, ...config }) => {
    useEffect(() => {
        butterConfig.setOptions({
            providers: [],
            rpcs: config.sdkOptions.rpcs,
            ...config.sdkOptions
        });
    });
    const theme = useMantineThemeWithConfig({ config });
    return (_jsx(MantineProvider, { theme: theme, stylesTransform: emotionTransform, defaultColorScheme: 'dark', children: _jsx(MantineEmotionProvider, { children: _jsx(InnerWidget, { ...config }) }) }));
};
export default ButterWidget;
