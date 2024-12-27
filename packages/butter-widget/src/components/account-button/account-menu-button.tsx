"use client";
import { Avatar, Flex, Menu, Text, UnstyledButton, useMantineTheme } from "@mantine/core";
import { ellipsisShortest, ellipsisThree } from "../../utils/addresses";
import IconArrowDownSimple from "../icons/icon-arrow-down-simple";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
import { useChainButtonStyles } from "../chain-button/styles";

export interface AccountMenuButtonProps {
  address?: string;
  onDisconnect: () => void;
  onCopyAddress: () => void;
  icon?: string;
}

const AccountMenuButton = ({
  address,
  onDisconnect,
  onCopyAddress,
  icon,
}: AccountMenuButtonProps) => {
  const theme = useMantineTheme();
  const { classes } = useChainButtonStyles();
  const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });
  return (
    <Menu shadow="md" width={mdUp ? 200 : 100} classNames={classes}>
      <Menu.Target>
        <UnstyledButton className={classes.button}>
          <Flex
            align={"center"}
            justify={"space-between"}
            gap={mdUp ? "xs" : 0}
          >
            <Flex align={"center"} gap={"xs"} mr={{ base: 6, md: 0 }}>
              <Avatar size={mdUp ? 20 : 18} src={icon} />
              {mdUp && (
                <Text
                  sx={{
                    transformOrigin: "left",
                    transform: mdUp ? "none" : "scale(0.88)",
                  }}
                  fz={mdUp ? 14 : 12}
                  fw={600}
                >
                  {mdUp
                    ? ellipsisThree(address || "")
                    : ellipsisShortest(address || "")}
                </Text>
              )}
            </Flex>
            <IconArrowDownSimple color={theme.colors.foreground[6]}></IconArrowDownSimple>
          </Flex>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown style={(theme) => ({
        background: theme.colors.background[6],
        color: theme.colors.foreground[6],
      })}>
        <Menu.Item onClick={onCopyAddress}>
          <Text fz={14} fw={600}>
            Copy
          </Text>
        </Menu.Item>
        <Menu.Item onClick={onDisconnect}>
          <Text fz={14} fw={600}>
            Logout
          </Text>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AccountMenuButton;
