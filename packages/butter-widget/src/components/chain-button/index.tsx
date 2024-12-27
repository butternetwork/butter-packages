"use client";
import { Flex, Menu, Text, UnstyledButton, useMantineTheme } from "@mantine/core";
import testchain from "../../../public/chain-test.webp";
import { useState } from "react";
import IconAlertCircle from "../icons/icon-alert-circle";
import { useChainButtonStyles } from "./styles";
import IconArrowDownSimple from "../icons/icon-arrow-down-simple";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";

const Chains = [
  {
    name: "Ethereum",
    chainID: 1,
    icon: testchain,
  },
  {
    name: "Polygon",
    chainID: 37,
    icon: testchain,
  },
  {
    name: "Celo",
    chainID: 123,
    icon: testchain,
  },
  {
    name: "Fantom",
    chainID: 222,
    icon: testchain,
  },
];

const ChainButton = () => {
  const { classes } = useChainButtonStyles();
  const [unSupport,] = useState(false);
  const [selectedChain,] = useState({
    name: "Fantom",
    chainID: 222,
    icon: testchain,
  });
  const theme = useMantineTheme();
  const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });
  return (
    <Menu shadow="md" width={mdUp ? 200 : 40} classNames={classes}>
      <Menu.Target>
        <UnstyledButton className={classes.button}>
          <Flex align={"center"} justify={"space-between"} gap={"xs"}>
            {unSupport && (
              <Flex>
                <IconAlertCircle></IconAlertCircle>
                <Text fz={14} fw={600}>
                  Unsupported
                </Text>
              </Flex>
            )}
            {selectedChain && (
              <Flex align={"center"} gap={"xs"}>
                <img src={selectedChain.icon.src} width={mdUp ? 25 : 18} />
                {mdUp && (
                  <Text fz={14} fw={600}>
                    {selectedChain.name}
                  </Text>
                )}
              </Flex>
            )}
            <IconArrowDownSimple color={theme.colors.dark[6]}></IconArrowDownSimple>
          </Flex>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {Chains.map((chain, index) => (
          <Menu.Item
            key={index}
            leftSection={<img src={chain.icon.src} width={mdUp ? 30 : 18} />}
          >
            {mdUp && (
              <Text fz={14} fw={600}>
                {chain.name}
              </Text>
            )}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default ChainButton;
