import { useMemo } from "react";
import { getThemeWithConfig } from "../theme";
export const defaultColors = {
    primary: "#F6D536",
    red: "#CC0E00",
    green: "#1CC10B",
    background: "rgba(41, 45, 49, 1)",
    background1: "#35393D",
    background2: "rgba(255,255,255,0.05)",
    foreground: "#FFFFFF",
    foreground1: "rgba(255, 255, 255, 0.6)",
    divider: "rgba(255, 255, 255, 0.05)",
};
const useMantineThemeWithConfig = ({ config }) => {
    return useMemo(() => {
        const _colors = config.colors || defaultColors;
        return getThemeWithConfig({
            colors: {
                primary: _colors.primary,
                red: _colors.red,
                green: _colors.green,
                background: _colors.background,
                background1: _colors.background1,
                background2: _colors.background2,
                foreground: _colors.foreground,
                foreground1: _colors.foreground1,
                divider: _colors.divider,
            },
            fontFamily: config.fontFamily,
        });
    }, [config]);
};
export default useMantineThemeWithConfig;
