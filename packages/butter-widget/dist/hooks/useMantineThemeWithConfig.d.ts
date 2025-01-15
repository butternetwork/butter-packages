import { ButterWidgetConfig } from '../config/types';
export declare const defaultColors: {
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
declare const useMantineThemeWithConfig: ({ config }: {
    config: Pick<ButterWidgetConfig, "colors" | "fontFamily">;
}) => import('type-fest/source/partial-deep').PartialObjectDeep<import('@mantine/core').MantineTheme, {}>;
export default useMantineThemeWithConfig;
