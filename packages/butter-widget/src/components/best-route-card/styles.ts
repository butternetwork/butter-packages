"use client";
import { createStyles } from "@mantine/emotion";

export const useBestRouteCardStyles = createStyles((theme, _, u) => ({
  root: {
    width: "100%",
    padding: "10px 10px",
    borderRadius: "12px",
    backgroundColor: theme.colors.background1[6],
    userSelect: "none",
  },
  emptyContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    width: "100%",
    padding: "40px",
  },
  loadingContent: {},
  route: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  routeContent: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    backgroundColor: theme.colors.background1[6],
  },
  sourceChainCard: {
    position: "relative",
    width: "100px",
    marginRight: "60px",
    display: "flex",
    height: "70px",
    fontSize: "14px",
    alignItems: "center",
    gap: "12px",
    alignSelf: "start",
  },

  sourceChain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: theme.colors.background[6],
  },
  sourceText: {
    color: theme.colors.foreground[6],
    width: "100%",
    fontSize: "16px",
    fontWeight: 600,
    display: "flex",
    justifyContent: "space-between",
  },
  clainInfo: {
    display: "flex",
    gap: "4px",
    fontSize: "14px",
    alignItems: "center",
  },
  cardArrow: {
    position: "absolute",
    top: "13px",
    left: "85px",
  },

  sourceChainIcon: {
    marginLeft: "40px",
  },
  line: {
    height: "100%",
  },
  sourceChainNumber: {
    display: "flex",
    padding: "4px",
    alignItems: "center",
    justifyContent: "start",
    fontSize: "14px",
    flexShrink: 0,
    gap: "6px",
  },
  sourceChainTokenIcon: {},
  sourceChainTokenNumber: {},

  routeCard: {
    borderRadius: "8px",
    border: `1px solid ${theme.colors.background[6]}`,
    flexShrink: 0,
    width: "100%",
    padding: "6px",
  },
  tokenName: {
    display: "flex",
    alignItems: "center",
    height: "24px",
    fontSize: "14px",
    gap: "8px",
    marginBottom: "4px",
  },
  dexs: {
    display: "flex",
    gap: "6px",
    alignItems: "center",
  },
  routeCards: {
    gap: "12px",
    display: "flex",
    marginTop: "4px",
    marginBottom: "8px",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  cardButtom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",

    gap: "8px",
  },
  cardButtomCard: {
    fontSize: "14px",
    marginTop: "2px",
    borderRadius: "5px",
    background: "#474B4E",
    display: "flex",
    flexDirection: "column",
    width: "40%",

    alignItems: "center",
    justifyContent: "space-around",
  },
  topText: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    width: "100%",
  },
  topLeft: {
    gap: "2px",
    alignItems: "center",
    display: "flex",
    [u.largerThan("md")]: {
      gap: "6px",
    },
    flexWrap: "wrap",
  },
  foldButtom: {
    display: "flex",
    alignItems: "end",
    width: "24px",
    cursor: "pointer",
    justifyContent: "end",
    [u.largerThan("md")]: {
      marginRight: "4px",
    },
    borderRadius: "50%",
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
    padding: "8px",
    backgroundColor: theme.colors.background2[6],
    width: "100%",
    transition: "all 0.1s ease-in",
    [u.largerThan("md")]: {
      // width: "420px",
    },
    ["&:hover"]: {
      opacity: "0.7",
    },
    borderRadius: "12px",
    alignItems: "center",
  },
  tlItemBg: {
    padding: "12px 10px",
    background: "#33373B",
    borderRadius: "10px",
    position: "relative",
    marginLeft: "10px",

    ["&.active"]: {
      background: theme.colors.background1[6],
    },
    ["&:before"]: {
      position: "absolute",
      top: "50%",
      left: "-12px",
      content: "''",
      marginTop: "-5px",
      width: 0,
      height: 0,
      border: "6px solid",
      borderColor: "transparent transparent #33373B",
      transform: "rotate(-90deg)",
      ["&.active"]: {
        borderColor: "transparent transparent #494d50",
      },
    },
  },
}));
