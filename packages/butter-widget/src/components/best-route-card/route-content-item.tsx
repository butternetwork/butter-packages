"use client";
import { Avatar, Flex, Text } from "@mantine/core";
import IconArrowIn from "../icons/icon-arrow-in";
import IconArrowOut from "../icons/icon-arrow-out";
import IconArrowRight from "../icons/icon-arrow-right";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
import { RouteContentItemProps } from "./types";

const RouteContentItem = ({ data, index }: RouteContentItemProps) => {
  const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });
  return (
    <Flex
      align={"center"}
      justify={"space-between"}
      sx={{
        position: "relative",
        paddingTop: 4,
      }}
    >
      <Flex align={"center"} gap={10}>
        <Flex direction={"column"} align={"flex-start"}>
          <Flex align={"center"} gap={2}>
            <IconArrowIn></IconArrowIn>
            <Text c={"white"} fz={mdUp ? 14 : 12} fw={600}>
              {Number(data?.singleRoute?.amountIn).toFixed(4)}
            </Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <IconArrowOut></IconArrowOut>
            <Text c={"white"} fz={mdUp ? 14 : 12} fw={600}>
              {Number(data?.singleRoute?.amountOut).toFixed(4)}
            </Text>
          </Flex>
        </Flex>
        <Flex align={"center"} gap={6}>
          <Avatar src={data?.tokenIn.icon} size={20}></Avatar>
          <Text c={"white"} fz={mdUp ? 14 : 12} fw={600}>
            {data?.tokenIn.symbol}
          </Text>
          <IconArrowRight></IconArrowRight>
          <Avatar src={data?.tokenOut.icon} size={20}></Avatar>
          <Text c={"white"} fz={mdUp ? 14 : 12} fw={600}>
            {data?.tokenOut.symbol}
          </Text>
        </Flex>
      </Flex>
      {mdUp && (
        <Flex
          align={"center"}
          justify={"flex-end"}
          gap={4}
          sx={{
            position: "absolute",
            top: -10,
            right: -6,
          }}
        >
          <Text fz={12} fw={500} c={"white"}>
            {data?.singleRoute?.dexName}
          </Text>
          <Text fz={21} fw={700} c={"opw."}>
            {index}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default RouteContentItem;
