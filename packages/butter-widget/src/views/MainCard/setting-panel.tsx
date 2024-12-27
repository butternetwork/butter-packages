"use client";
import { Box, Flex, NumberInput, Tabs, Text } from "@mantine/core";
import { useSettingPanelStyles } from "./styles";
import BtSlippageTabs from "./bt-slippage-tabs";
import { useEffect, useState } from "react";
import { SettingPanelProps } from "./types";
import { useAppDispatch, useAppSelector, useShowSetting } from "../../store/hooks";
import { updateSlippage } from "../../store/route/routes-slice";
import { useTranslation } from "react-i18next";
const SettingPanel = ({ }: SettingPanelProps) => {
  const { t } = useTranslation();
  const show = useShowSetting();
  const { classes } = useSettingPanelStyles({ show: !!show });
  const [inputValue, setInputValue] = useState<number | "">(0.1);
  const [tabValue, setTabValue] = useState("1");
  const dispatch = useAppDispatch();
  const slippage = useAppSelector((state) => state.routes.slippage);
  const handleInputValueChange = (value: number | "") => {
    dispatch(updateSlippage(value + ""));
  };

  const handleTabChange = (value: string) => {
    dispatch(updateSlippage(value + ""));
  };
  const handleOnFocus = () => {
    // if (warnging = true)
  };
  useEffect(() => {
    if (slippage) {
      if (["1", "2", "3"].indexOf(slippage) >= 0) {
        setTabValue(slippage);
      } else {
        setTabValue("");
        setInputValue(Number(slippage));
      }
    }
  }, [slippage]);

  return (
    <Box className={classes.root} bg={"background.6"}>
      <Flex align={"flex-start"} direction={"column"} w={"100%"} gap={"sm"}>
        <Text fz={18} fw={700} c={"primary.6"}>
          {t("setting")}
        </Text>
        <Flex direction={"column"} gap={10}>
          <Text fz={14} fw={600} lh={1.2}>
            {t("slippage")}
          </Text>
          <Text fz={12} c={"foreground1"} lh={1.2}>
            {t("slippage_warning")}
          </Text>
        </Flex>
        <Flex w={"100%"} align={"center"} justify={"flex-start"} gap={"md"}>
          <BtSlippageTabs
            value={tabValue}
            onChange={(value) => {
              value && handleTabChange(value);
            }}
            style={{}}
          >
            <Tabs.List>
              <Tabs.Tab value={"1"}>1%</Tabs.Tab>
              <Tabs.Tab value={"2"}>2%</Tabs.Tab>
              <Tabs.Tab value={"3"}>3%</Tabs.Tab>
            </Tabs.List>
          </BtSlippageTabs>
          <NumberInput
            w={"90px"}
            placeholder={"1.0"}
            hideControls
            step={0.1}
            min={0.1}
            max={100}
            onFocus={handleOnFocus}
            value={inputValue}
            rightSection={"%"}
            onChange={(value) => {
              handleInputValueChange(Number(value));
            }}
          ></NumberInput>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SettingPanel;
