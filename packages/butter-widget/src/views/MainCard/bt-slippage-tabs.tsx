"use client";

import { Tabs, TabsProps } from "@mantine/core";
import { createStyles } from "@mantine/emotion";

const useStyles = createStyles((theme) => ({
  tab: {
    // ...theme.fn.focusStyles(),
    backgroundColor: "transparent",
    color: theme.colors.foreground[6],
    border: `1px solid ${theme.colors.foreground1[6]}`,
    minWidth: "60px",
    padding: `4px 10px`,
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },

    "&:not(:first-of-type)": {
      borderLeft: 0,
    },
    "&:first-of-type": {
      borderTopLeftRadius: theme.radius.md,
      borderBottomLeftRadius: theme.radius.md,
    },

    "&:last-of-type": {
      borderTopRightRadius: theme.radius.md,
      borderBottomRightRadius: theme.radius.md,
    },

    "&[data-active]": {
      borderColor: theme.colors.primary[6],
      color: `${theme.colors.primary[6]} !important`,
      "&:not(:first-of-type)": {
        borderLeft: `1px solid ${theme.colors.primary[6]}`,
      },
    },
  },

  tabIcon: {
    marginRight: theme.spacing.xs,
    display: "flex",
    alignItems: "center",
  },

  list: {
    display: "flex",
    width: "100%",
  },
  root: {
    flexGrow: 1,
  }
}));

const BtSlippageTabs = (props: TabsProps) => {
  const { classes } = useStyles();
  return (
    <Tabs
      unstyled
      classNames={classes}
      {...props}
    />
  );
};

export default BtSlippageTabs;
