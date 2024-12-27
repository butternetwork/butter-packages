"use client";
import { createStyles } from "@mantine/emotion";

export const useTokenSelectorModalStyles = createStyles((theme) => ({
  content: {
    background: theme.colors.background[6],
  },
  header: {
    background: theme.colors.background[6],
  },
  body: {
    padding: 0,
  },
  title: {
    color: theme.colors.primary[6],
    fontWeight: 700,
  },
  close: {
    borderRadius: "50%",
    border: `1px solid ${theme.colors.primary[6]}`,
  },
}));

export const useTokenSelectorStyles = createStyles(
  (
    theme,
    _,
    u
  ) => ({
    root: {
      padding: 0,
      background: theme.colors.background[6],
      borderRadius: "12px",
      top: 0,
      left: 0,
      zIndex: 1000,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      [u.largerThan("md")]: {
        width: "100%",
      },
    },
    titleBar: {
      padding: "10px 15px 10px 15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    },
    chainBox: {
      padding: "14px 0 0 0",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    },
    inputBox: {
      padding: "0 15px",
    },
    chainList: {
      padding: "0 15px 14px 15px",
      ["::-webkit-scrollbar"]: {
        width: "5px",
      },
      ["::-webkit-scrollbar-track"]: {
        background: "#292d31",
      },
      ["::-webkit-scrollbar-thumb"]: {
        background: theme.colors.primary[6],
        borderRadius: "10px",
      },
      ["::-webkit-scrollbar-thumb:hover"]: {
        background: theme.colors.primary[7],
      },
      overflow: "auto",
      maxHeight: "200px",
      ["@media (max-width: 768px)"]: {
        height: "30vh",
      },
    },
    tokenListBox: {
      overflow: "auto",
      height: "300px",
      ["@media (max-width: 768px)"]: {
        height: "calc(70vh - 130px)",
      },
      [".mantine-List-itemWrapper"]: {
        width: "100%",
      },
      ["::-webkit-scrollbar"]: {
        width: "5px",
      },
      ["::-webkit-scrollbar-track"]: {
        background: "#292d31",
      },
      ["::-webkit-scrollbar-thumb"]: {
        background: theme.colors.primary[6],
        borderRadius: "10px",
      },
      ["::-webkit-scrollbar-thumb:hover"]: {
        background: theme.colors.primary[7],
      },
    },
    tokenItem: {
      color: theme.colors.foreground[6],
      cursor: "pointer",
      padding: "8px 16px",
      // ["&:hover"]: {
      //     background: "rgba(255,255,255,0.05)",
      // },
      ["&.selected"]: {
        background: "rgba(255,255,255,0.1)",
      },
    },
  }),
);
