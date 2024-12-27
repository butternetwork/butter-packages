"use client";
import { Box } from "@mantine/core";
import { useChainLogoStyles } from "./styles";
import { ChainLogoProps } from "./types";
import DefaultNet from "../../assets/images/networks.svg";

const ChainLogo = ({ empty = false, chainIcon, tokenIcon }: ChainLogoProps) => {
  const { classes } = useChainLogoStyles({ empty });
  return (
    <Box className={classes.root}>
      {empty ? (
        <>
          <Box className={classes.chainImg}></Box>
          <Box className={classes.tokenImg}></Box>
        </>
      ) : (
        <>
          <img
            width={32}
            height={32}
            src={tokenIcon || DefaultNet.src}
            alt={"chain"}
            className={classes.chainImg}
          ></img>
          <img
            width={12}
            height={12}
            src={chainIcon || DefaultNet.src}
            alt={"token"}
            className={classes.tokenImg}
          ></img>
        </>
      )}
    </Box>
  );
};

export default ChainLogo;
