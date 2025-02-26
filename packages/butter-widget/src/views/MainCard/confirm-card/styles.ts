"use client";
import { createStyles } from "@mantine/emotion";

export const useConfirmCardStyles = createStyles(
  (theme, { show }: { show: boolean }) => ({
    root: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      overflow: "hidden",
      width: "100%",
      paddingBottom: "100px",
      zIndex: 1000,
    },
    modalOverlay: {
      position: "absolute",
      zIndex: 999,
      borderRadius: "12px",
      top: 100,
      left: 0,
      right: 0,
      display: show ? "block" : "none",
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      backdropFilter: "blur(0px)",
    },
    content: {
      width: "100%",
      padding: "10px 16px 20px 16px",
      borderRadius: "12px",
      background: theme.colors.background[6],
      transform: "translate(0, -100%)",
      display: "flex",
      flexDirection: "column",
    },
    tokenBox: {
      backgroundColor: theme.colors.background1[6],
      borderRadius: "6px",
      marginTop: "12px",
      padding: "12px",
    },
    addressBox: {
      padding: "12px",
      marginTop: "12px",
      marginBottom: "12px",

      borderRadius: "10px",
      backgroundColor: theme.colors.background1[6],
    },
  }),
);
