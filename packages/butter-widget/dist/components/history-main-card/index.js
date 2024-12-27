"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ActionIcon, Box, Flex, Loader, Text, UnstyledButton, useMantineTheme, } from "@mantine/core";
import { useHistoryMainCardStyles } from "./styles";
import { useCallback, useMemo, useRef, useState } from "react";
import IconCloseCircle from "../icons/icon-close-circle";
import HistoryItem from "./history-item";
import { useAppDispatch, useUserHistoryForPage, useUserHistoryLoading, } from "../../store/hooks";
import { useAccount } from "wagmi";
import HistoryDetailCard from "../history-detail-card";
import { useTranslation } from "react-i18next";
import { getUserHistory } from "../../store/route/routes-slice";
import { toggleHistoryShow } from "../../store/ui/uiSlice";
import useSWR from "swr";
import useFromWallet from "../../hooks/useFromWallet";
const PAGE_SIZE = 3;
const HistoryMainCard = () => {
    const { classes } = useHistoryMainCardStyles();
    // const swiper = useSwiper();
    const [currentIndex, setCurrentIndex] = useState(0);
    const fromWallet = useFromWallet();
    const loading = useUserHistoryLoading();
    const { address: account } = useAccount();
    const userAccount = useMemo(() => {
        return fromWallet?.address || account || "";
    }, [account, fromWallet]);
    const history = useUserHistoryForPage(currentIndex + 1, PAGE_SIZE, userAccount);
    const totalPage = useMemo(() => {
        return Math.ceil(history.total / PAGE_SIZE);
    }, [history]);
    const dispatch = useAppDispatch();
    const [selected, setSelected] = useState(null);
    // const show = useShowHistoryCard();
    const handleTapPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const handleTapNext = () => {
        if (currentIndex < totalPage - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    useSWR([userAccount, "getUserHistory"], ([address]) => {
        if (address) {
            dispatch(getUserHistory({
                account: address,
                page: 1,
            }));
        }
    }, {
        refreshInterval: 6000,
    });
    const [showDetail, setShowDetail] = useState(false);
    const handleTapItem = (item) => {
        setSelected(item);
        setShowDetail(true);
    };
    const { t } = useTranslation();
    // const swiper = useSwiper();
    // const embApi = useEmbAPI();
    const hide = useCallback(() => {
        dispatch(toggleHistoryShow(false));
    }, [dispatch]);
    const box = useRef(null);
    // useEffect(() => {
    //   gsap.to(box.current, {
    //     translateX: 0,
    //     opacity: 1,
    //     ease: AnimationBackEase,
    //   });
    //   embApi?.scrollTo(1, true);
    //   setTimeout(() => {
    //     embApi?.scrollTo(0, false);
    //   }, 16);
    // }, [embApi]);
    const theme = useMantineTheme();
    return (_jsxs(Box, { ref: box, className: `${classes.root} historyCard`, children: [_jsxs(Flex, { align: "center", justify: "space-between", w: "100%", children: [_jsx(Text, { fz: 18, fw: 700, c: "primary.6", children: t("history") }), _jsxs(Flex, { align: "center", justify: "flex-end", gap: "xs", children: [_jsxs(Flex, { align: "center", gap: 4, children: [_jsx(UnstyledButton, { onClick: handleTapPrevious, disabled: currentIndex === 0, fz: 12, fw: 700, className: classes.topButton, children: t("previous") }), _jsxs(Flex, { children: [_jsx(Text, { fz: 12, fw: 600, c: "primary.6", children: currentIndex + 1 }), _jsxs(Text, { fz: 12, fw: 600, children: ["/", totalPage] })] }), _jsx(UnstyledButton, { onClick: handleTapNext, disabled: currentIndex === totalPage, fz: 12, fw: 700, className: classes.topButton, children: t("next") })] }), _jsx(ActionIcon, { onClick: hide, variant: "transparent", children: _jsx(IconCloseCircle, { color: theme.colors.foreground[6] }) })] })] }), loading && history.list.length === 0 && (_jsx(Flex, { align: "center", justify: "center", h: "100%", p: 40, children: _jsx(Loader, {}) })), _jsx("ul", { className: classes.list, children: history.list.map((item, index) => {
                    return (_jsx(HistoryItem, { onClick: () => {
                            handleTapItem(item);
                        }, data: item }, item.sourceHash + index));
                }) }), _jsx(HistoryDetailCard, { data: selected, show: showDetail, onClose: () => {
                    setSelected(null);
                    setShowDetail(false);
                } })] }));
};
HistoryMainCard.displayName = "SwiperSlide";
export default HistoryMainCard;
