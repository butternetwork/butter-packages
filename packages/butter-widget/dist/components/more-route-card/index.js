"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ActionIcon, Box, Flex, Space, Text, Tooltip, useMantineTheme } from "@mantine/core";
import { useMoreRoutesCardStyles } from "./styles";
import IconLightRed from "../icons/icon-light-red";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState, } from "react";
import IconLightGreen from "../icons/IconLightGreen";
import IconCloseCircle from "../icons/icon-close-circle";
import RouteItem from "./route-item";
import { gsap } from "gsap";
import { AnimationBackEase } from "../../utils/animations";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateSelectedRoute } from "../../store/route/routes-slice";
import { useTranslation } from "react-i18next";
import { toggleMoreShow } from "../../store/ui/uiSlice";
import { useEmbAPI, useShowHistoryCard, useShowMoreCard, } from "../../store/ui/hooks";
import ErrorFallback from "../ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
const MoreRouteCard = forwardRef(({}, ref) => {
    const { t } = useTranslation();
    const { classes } = useMoreRoutesCardStyles();
    const [networkOk, _setNetworkOk] = useState(true);
    // const swiper = useSwiper();
    const emberAPI = useEmbAPI();
    const routes = useAppSelector((state) => state.routes.routes);
    const dispatch = useAppDispatch();
    const show = useShowMoreCard();
    const showHistory = useShowHistoryCard();
    const handleTapItem = (item) => {
        // handleSelectRoute(item);
        dispatch(updateSelectedRoute(routes[item]));
        hide();
    };
    const hide = useCallback(() => {
        dispatch(toggleMoreShow(false));
        // if (!emberAPI) return;
        // emberAPI.scrollPrev();
        // // emberAPI?.scrollTo(swiper.activeIndex - 1, 200);
        // gsap.to(".moreRouteCard", {
        //   translateX: 1000,
        //   opacity: 0,
        //   ease: AnimationBackEase,
        //   onComplete() {
        //     dispatch(toggleMoreShow(false));
        //   },
        // });
    }, [emberAPI]);
    useImperativeHandle(ref, () => ({
        hide,
    }));
    useEffect(() => {
        if (show) {
            gsap.to(".moreRouteCard", {
                translateX: 0,
                opacity: 1,
                ease: AnimationBackEase,
            });
            if (!emberAPI)
                return;
            const currentIndex = showHistory ? 3 : 2;
            emberAPI?.scrollTo(currentIndex - 1, true);
            setTimeout(() => {
                emberAPI?.scrollTo(currentIndex, false);
            }, 16);
        }
    }, [show]);
    const theme = useMantineTheme();
    return (_jsx(ErrorBoundary, { FallbackComponent: ErrorFallback, children: _jsxs(Box, { className: `${classes.root} moreRouteCard embla__slide`, children: [_jsxs(Flex, { align: "center", justify: "space-between", w: "100%", children: [_jsx(Text, { c: "primary.6", fz: 18, fw: "bold", children: t("more_route") }), _jsxs(Flex, { align: "center", justify: "flex-end", gap: "xs", children: [_jsx(Tooltip, { label: "Tip", children: _jsx(ActionIcon, { variant: "transparent", children: networkOk ? (_jsx(IconLightGreen, {})) : (_jsx(IconLightRed, {})) }) }), _jsx(ActionIcon, { onClick: hide, variant: "transparent", children: _jsx(IconCloseCircle, { color: theme.colors.foreground[6] }) })] })] }), _jsx(Space, { h: 10 }), _jsx(Flex, { direction: "column", align: "stretch", justify: "flex-start", gap: 10, w: "100%", children: routes.map((item, index) => {
                        return (_jsx(RouteItem, { data: item, onClick: () => {
                                handleTapItem(index);
                            }, best: index === 0 }, item.hash));
                    }) })] }) }));
});
MoreRouteCard.displayName = "SwiperSlide";
export default MoreRouteCard;
