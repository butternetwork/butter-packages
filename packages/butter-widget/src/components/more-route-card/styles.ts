"use client";
import { createStyles } from "@mantine/emotion";

export const useMoreRoutesCardStyles = createStyles((theme, _, u) => ({
  root: {
    padding: "10px 15px",
    background: theme.colors.background1[6],
    borderRadius: "12px",
    width: "100%",
    position: "relative",
    zIndex: 0,
    [u.largerThan("md")]: {
    },
  },
}));

export const useRouteItemStyles = createStyles(
  (_theme, { best }: { best: boolean }) => ({
    root: {
      padding: "10px 15px",
      background: _theme.colors.background2[6],
      borderRadius: "12px",
      width: "100%",
      backgroundClip: "padding-box" /* !importanté */,
      border: "solid 2px transparent" /* !importanté */,
      position: "relative",
      cursor: "pointer",
      ["&:before"]: {
        content: "''",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        margin: "-2px" /* !importanté */,
        borderRadius: "inherit" /* !importanté */,
        background: best
          ? `linear-gradient(to bottom, ${_theme.colors.primary[6]}, rgba(246, 213, 54, 0))`
          : _theme.colors.background2[6],
      },
    },
  }),
);
