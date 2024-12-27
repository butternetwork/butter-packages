"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ActionIcon, Box, Center, Flex, Loader, Text, useMantineTheme, } from "@mantine/core";
import { useHistoryDetailCardStyles } from "./styles";
import IconCloseCircle from "../icons/icon-close-circle";
import { useCallback, useEffect, useState } from "react";
import { gsap } from "gsap";
import HistoryTimeline from "./history-timeline";
import { chainExplorerUrl } from "../../utils/links";
import useSWR from "swr";
import { useTranslation } from "react-i18next";
import { useSwapDetailSteps } from "../../hooks/history/useSwapHistoryInfo";
import { getSwapHistoryDetail } from "@butternetwork/sdk";
const HistoryDetailCard = ({ show, onClose, data }) => {
    const { t } = useTranslation();
    const { classes } = useHistoryDetailCardStyles();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (show) {
            gsap.set(".historyContainer", {
                top: 0,
            });
            gsap.to(".historyContent", {
                translateY: 0,
                duration: 0.3,
                ease: "back.out(0.7)",
            });
        }
        else {
            gsap.to(".historyContent", {
                translateY: "-100%",
                duration: 0.3,
                ease: "back.out(0.7)",
                onComplete() {
                    gsap.set(".historyContainer", {
                        top: "-800px",
                    });
                },
            });
        }
    }, [show]);
    const loadData = useCallback(async () => {
        if (data) {
            setLoading(true);
            const res = await getSwapHistoryDetail({ id: `${data?.id}` });
            setDetails(res);
            setLoading(false);
        }
        else {
            setDetails(null);
        }
    }, [data]);
    useSWR(data && show ? [data?.sourceHash] : null, loadData, {
        refreshInterval: 5000,
    });
    useEffect(() => {
        loadData();
    }, [data]);
    const { fromData, toData } = useSwapDetailSteps({ data: details });
    const theme = useMantineTheme();
    return (_jsx(Box, { className: `${classes.root} historyContainer`, children: _jsxs(Box, { className: `${classes.content} historyContent`, children: [_jsxs(Flex, { align: "center", justify: "space-between", children: [_jsx(Text, { fz: 18, fw: "bold", c: "primary.6", children: t("transaction_detail") }), _jsx(ActionIcon, { onClick: onClose, variant: "transparent", children: _jsx(IconCloseCircle, { color: theme.colors.foreground[6] }) })] }), _jsxs(Flex, { direction: "column", w: "100%", gap: 10, className: classes.historyContent, children: [_jsxs(Flex, { direction: "column", align: "flex-start", children: [_jsx(Text, { fz: 14, fw: 700, children: t("sending") }), _jsxs(Box, { className: classes.infoBox, children: [_jsxs(Text, { fz: 14, fw: "bold", c: "primary.6", children: [fromData?.amount, " ", fromData?.token?.symbol] }), _jsx("a", { href: chainExplorerUrl({
                                                explore: fromData?.chain?.scanUrl || "",
                                                address: fromData?.address || "",
                                            }), target: "_blank", children: _jsx(Text, { fz: 12, className: classes.addressText, children: fromData?.address }) })] })] }), _jsxs(Flex, { direction: "column", align: "flex-start", children: [_jsx(Text, { fz: 14, fw: 700, children: t("receiving") }), _jsxs(Box, { className: classes.infoBox, children: [_jsxs(Text, { fz: 14, fw: "bold", c: "primary.6", children: [toData?.amount, " ", toData?.token?.symbol] }), _jsx("a", { href: chainExplorerUrl({
                                                explore: toData?.chain?.scanUrl || "",
                                                address: toData?.address || "",
                                            }), target: "_blank", children: _jsx(Text, { fz: 12, className: classes.addressText, children: toData?.address }) })] })] }), _jsxs(Flex, { direction: "column", align: "flex-start", children: [_jsx(Text, { fz: 14, fw: 700, children: t("fee") }), _jsx(Box, { className: classes.infoBox, children: _jsx(Text, { fz: 14, fw: "bold", c: "primary.6", children: details && details.fee }) })] }), loading && !details ? (_jsx(Center, { w: "100%", children: _jsx(Loader, {}) })) : (_jsxs(Flex, { direction: "column", align: "flex-start", children: [_jsx(Text, { fz: 14, fw: 700, children: t("status") }), _jsx(Box, { className: classes.infoBox, children: _jsx(HistoryTimeline, { data: details, currentStep: 2 }) })] }))] })] }) }));
};
export default HistoryDetailCard;
