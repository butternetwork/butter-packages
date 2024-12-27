"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createStyles } from '@mantine/emotion';
import IconSettingBlack from "./icons/IconSettingBlack";
import IconCloseYellow from "./icons/IconCloseYellow";
import { useMantineTheme } from '@mantine/core';
const useStyles = createStyles((theme, { opened }) => ({
    btn: {
        position: "relative",
        width: "26px",
        height: "26px",
        borderRadius: "26px",
        border: "none",
        outline: "none",
        boxShadow: "none",
        cursor: "pointer",
        willChange: "transform",
        overflow: "hidden",
        backgroundColor: theme.colors.background[6],
        transition: "transform 0.1s linear",
        ["&:hover"]: {
            transform: "scale(1.05)",
        },
    },
    normalContent: {
        width: "100%",
        height: "100%",
        position: "relative",
        transition: "all 0.3s linear",
        transitionDelay: !opened ? "0.1s" : "0s",
        transformOrigin: "center center",
        transform: opened
            ? "scale(0, 0) rotate(360deg)"
            : "scale(1, 1) rotate(0deg)",
    },
    closeContent: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        transition: "all 0.3s var(--var-main-cubic)",
        transitionDelay: opened ? "0.1s" : "0s",
        transformOrigin: "center center",
        transform: !opened
            ? "scale(0, 0) rotate(360deg)"
            : "scale(1, 1) rotate(0deg)",
    },
}));
const SettingButton = ({ opened, onClick }) => {
    const { classes } = useStyles({ opened });
    const theme = useMantineTheme();
    return (_jsxs("button", { className: classes.btn, onClick: onClick, children: [_jsx("div", { className: classes.closeContent, children: _jsx(IconCloseYellow, { color: theme.colors.primary[6], foreground: theme.colors.foreground[6] }) }), _jsx("div", { className: classes.normalContent, children: _jsx(IconSettingBlack, { color: theme.colors.background[6], foreground: theme.colors.foreground[6] }) })] }));
};
export default SettingButton;
