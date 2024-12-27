"use client";

import "./global.css";
import { MantineProvider } from '@mantine/core';
import { PropsWithChildren, useEffect } from "react";
import { ButterWidgetConfig } from "./config/types";
import { butterConfig } from "@butternetwork/sdk";
import {
    emotionTransform,
    MantineEmotionProvider,
} from '@mantine/emotion';
import useMantineThemeWithConfig from "./hooks/useMantineThemeWithConfig";
import InnerWidget from "./Widget";


export const ButterWidget = ({ children, ...config }: PropsWithChildren<ButterWidgetConfig>) => {
    useEffect(() => {
        butterConfig.setOptions({
            providers: [],
            rpcs: config.sdkOptions.rpcs,
            ...config.sdkOptions
        });
    });

    const theme = useMantineThemeWithConfig({ config });

    return (
        <MantineProvider theme={theme} stylesTransform={emotionTransform} defaultColorScheme='dark'>
            <MantineEmotionProvider>
                <InnerWidget {...config} />
            </MantineEmotionProvider >
        </MantineProvider >

    )
}

export default ButterWidget;