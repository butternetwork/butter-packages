"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Flex, NumberInput, Tabs, Text } from "@mantine/core";
import { useSettingPanelStyles } from "./styles";
import BtSlippageTabs from "./bt-slippage-tabs";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, useShowSetting } from "../../store/hooks";
import { updateSlippage } from "../../store/route/routes-slice";
import { useTranslation } from "react-i18next";
const SettingPanel = ({}) => {
    const { t } = useTranslation();
    const show = useShowSetting();
    const { classes } = useSettingPanelStyles({ show: !!show });
    const [inputValue, setInputValue] = useState(0.1);
    const [tabValue, setTabValue] = useState("1");
    const dispatch = useAppDispatch();
    const slippage = useAppSelector((state) => state.routes.slippage);
    const handleInputValueChange = (value) => {
        dispatch(updateSlippage(value + ""));
    };
    const handleTabChange = (value) => {
        dispatch(updateSlippage(value + ""));
    };
    const handleOnFocus = () => {
        // if (warnging = true)
    };
    useEffect(() => {
        if (slippage) {
            if (["1", "2", "3"].indexOf(slippage) >= 0) {
                setTabValue(slippage);
            }
            else {
                setTabValue("");
                setInputValue(Number(slippage));
            }
        }
    }, [slippage]);
    return (_jsx(Box, { className: classes.root, bg: "background.6", children: _jsxs(Flex, { align: "flex-start", direction: "column", w: "100%", gap: "sm", children: [_jsx(Text, { fz: 18, fw: 700, c: "primary.6", children: t("setting") }), _jsxs(Flex, { direction: "column", gap: 10, children: [_jsx(Text, { fz: 14, fw: 600, lh: 1.2, children: t("slippage") }), _jsx(Text, { fz: 12, c: "foreground1", lh: 1.2, children: t("slippage_warning") })] }), _jsxs(Flex, { w: "100%", align: "center", justify: "flex-start", gap: "md", children: [_jsx(BtSlippageTabs, { value: tabValue, onChange: (value) => {
                                value && handleTabChange(value);
                            }, style: {}, children: _jsxs(Tabs.List, { children: [_jsx(Tabs.Tab, { value: "1", children: "1%" }), _jsx(Tabs.Tab, { value: "2", children: "2%" }), _jsx(Tabs.Tab, { value: "3", children: "3%" })] }) }), _jsx(NumberInput, { w: "90px", placeholder: "1.0", hideControls: true, step: 0.1, min: 0.1, max: 100, onFocus: handleOnFocus, value: inputValue, rightSection: "%", onChange: (value) => {
                                handleInputValueChange(Number(value));
                            } })] })] }) }));
};
export default SettingPanel;
