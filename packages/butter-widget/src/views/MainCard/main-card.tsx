"use client";

import {
  ActionIcon,
  Box,
  Center,
  Flex,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import SettingButton from "../../components/setting-button";
import { useCallback, useState } from "react";
import ChainBox from "./chain-box";
import { useMainCardStyles } from "./styles";
import IconRevert from "../../components/icons/icon-revert";
import InputBox from "./input-box";
import GasInfoBox from "./gas-info-box";
import MainCardModals from "./main-card-modals";
import TokenSelector from "../../components/token-selector/token-selector";
import ConfirmCard from "./confirm-card";
import { Chain, Token } from "@butternetwork/sdk";
import { useAppDispatch, useFrom, useShowSetting, useTo } from "../../store/hooks";
import { toggleSetting } from "../../store/route/routes-slice";
import IconClock from "../../components/icons/icon-clock";
import { useTranslation } from "react-i18next";
import ConfirmButton from "./confirm-button";
import { toggleHistoryShow } from "../../store/ui/uiSlice";
import { useBestRouteCardShow, useShowHistoryCard, useShowMoreCard } from "../../store/ui/hooks";
import ErrorFallback from "../../components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { useSearchParams } from "react-router";
import LanguageButton from "../../components/language-button";
import AccountButton from "../../components/account-button";
import PoweredBy from "../../components/powered-by";
import BestRouteCard from "../../components/best-route-card";
import MoreRouteCard from "../../components/more-route-card";
import HistoryMainCard from "../../components/history-main-card";
import { useButterWidgetContext } from "../../Widget";

const MainCard = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { classes } = useMainCardStyles();
  const [currentChainBox, setCurrentChainBox] = useState(0);
  const from = useFrom();
  const to = useTo();
  const [searchParams, setSearchParams] = useSearchParams();

  // const router = useRouter();
  const bestRouteShowed = useBestRouteCardShow();
  // const referrer = router.query.referrer;

  const handleTapSwitchChain = useCallback(async () => {
    if (from) {
      setSearchParams({
        from: `${to?.chain?.chainId}:${to?.token?.symbol}`,
        to: `${from?.chain?.chainId}:${from?.token?.symbol}`,
      })
    }
  }, [from, to]);
  const handleSelectedToken = async (chain: Chain, token: Token) => {
    setTimeout(() => {
      if (currentChainBox === 0) {
        const toParams = searchParams.get("to") ? `${to?.chain?.chainId}:${to?.token?.symbol}` : "";
        setSearchParams({ from: `${chain.chainId}:${token.symbol}`, to: toParams });
      } else {
        const fromParams = searchParams.get("from") ? `${from?.chain?.chainId}:${from?.token?.symbol}` : "";
        setSearchParams({
          to: `${chain.chainId}:${token.symbol}`,
          from: fromParams,
        })
      }
      setShowTokenSelector(false);
    }, 200);
  };

  const showSetting = useShowSetting();
  const handleClickSetting = () => {
    dispatch(toggleSetting(!showSetting));
  };

  const [showTokenSelector, setShowTokenSelector] = useState(false);
  const handleTapChainBox = (index: number) => {
    setCurrentChainBox(index);

    setShowTokenSelector(true);
  };

  const showMoreRoute = useShowMoreCard();
  const showHistory = useShowHistoryCard();
  const { config } = useButterWidgetContext();


  const theme = useMantineTheme();
  return (
    <ErrorBoundary
      FallbackComponent={(props) => {
        return <ErrorFallback id={"main"} {...props}></ErrorFallback>;
      }}
    >
      <div className={classes.root}>
        <Flex align={"center"} justify={"space-between"}>
          <Text fz={18} fw={700}>
            {config?.title || t("swap")}
          </Text>
          <Flex gap={4} align={"center"}>
            <AccountButton />
            <Box
              h={26}
              bg={theme.colors.background[6]}
              onClick={() => {
                dispatch(toggleHistoryShow(true));
              }}
              className={classes.history}
            >
              <IconClock size={18}></IconClock>
              <span>{t("history")}</span>
            </Box>
            {/* </ActionIcon> */}
            <SettingButton
              opened={showSetting}
              onClick={handleClickSetting}
            ></SettingButton>
            <LanguageButton />
          </Flex>
        </Flex>
        <Space h={10}></Space>
        {showHistory ? <HistoryMainCard></HistoryMainCard>
          :
          <Box className={classes.panel}>
            <Box
              style={{
                display: "grid",
                gap: "6px",
              }}
            >
              <ChainBox
                onClick={() => {
                  handleTapChainBox(0);
                }}
                disabled={currentChainBox !== 0 && showTokenSelector}
                position={"From"}
                chain={from?.chain}
                token={from?.token}
              ></ChainBox>
              <Center
                style={{
                  zIndex: 1,
                }}
              >
                <ActionIcon
                  variant="transparent"
                  className={classes.revertButton}
                  onClick={handleTapSwitchChain}
                >
                  <IconRevert></IconRevert>
                </ActionIcon>
              </Center>
              <ChainBox
                disabled={currentChainBox !== 1 && showTokenSelector}
                onClick={() => {
                  handleTapChainBox(1);
                }}
                position={"To"}
                chain={to?.chain}
                token={to?.token}
              ></ChainBox>
            </Box>
            <Space h={10}></Space>
            <InputBox></InputBox>
            <Space h={10}></Space>
            {bestRouteShowed && (
              <>
                {showMoreRoute ? (
                  <MoreRouteCard></MoreRouteCard>
                ) : <BestRouteCard
                ></BestRouteCard>}
                <Space h={10}></Space>
              </>
            )}
            <ConfirmButton disabled={!bestRouteShowed}></ConfirmButton>
            <GasInfoBox></GasInfoBox>
            <Flex justify={"end"} mt={10}>
              <PoweredBy></PoweredBy>
            </Flex>
            <MainCardModals></MainCardModals>

            <TokenSelector
              position={currentChainBox === 0 ? "from" : "to"}
              onSelected={handleSelectedToken}
              onClose={() => {
                setShowTokenSelector(false);
              }}
              show={showTokenSelector}
            ></TokenSelector>
            <ConfirmCard />
          </Box>
        }
      </div>
    </ErrorBoundary>
  );
};

MainCard.displayName = "SwiperSlide";

export default MainCard;
