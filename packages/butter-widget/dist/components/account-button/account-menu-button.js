"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Flex, Menu, Text, UnstyledButton, useMantineTheme } from "@mantine/core";
import { ellipsisShortest, ellipsisThree } from "../../utils/addresses";
import IconArrowDownSimple from "../icons/icon-arrow-down-simple";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
import { useChainButtonStyles } from "../chain-button/styles";
const AccountMenuButton = ({ address, onDisconnect, onCopyAddress, icon, }) => {
    const theme = useMantineTheme();
    const { classes } = useChainButtonStyles();
    const { isLargerOrEqual: mdUp } = useBreakpointsUp({ breakpoint: "md" });
    return (_jsxs(Menu, { shadow: "md", width: mdUp ? 200 : 100, classNames: classes, children: [_jsx(Menu.Target, { children: _jsx(UnstyledButton, { className: classes.button, children: _jsxs(Flex, { align: "center", justify: "space-between", gap: mdUp ? "xs" : 0, children: [_jsxs(Flex, { align: "center", gap: "xs", mr: { base: 6, md: 0 }, children: [_jsx(Avatar, { size: mdUp ? 20 : 18, src: icon }), mdUp && (_jsx(Text, { sx: {
                                            transformOrigin: "left",
                                            transform: mdUp ? "none" : "scale(0.88)",
                                        }, fz: mdUp ? 14 : 12, fw: 600, children: mdUp
                                            ? ellipsisThree(address || "")
                                            : ellipsisShortest(address || "") }))] }), _jsx(IconArrowDownSimple, { color: theme.colors.foreground[6] })] }) }) }), _jsxs(Menu.Dropdown, { style: (theme) => ({
                    background: theme.colors.background[6],
                    color: theme.colors.foreground[6],
                }), children: [_jsx(Menu.Item, { onClick: onCopyAddress, children: _jsx(Text, { fz: 14, fw: 600, children: "Copy" }) }), _jsx(Menu.Item, { onClick: onDisconnect, children: _jsx(Text, { fz: 14, fw: 600, children: "Logout" }) })] })] }));
};
export default AccountMenuButton;
