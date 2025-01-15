import { ButterSDKConfigOptions } from '@butternetwork/sdk';
import { ReactNode } from 'react';
export interface ButterWidgetConfig {
    title?: ReactNode;
    sdkOptions: Omit<ButterSDKConfigOptions, "providers">;
    colors?: {
        primary: string;
        red: string;
        green: string;
        background: string;
        background1: string;
        background2: string;
        foreground: string;
        foreground1: string;
        divider: string;
    };
    fontFamily?: string;
}
