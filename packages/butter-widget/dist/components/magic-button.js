"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createStyles, getStylesRef } from "@mantine/emotion";
const useStyles = createStyles((theme, { width, height, justifyContent, radius, selected }) => ({
    btn: {
        color: theme.colors.foreground[6],
        outline: "none",
        border: "none",
        boxShadow: "none",
        background: "transparent",
        // [`&:hover .${getStylesRef("btnFill")}`]: {
        //     transform: "translateY(0%) scale(0.98) rotate(0.001deg)",
        // },
        // [`&:hover .${getStylesRef('btnContent')}`]: {
        //     transform: "translateY(-10%) scale(0.96) rotate(0.001deg)",
        //     opacity: ".5",
        // },
        // [`&:hover .${getStylesRef('btnDuplicateFill')}`]: {
        //     transform: "translateY(0%) scale(1) rotate(0.001deg)",
        // },
        // [`&:hover .${getStylesRef('btnDuplicateContent')}`]: {
        //     transform: "translateY(0%) scale(1) rotate(0.001deg)",
        //     opacity: 1,
        // },
        [`&:focus .${getStylesRef("btnFill")}`]: {
            transform: "translateY(0%) scale(0.98) rotate(0.001deg)",
        },
        [`&:focus .${getStylesRef("btnContent")}`]: {
            transform: "translateY(-10%) scale(0.96) rotate(0.001deg)",
            opacity: ".5",
        },
        [`&:focus .${getStylesRef("btnDuplicateFill")}`]: {
            transform: "translateY(0%) scale(1) rotate(0.001deg)",
        },
        [`&:focus .${getStylesRef("btnDuplicateContent")}`]: {
            transform: "translateY(0%) scale(1) rotate(0.001deg)",
            opacity: 1,
        },
    },
    btnClick: {
        ref: getStylesRef("btnClick"),
        cursor: "pointer",
        border: 0,
        background: "transparent",
        borderRadius: radius || "2em",
        minWidth: "1em",
        height: height,
        width: width || "unset",
        padding: 0,
        fontSize: "1em",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent,
        position: "relative",
        textDecoration: "none",
        willChange: "transform",
        outline: 0,
        transform: "translateZ(0) rotate(0.001deg)",
        paddingRight: "10px",
    },
    btnFill: {
        ref: getStylesRef("btnFill"),
        border: `solid 1px ${theme.colors.background1[6]}`,
        borderRadius: radius || "2em",
        position: "absolute",
        width: "100%",
        height: "100%",
        transform: selected
            ? "translateY(0%) scale(0.98) rotate(0.001deg)"
            : "translateY(0%) scale(1) rotate(0.001deg)",
        transition: "0.4s cubic-bezier(0.5, 0.75, 0, 1), border 0.2s ease-in-out, background-color 0.2s ease-in-out",
    },
    btnContent: {
        ref: getStylesRef("btnContent"),
        border: "none",
        position: "relative",
        opacity: selected ? ".5" : 1,
        transform: selected
            ? "translateY(-10%) scale(0.96) rotate(0.001deg)"
            : "translateY(0%) scale(1) rotate(0.001deg)",
        transition: "all 0.4s cubic-bezier(0.5, 0.75, 0, 1)",
    },
    btnDuplicateFill: {
        ref: getStylesRef("btnDuplicateFill"),
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transform: selected
            ? "translateY(0%) scale(1) rotate(0.001deg)"
            : "translateY(100%) scale(0.96) rotate(0.001deg)",
        transition: "0.4s cubic-bezier(0.5, 0.75, 0, 1), border 0.2s ease-in-out, background-color 0.2s ease-in-out",
        background: theme.colors.background1[6],
    },
    btnDuplicateContent: {
        ref: getStylesRef("btnDuplicateContent"),
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        left: 0,
        opacity: selected ? 1 : 0,
        transform: selected
            ? "translateY(0%) scale(1) rotate(0.001deg)"
            : "translateY(100%) scale(0.9) rotate(0.001deg)",
        transition: "all 0.4s cubic-bezier(0.5, 0.75, 0, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent,
    },
}));
const MagicButton = ({ children, width, height, justifyContent, radius, onClick, selected, }) => {
    const { classes } = useStyles({
        width,
        height,
        justifyContent,
        radius,
        selected,
    });
    return (_jsx("button", { className: classes.btn, onClick: onClick, children: _jsxs("div", { className: classes.btnClick, children: [_jsx("div", { className: classes.btnFill }), _jsx("div", { className: classes.btnContent, children: children }), _jsx("div", { className: classes.btnDuplicateFill }), _jsx("div", { className: classes.btnDuplicateContent, children: children })] }) }));
};
export default MagicButton;
