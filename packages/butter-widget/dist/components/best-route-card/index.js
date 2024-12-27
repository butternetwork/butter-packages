"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ActionIcon, Avatar, Box, Center, Flex, Loader, Space, Text, Tooltip, UnstyledButton, Image, useMantineTheme, } from "@mantine/core";
import { useBestRouteCardStyles } from "./styles";
import EmptyPic from "../../assets/images/empty.webp";
import rightArrow from "../../assets/images/right-arrow.svg";
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState, } from "react";
import IconLightGreen from "../icons/IconLightGreen";
import IconCloseCircle from "../icons/icon-close-circle";
import IconEye from "../icons/icon-eye";
import { useAppDispatch } from "../../store/hooks";
import IconLightRed from "../icons/icon-light-red";
import { useTranslation } from "react-i18next";
import IconArrowDownSimple from "../icons/icon-arrow-down-simple";
import { customToFixed } from "../../utils/numbers";
import { useChainsMap } from "../../store/global/hooks";
import { useBestRoute, useFetchRouteError, useLoadingRoute, } from "../../store/route/hooks";
import { toggleMoreShow } from "../../store/ui/uiSlice";
import { closeRoute } from "../../store/route/routes-slice";
import ErrorFallback from "../ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
const dexMap = {
    UniswapV2: "https://icons.llamao.fi/icons/protocols/uniswap?w=48&h=48",
    UniswapV3: "https://icons.llamao.fi/icons/protocols/uniswap?w=48&h=48",
    QuickswapV2: "https://icons.llamao.fi/icons/protocols/quickswap?w=48&h=48",
    QuickswapV3: "https://icons.llamao.fi/icons/protocols/quickswap?w=48&h=48",
    SushiswapV2: "https://icons.llamao.fi/icons/protocols/sushi?w=48&h=48",
    SushiswapV3: "https://icons.llamao.fi/icons/protocols/sushi?w=48&h=48",
    PancakeswapV2: "https://icons.llamao.fi/icons/protocols/pancakeswap?w=48&h=48",
    PancakeswapV3: "https://icons.llamao.fi/icons/protocols/pancakeswap?w=48&h=48",
    KlayswapV2: "https://icons.llamao.fi/icons/protocols/klayswap?w=48&h=48",
    KlayswapV3: "https://icons.llamao.fi/icons/protocols/klayswap?w=48&h=48",
    CURVE: "https://icons.llamao.fi/icons/protocols/curve-finance?w=48&h=48",
    "Ref.finance": "https://icons.llamao.fi/icons/protocols/ref-finance?w=48&h=48",
    HiveswapV2: "https://icons.llamao.fi/icons/protocols/hiveswap-v3?w=48&h=48",
    HiveswapPro: "https://icons.llamao.fi/icons/protocols/hiveswap-v3?w=48&h=48",
    HiveswapV3: "https://icons.llamao.fi/icons/protocols/hiveswap-v3?w=48&h=48",
    Swappi: "https://icons.llamao.fi/icons/protocols/swappi?w=48&h=48",
    Balancer: "https://icons.llamao.fi/icons/protocols/balancer?w=48&h=48",
    "1inch": "https://icons.llamao.fi/icons/protocols/1inch-network?w=48&h=48",
    Sunswap: "https://icons.llamao.fi/icons/protocols/sunswap-v1?w=48&h=48",
    iZUMi: "https://icons.llamao.fi/icons/protocols/izumi-finance?w=48&h=48",
};
const bridgeMap = {
    Butter: "https://icons.llamao.fi/icons/protocols/butter-swap?w=48&h=48",
    Stargate: "https://icons.llamao.fi/icons/protocols/stargate?w=48&h=48",
    Circle: "https://icons.llamao.fi/icons/protocols/circlepacific?w=48&h=48",
};
const BestRouteCard = forwardRef(({}, ref) => {
    const { t } = useTranslation();
    const { classes } = useBestRouteCardStyles();
    const dispatch = useAppDispatch();
    const routeLoading = useLoadingRoute();
    const routeError = useFetchRouteError();
    const bestRoute = useBestRoute();
    const chainsMap = useChainsMap();
    const [srcFold, setSrcFold] = useState(false);
    const [dstFold, setDstFold] = useState(false);
    // const moreOpened = useShowMoreCard();
    // const show = useShowBestCard();
    // const swiper = useSwiper();
    // const embApi = useEmbAPI();
    const theme = useMantineTheme();
    const box = useRef(null);
    // const _hide = useCallback(
    //   (withMore: boolean) => {
    //     if (!embApi) return;
    //     // const length = swiper.slides.length;
    //     const length = embApi.slideNodes().length;
    //     embApi.scrollTo(withMore ? length - 3 : length - 2, false);
    //     gsap.to(".bestRouteCard", {
    //       translateX: 1000,
    //       ease: AnimationBackEase,
    //       opacity: 0,
    //       onComplete() {
    //         dispatch(closeRoute());
    //       },
    //     });
    //   },
    //   [embApi],
    // );
    const hide = useCallback(() => {
        // _hide(false);
        dispatch(closeRoute());
    }, [dispatch]);
    // const first = useRef(true);
    // useEffect(() => {
    //   gsap.to(box.current, {
    //     translateX: 0,
    //     opacity: 1,
    //     ease: AnimationBackEase,
    //   });
    //   if (first.current) {
    //     if (!embApi) return;
    //     // const length = swiper.slides.length;
    //     const length = embApi.slideNodes().length;
    //     console.log(length);
    //     embApi.scrollTo(length - 1, true);
    //     requestAnimationFrame(() => {
    //       embApi.scrollTo(length, false);
    //     });
    //     first.current = false;
    //   }
    // }, [embApi]);
    useImperativeHandle(ref, () => {
        return {
            hide,
        };
    });
    const handleTapMore = useCallback(() => {
        dispatch(toggleMoreShow(true));
    }, []);
    const empty = useMemo(() => {
        return bestRoute === "empty" || !!routeError;
    }, [bestRoute, routeError]);
    const chainLogo = useCallback((chainId) => {
        if (chainId) {
            console.log(chainsMap, chainId, chainsMap[chainId]);
            return chainsMap[chainId].logoUri;
        }
        return "";
    }, [chainsMap]);
    const chainName = useCallback((chainId) => {
        if (chainId) {
            return chainsMap[chainId].name;
        }
        return "";
    }, [chainsMap]);
    return (
    // <div
    //   className={"embla__slide"}
    //   style={{
    //     width: "min-content",
    //   }}
    // >
    _jsx(ErrorBoundary, { FallbackComponent: ErrorFallback, children: _jsxs(Box, { className: `${classes.root} bestRouteCard`, ref: box, "data-flip-id": "route", children: [_jsxs(Flex, { align: "center", justify: "space-between", children: [_jsx(Text, { fz: 18, fw: 700, c: "primary.6", children: t("best_route") }), _jsxs(Flex, { align: "center", justify: "flex-end", gap: 4, children: [_jsx(Tooltip, { label: "Tip", children: _jsx(ActionIcon, { variant: "transparent", children: routeLoading || empty ? (_jsx(IconLightRed, {})) : (_jsx(IconLightGreen, {})) }) }), _jsx(ActionIcon, { onClick: hide, variant: "transparent", children: _jsx(IconCloseCircle, { color: theme.colors.foreground[6] }) })] })] }), _jsx(Space, { h: 10 }), routeLoading ? (_jsx(Box, { className: classes.loadingContent, children: _jsx(Center, { w: "100%", h: "300px", children: _jsx(Loader, {}) }) })) : empty ? (_jsxs(Box, { className: classes.emptyContent, children: [_jsx("img", { src: EmptyPic, alt: "empty", width: 70 }), _jsx(Text, { fz: 16, fw: 600, children: t("no_route") }), _jsx(Text, { fz: 14, fw: 500, sx: { textAlign: "center" }, children: t("select_the_token") }), _jsx(Text, { fz: 12, fw: 400, color: "red.4", sx: { textAlign: "center" }, children: routeError?.message })] })) : (_jsxs(Box, { className: classes.routeContent, children: [_jsx("div", { className: `${classes.route}`, children: bestRoute !== "empty" && (_jsxs(_Fragment, { children: [bestRoute?.srcChain && (_jsx("div", { className: `${classes.sourceChain}`, children: _jsxs("div", { className: classes.rightContent, style: {
                                                cursor: "pointer",
                                            }, onClick: () => {
                                                setSrcFold(!srcFold);
                                            }, children: [_jsxs("div", { className: classes.sourceText, children: [bestRoute?.bridgeChain
                                                            ? "1. Source Chain"
                                                            : "Swap", _jsxs("div", { className: classes.clainInfo, children: ["on " + chainName(bestRoute?.srcChain.chainId), _jsx(Avatar, { radius: "xl", src: chainLogo(bestRoute?.srcChain.chainId), size: 16 })] })] }), _jsxs("div", { className: classes.topText, children: [_jsxs("div", { className: classes.topLeft, children: [_jsxs("div", { className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: bestRoute?.srcChain.tokenIn.icon, size: 28 }) }), _jsx("div", { style: { fontSize: "15px" }, className: classes.sourceChainTokenNumber, children: customToFixed(bestRoute?.srcChain.totalAmountIn) +
                                                                                " " +
                                                                                bestRoute?.srcChain.tokenIn.symbol })] }), _jsx("img", { src: rightArrow, alt: "empty", height: 12, width: 12 }), _jsxs("div", { className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: bestRoute?.srcChain.tokenOut.icon, size: 28 }) }), _jsx("div", { style: { fontSize: "15px" }, className: classes.sourceChainTokenNumber, children: customToFixed(bestRoute?.srcChain.totalAmountOut) +
                                                                                " " +
                                                                                bestRoute?.srcChain.tokenOut.symbol })] })] }), _jsx("div", { className: classes.foldButtom, children: _jsx(IconArrowDownSimple, { color: theme.colors.foreground[6] }) })] }), srcFold && (_jsx("div", { className: classes.routeCards, children: bestRoute?.srcChain.route.map((item, index) => (_jsxs("div", { className: classes.routeCard, children: [item?.dexName !== "mixed" ? (_jsxs("div", { className: classes.tokenName, children: [item?.dexName && (_jsx(Avatar, { radius: "xl", src: dexMap[item?.dexName], size: 18 })), item?.dexName
                                                                        ? item?.dexName
                                                                        : "DIRECT"] })) : (_jsxs("div", { className: classes.dexs, children: [_jsxs("div", { className: classes.tokenName, children: [_jsx(Avatar, { radius: "xl", src: dexMap[item.extra[0].dexName], size: 18 }), item.extra[0].dexName] }), item.extra[0].dexName !==
                                                                        item.extra[1].dexName && (_jsxs(_Fragment, { children: ["and", _jsxs("div", { className: classes.tokenName, children: [_jsx(Avatar, { radius: "xl", src: dexMap[item.extra[1].dexName], size: 18 }), item.extra[1].dexName] })] }))] })), _jsxs("div", { className: classes.topLeft, children: [_jsxs("div", { className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: bestRoute?.srcChain.tokenIn.icon, size: 24 }) }), _jsx("div", { className: classes.sourceChainTokenNumber, children: customToFixed(item.amountIn) +
                                                                                    " " +
                                                                                    bestRoute?.srcChain.tokenIn.symbol })] }), _jsx("img", { src: rightArrow, alt: "empty", height: 12, width: 12 }), item.path[1] && (_jsxs("div", { className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: item?.path[0]?.tokenOut?.icon, size: 24 }) }), item?.path[0]?.tokenOut?.symbol, _jsx("img", { src: rightArrow, alt: "empty", height: 12, width: 12 })] })), _jsxs("div", { className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: bestRoute?.srcChain.tokenOut
                                                                                        .icon, size: 24 }) }), _jsx("div", { className: classes.sourceChainTokenNumber, children: customToFixed(item.amountOut) +
                                                                                    " " +
                                                                                    bestRoute?.srcChain.tokenOut.symbol })] })] })] }, index))) }))] }) })), bestRoute?.bridgeChain && (_jsx("div", { className: classes.sourceChain, children: _jsxs("div", { className: classes.rightContent, children: [_jsx("div", { className: classes.sourceText, children: "2. Bridge" }), _jsx("div", { className: classes.routeCards, children: bestRoute?.bridgeChain?.route.map((item, index) => (_jsxs("div", { className: classes.routeCard, children: [_jsxs("div", { className: classes.tokenName, children: [_jsx(Avatar, { radius: "xl", src: bridgeMap[bestRoute?.bridgeChain?.bridge], size: 18 }), bestRoute?.bridgeChain?.bridge] }), _jsxs("div", { className: classes.topLeft, children: [_jsxs("div", { className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: bestRoute?.bridgeChain.tokenIn
                                                                                        .icon, size: 24 }) }), _jsx("div", { style: { fontSize: "15px" }, className: classes.sourceChainTokenNumber, children: customToFixed(item.amountIn) +
                                                                                    " " +
                                                                                    bestRoute?.bridgeChain.tokenIn
                                                                                        .symbol })] }), _jsx("img", { src: rightArrow, alt: "empty", height: 12, width: 12 }), _jsxs("div", { className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: bestRoute?.bridgeChain.tokenOut
                                                                                        .icon, size: 24 }) }), _jsx("div", { style: { fontSize: "15px" }, className: classes.sourceChainTokenNumber, children: customToFixed(item.amountOut) +
                                                                                    " " +
                                                                                    bestRoute?.bridgeChain.tokenOut
                                                                                        .symbol })] })] })] }, index))) })] }) })), bestRoute?.dstChain && (_jsx("div", { className: classes.sourceChain, children: _jsxs("div", { className: classes.rightContent, style: {
                                                cursor: "pointer",
                                            }, onClick: () => {
                                                setDstFold(!dstFold);
                                            }, children: [_jsxs("div", { className: classes.sourceText, children: ["3. Destination Chain", _jsxs("div", { className: classes.clainInfo, children: ["on " + chainName(bestRoute?.dstChain.chainId), _jsx(Avatar, { radius: "xl", src: chainLogo(bestRoute?.dstChain.chainId), size: 16 })] })] }), _jsxs("div", { className: classes.topText, children: [_jsxs("div", { className: classes.topLeft, children: [_jsxs("div", { style: { fontSize: "15px" }, className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: bestRoute?.dstChain.tokenIn.icon, size: 28 }) }), _jsx("div", { className: classes.sourceChainTokenNumber, children: customToFixed(bestRoute?.dstChain.totalAmountIn) +
                                                                                " " +
                                                                                bestRoute?.dstChain.tokenIn.symbol })] }), _jsx(Image, { src: rightArrow, alt: "empty", height: 12, width: 12 }), _jsxs("div", { style: { fontSize: "15px" }, className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: bestRoute?.dstChain.tokenOut.icon, size: 28 }) }), _jsx("div", { className: classes.sourceChainTokenNumber, children: customToFixed(bestRoute?.dstChain.totalAmountOut) +
                                                                                " " +
                                                                                bestRoute?.dstChain.tokenOut.symbol })] })] }), _jsx("div", { className: classes.foldButtom, children: _jsx(IconArrowDownSimple, { color: theme.colors.foreground[6] }) })] }), dstFold && (_jsx("div", { className: classes.routeCards, children: bestRoute?.dstChain.route.map((item, index) => (_jsxs("div", { className: classes.routeCard, children: [item?.dexName !== "mixed" ? (_jsxs("div", { className: classes.tokenName, children: [item?.dexName && (_jsx(Avatar, { radius: "xl", src: dexMap[item?.dexName], size: 18 })), item?.dexName
                                                                        ? item?.dexName
                                                                        : "DIRECT"] })) : (_jsxs("div", { className: classes.dexs, children: [_jsxs("div", { className: classes.tokenName, children: [_jsx(Avatar, { radius: "xl", src: dexMap[item.extra[0].dexName], size: 18 }), item.extra[0].dexName] }), item.extra[0].dexName !==
                                                                        item.extra[1].dexName && (_jsxs(_Fragment, { children: ["and", _jsxs("div", { className: classes.tokenName, children: [_jsx(Avatar, { radius: "xl", src: dexMap[item.extra[1].dexName], size: 18 }), item.extra[1].dexName] })] }))] })), _jsxs("div", { className: classes.topLeft, children: [_jsxs("div", { className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: bestRoute?.dstChain.tokenIn.icon, size: 24 }) }), _jsx("div", { className: classes.sourceChainTokenNumber, children: customToFixed(item.amountIn) +
                                                                                    " " +
                                                                                    bestRoute?.dstChain.tokenIn.symbol })] }), _jsx("img", { src: rightArrow, alt: "empty", height: 12, width: 12 }), item.path[1] && (_jsxs("div", { className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: item.path[0]?.tokenOut?.icon, size: 24 }) }), item.path[0]?.tokenOut?.symbol, _jsx("img", { src: rightArrow, alt: "empty", height: 12, width: 12 })] })), _jsxs("div", { className: classes.sourceChainNumber, children: [_jsx("div", { className: classes.sourceChainTokenIcon, children: _jsx(Avatar, { radius: "xl", src: bestRoute?.dstChain.tokenOut
                                                                                        .icon, size: 24 }) }), _jsx("div", { className: classes.sourceChainTokenNumber, children: customToFixed(item.amountOut) +
                                                                                    " " +
                                                                                    bestRoute?.dstChain.tokenOut.symbol })] })] })] }, index))) }))] }) }))] })) }), _jsx(Center, { children: _jsxs(UnstyledButton, { onClick: handleTapMore, variant: "light", children: [" ", _jsxs(Flex, { align: "center", gap: "xs", children: [_jsx(Text, { fz: 14, children: t("more_route") }), _jsx(IconEye, {})] }), " "] }) })] }))] }) })
    // </div>
    );
});
BestRouteCard.displayName = "SwiperSlide";
export default BestRouteCard;
