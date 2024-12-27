"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ActionIcon, Box, Center, Flex, Space, Text, useMantineTheme, } from "@mantine/core";
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
            });
        }
    }, [from, to]);
    const handleSelectedToken = async (chain, token) => {
        setTimeout(() => {
            if (currentChainBox === 0) {
                const toParams = searchParams.get("to") ? `${to?.chain?.chainId}:${to?.token?.symbol}` : "";
                setSearchParams({ from: `${chain.chainId}:${token.symbol}`, to: toParams });
            }
            else {
                const fromParams = searchParams.get("from") ? `${from?.chain?.chainId}:${from?.token?.symbol}` : "";
                setSearchParams({
                    to: `${chain.chainId}:${token.symbol}`,
                    from: fromParams,
                });
            }
            setShowTokenSelector(false);
        }, 200);
    };
    const showSetting = useShowSetting();
    const handleClickSetting = () => {
        dispatch(toggleSetting(!showSetting));
    };
    const [showTokenSelector, setShowTokenSelector] = useState(false);
    const handleTapChainBox = (index) => {
        setCurrentChainBox(index);
        setShowTokenSelector(true);
    };
    const showMoreRoute = useShowMoreCard();
    const showHistory = useShowHistoryCard();
    const { config } = useButterWidgetContext();
    const theme = useMantineTheme();
    return (_jsx(ErrorBoundary, { FallbackComponent: (props) => {
            return _jsx(ErrorFallback, { id: "main", ...props });
        }, children: _jsxs("div", { className: classes.root, children: [_jsxs(Flex, { align: "center", justify: "space-between", children: [_jsx(Text, { fz: 18, fw: 700, children: config?.title || t("swap") }), _jsxs(Flex, { gap: 4, align: "center", children: [_jsx(AccountButton, {}), _jsxs(Box, { h: 26, bg: theme.colors.background[6], onClick: () => {
                                        dispatch(toggleHistoryShow(true));
                                    }, className: classes.history, children: [_jsx(IconClock, { size: 18 }), _jsx("span", { children: t("history") })] }), _jsx(SettingButton, { opened: showSetting, onClick: handleClickSetting }), _jsx(LanguageButton, {})] })] }), _jsx(Space, { h: 10 }), showHistory ? _jsx(HistoryMainCard, {})
                    :
                        _jsxs(Box, { className: classes.panel, children: [_jsxs(Box, { style: {
                                        display: "grid",
                                        gap: "6px",
                                    }, children: [_jsx(ChainBox, { onClick: () => {
                                                handleTapChainBox(0);
                                            }, disabled: currentChainBox !== 0 && showTokenSelector, position: "From", chain: from?.chain, token: from?.token }), _jsx(Center, { style: {
                                                zIndex: 1,
                                            }, children: _jsx(ActionIcon, { variant: "transparent", className: classes.revertButton, onClick: handleTapSwitchChain, children: _jsx(IconRevert, {}) }) }), _jsx(ChainBox, { disabled: currentChainBox !== 1 && showTokenSelector, onClick: () => {
                                                handleTapChainBox(1);
                                            }, position: "To", chain: to?.chain, token: to?.token })] }), _jsx(Space, { h: 10 }), _jsx(InputBox, {}), _jsx(Space, { h: 10 }), bestRouteShowed && (_jsxs(_Fragment, { children: [showMoreRoute ? (_jsx(MoreRouteCard, {})) : _jsx(BestRouteCard, {}), _jsx(Space, { h: 10 })] })), _jsx(ConfirmButton, { disabled: !bestRouteShowed }), _jsx(GasInfoBox, {}), _jsx(Flex, { justify: "end", mt: 10, children: _jsx(PoweredBy, {}) }), _jsx(MainCardModals, {}), _jsx(TokenSelector, { position: currentChainBox === 0 ? "from" : "to", onSelected: handleSelectedToken, onClose: () => {
                                        setShowTokenSelector(false);
                                    }, show: showTokenSelector }), _jsx(ConfirmCard, {})] })] }) }));
};
MainCard.displayName = "SwiperSlide";
export default MainCard;
