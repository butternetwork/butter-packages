"use client";
import { createStyles } from "@mantine/emotion";

export const useChainButtonStyles = createStyles((theme, _, u) => ({
  item: {
    height: 26,
    padding: "6px",
    [u.largerThan("md")]: {
      height: 26,
    },
  },
  dropdown: {
    maxWidth: "180px",
  },
  button: {
    background: theme.colors.background[6],
    maxWidth: "100px",
    height: "26px",
    padding: "0 6px",
    borderRadius: "4px",
    width: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [u.largerThan("md")]: {
      padding: "0 10px",
      height: "26px",
      maxWidth: "180px",
      borderRadius: "4px",
    },
  },
}));
