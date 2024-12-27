"use client";
import { createStyles } from "@mantine/emotion";
export const useHistoryMainCardStyles = createStyles((theme, _, u) => ({
    root: {
        background: theme.colors.background[6],
        padding: "24px 12px",
        borderRadius: "12px",
        flexShrink: 0,
        userSelect: "none",
        position: "relative",
        width: "100%",
        [u.largerThan("md")]: {},
    },
    topButton: {
        padding: "2px 8px 3px",
        borderRadius: "4px",
        backgroundColor: theme.colors.background1[6],
        ["&:disabled"]: {
            opacity: "0.6",
        },
    },
    list: {
        listStyle: "none",
        ["li"]: {
            margin: "10px 0",
        },
    },
}));
export const useHistoryItemStyles = createStyles((_theme, _, u) => ({
    root: {
        padding: "12px 24px",
        borderRadius: "10px",
        backgroundColor: _theme.colors.background1[6],
        cursor: "pointer",
    },
    coinList: {
        display: "flex",
        gap: "24px",
        alignItems: "center",
        flexWrap: "wrap",
    },
    coinImg: {
        position: "absolute",
        left: "20px",
        width: "12px",
        height: "12px",
        top: "26px",
        border: "1px #fff solid",
        borderRadius: "50%",
    },
    time: {
        color: _theme.colors.foreground1[6],
        marginTop: "6px",
        fontSize: "12px",
        fontWeight: 400,
    },
    arrow: {
        marginLeft: "24px",
        marginTop: "6px",
    },
    stutas: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "0px",
    },
    swapInfo: {
        marginTop: "6px",
        display: "flex",
        gap: "4px",
        fontSize: "15px",
        alignItems: "center",
    },
    coinItem: {
        height: "40px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    tlItem: {
        paddingLeft: "25px",
        position: "relative",
        [u.largerThan("md")]: {
            paddingLeft: "35px",
        },
    },
    tlBullet: {
        position: "absolute",
        width: "20px",
        top: 0,
        left: 0,
        inset: "0 0 -20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gridGap: "10px",
        [u.largerThan("md")]: {
            width: "25px",
        },
    },
}));
export const useCrossValueBoxStyles = createStyles((theme, _, u) => ({
    root: {
        height: "25px",
        backgroundColor: "#25292e",
        display: "flex",
        alignItems: "center",
        border: "dashed 0.5px #25292e",
        borderRadius: "5px",
        overflow: "hidden",
    },
    value: {
        width: "26vw",
        textAlign: "center",
        color: theme.colors.yellow[6],
        lineHeight: "25px",
        fontSize: "14px",
        fontWeight: 600,
        [u.largerThan("md")]: {
            width: "127px",
        },
    },
    chain: {
        width: "26vw",
        backgroundColor: "#35393d",
        fontSize: "12px",
        fontWeight: 600,
        textAlign: "center",
        lineHeight: "24px",
        [u.largerThan("md")]: {
            width: "127px",
        },
    },
}));
export const useCrossStateTagStyles = createStyles((_theme, { bg }) => ({
    root: {
        backgroundImage: `url('${bg}')`,
        width: "80px",
        height: "28px",
        display: "flex",
        alignItems: "center",
    },
    text: {
        width: "100%",
        whiteSpace: "pre-wrap",
        fontSize: "12px",
        lineHeight: "1",
        textAlign: "center",
    },
}));
