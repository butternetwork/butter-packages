"use client";
import { Avatar, Badge, Box, Flex, Text } from "@mantine/core";
import { useRouteItemStyles } from "./styles";
import { RouteItemProps } from "./types";
import IconGas from "../icons/icon-gas";
import IconClock from "../icons/icon-clock";
import IconPath from "../icons/icon-path";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
import { useMemo } from "react";
import { customToFixed } from "../../utils/numbers";
import { useTranslation } from "react-i18next";
// import { useChainsMap } from "@/store/global/hooks";

const RouteItem = ({ best, onClick, data }: RouteItemProps) => {
  const { classes } = useRouteItemStyles({ best });
  const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });
  // const chainsMap = useChainsMap();
  // const chainLogo = useCallback(
  //   (chainId?: number) => {
  //     if (chainId) {
  //       return chainsMap[chainId]?.logoUri;
  //     }
  //     return "";
  //   },
  //   [chainsMap],
  // );

  const displayData = useMemo(() => {
    const totalPath =
      data.srcChain.route.length +
      (data.bridgeChain?.route.length || 0) +
      (data.dstChain?.route.length || 0);
    const paths = [data.srcChain];
    if (data.bridgeChain) {
      paths.push(data.bridgeChain);
    }
    if (data.dstChain) {
      paths.push(data.dstChain);
    }
    return {
      totalPath,
      paths,
    };
  }, [data.srcChain, data.bridgeChain, data.dstChain]);

  const { t } = useTranslation();

  return (
    <Box className={classes.root} onClick={onClick}>
      <Flex
        direction={"column"}
        align={"flex-start"}
        gap={mdUp ? 15 : 6}
        w={"100%"}
      >
        <Flex align={"center"} justify={"space-between"} w={"100%"}>
          <Badge
            color={best ? "primary" : "gray"}
            c={best ? "white" : "white"}
            style={{ borderRadius: "6px" }}
            variant={"filled"}
          >
            {best ? t("best") : t("fastest")}
          </Badge>
          <Flex align={"center"} gap={"xs"}>
            <Flex align={"center"} gap={2}>
              <IconGas></IconGas>
              <Text fz={12} fw={600}>
                {customToFixed(data.gasFee.amount) + " " + data.gasFee.symbol}
              </Text>
            </Flex>
            <Flex align={"center"} gap={2}>
              <IconClock></IconClock>
              <Text fz={12} fw={600}>
                {Math.ceil(data.timeEstimated / 60)}m
              </Text>
            </Flex>
            <Flex align={"center"} gap={2}>
              <IconPath></IconPath>
              <Text fz={12} fw={600}>
                {displayData.totalPath}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex align={"center"} justify={"end"} w={"100%"}>
          <Flex align={"center"} gap={6}>
            <Avatar
              radius={"xl"}
              src={
                data?.dstChain
                  ? data.dstChain.tokenOut.icon
                  : data.srcChain.tokenOut.icon
              }
              size={28}
            />
            <Text fz={15} fw={600}>
              {" "}
              {customToFixed(
                data?.dstChain
                  ? data.dstChain.totalAmountOut
                  : data.srcChain.totalAmountOut,
              ) +
                " " +
                (data?.dstChain
                  ? data.dstChain.tokenOut.symbol
                  : data.srcChain.tokenOut.symbol)}{" "}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default RouteItem;
