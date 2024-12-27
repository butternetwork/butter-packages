"use client";
import { createStyles } from "@mantine/emotion";
export const useHistoryDetailCardStyles = createStyles((theme, _, u) => ({
    root: {
        position: "absolute",
        width: "100%",
        overflow: "hidden",
        top: "-800px",
        left: 0,
        borderRadius: "12px",
    },
    content: {
        width: "100%",
        background: theme.colors.background[5],
        padding: "24px 12px",
        transform: "translate(0, -100%)",
        [u.largerThan("md")]: {
            padding: "24px 12px",
        },
    },
    historyContent: {
        width: "100%",
        border: `solid 1px ${theme.colors.divider[5]}`,
        padding: "10px",
        borderRadius: "10px",
        marginTop: "12px",
    },
    infoBox: {
        padding: "8px 10px",
        borderRadius: "6px",
        background: theme.colors.background1[5],
        maxWidth: "100%",
        marginTop: "12px",
        overflow: "hidden",
        width: "100%",
    },
    addressText: {
        maxWidth: "100%",
        textOverflow: "ellipsis",
        whiteSpace: "pre-wrap",
        transform: "scale(0.88)",
        transformOrigin: "left",
        [u.largerThan("md")]: {
            transform: "scale(1)",
        },
    },
}));
export const useHistoryTimelineStyles = createStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    swapDetail: {
        marginTop: "6px",
        fontSize: "12px",
        color: theme.colors.foreground1[6],
    },
    tlItem: {
        position: "relative",
        paddingLeft: "22px",
    },
    progress: {
        background: "rgba(255,255,255,0.1)",
    },
    bullet: {
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    bulletIcon: {},
    bulletLine: {},
}));
