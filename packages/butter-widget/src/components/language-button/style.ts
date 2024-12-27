"use client";
import { createStyles } from "@mantine/emotion";

export const useLanguageButtonStyles = createStyles((_theme) => ({
  button: {
    background: _theme.colors.background[6],
    height: "26px",
    padding: "0",
    borderRadius: "4px",
    width: "26px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // [u.largerThan("md")]: {
    //   padding: "8px 10px",
    //   height: "40px",
    //   maxWidth: "180px",
    //   width: "40px",
    //   borderRadius: "8px",
    // },
  },
  content: {
    background: _theme.colors.background[6],
    color: _theme.colors.foreground[6],
  },
  menuItem: {
    color: _theme.colors.foreground[6],
  }
}));
