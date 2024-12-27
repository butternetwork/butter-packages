"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useHistoryTimelineStyles } from "./styles";
import { ActionIcon, Avatar, Box, Flex, Progress, Text, useMantineTheme, } from "@mantine/core";
import IconLaunchYellow from "../icons/icon-launch-yellow";
import IconArrowDownLong from "../icons/icon-arrow-down-long";
import IconOkYellow from "../icons/icon-ok-yellow";
import { useEffect, useMemo, useState, } from "react";
import { ellipsis } from "../../utils/addresses";
import errorIcon from "../../assets/images/icon-error.png";
import { chainExplorerUrl } from "../../utils/links";
import { useTranslation } from "react-i18next";
import { isNear } from "../../utils/chains-helper";
import { useSwapDetailSteps } from "../../hooks/history/useSwapHistoryInfo";
const HistoryTimeLineItem = ({ children, isLast, currentStep, step, state, }) => {
    const { classes } = useHistoryTimelineStyles();
    const [isComplete, setIsComplete] = useState(false);
    const theme = useMantineTheme();
    useEffect(() => {
        setIsComplete(currentStep >= step);
    }, [currentStep, step]);
    return (_jsxs(Box, { className: classes.tlItem, children: [children, _jsx(Box, { className: classes.bullet, children: _jsxs(Flex, { direction: "column", align: "center", gap: 10, children: [_jsx(Box, { className: classes.bulletIcon, children: state !== 1 && step == 3 ? (_jsx("img", { src: errorIcon, alt: "", width: 12, height: 12 })) : (_jsx(IconOkYellow, { color: isComplete ? theme.colors.yellow[5] : "#FFF" })) }), !isLast && (_jsx(Box, { className: classes.bulletLine, children: !(state !== 1 && step == 3) && (_jsx(IconArrowDownLong, { color: isComplete ? theme.colors.yellow[5] : "#FFF" })) }))] }) })] }));
};
const HistoryTimeline = ({ data }) => {
    const { t } = useTranslation();
    const { classes } = useHistoryTimelineStyles();
    const { steps } = useSwapDetailSteps({ data });
    const currentStep = useMemo(() => {
        let flag = 0;
        steps.forEach((item) => {
            if (item.hash) {
                flag++;
            }
        });
        if (flag === steps.length) {
            flag++;
        }
        return flag;
    }, [steps]);
    return (_jsxs(Box, { className: classes.root, children: [steps.map((item, index) => (_jsx(HistoryTimeLineItem, { currentStep: currentStep, state: data?.state || 1, step: index + 1, isLast: false, children: _jsxs(Flex, { direction: "column", children: [_jsxs(Flex, { direction: "column", children: [_jsxs(Flex, { align: "center", gap: 6, children: [_jsx(Avatar, { radius: "xl", src: item.chain?.chainImg, size: 25 }), _jsx(Text, { fz: 14, fw: 600, children: item.chain?.chainName })] }), _jsx("a", { href: chainExplorerUrl({
                                        explore: item.chain?.scanUrl || "",
                                        hash: item.hash || "",
                                        near: isNear(item.chain?.chainId || 0),
                                    }), target: "_blank", children: _jsxs(Flex, { justify: "flex-end", mt: -10, align: "center", sx: {
                                            cursor: "pointer",
                                        }, children: [_jsx(Text, { fz: 12, fw: 500, children: ellipsis(item.hash || "") || ".........." }), _jsx(ActionIcon, { variant: "transparent", children: _jsx(IconLaunchYellow, {}) })] }) })] }), _jsx(Box, { children: _jsx(Progress, { className: classes.progress, w: "100%", value: currentStep > index + 1
                                    ? 100
                                    : currentStep === index + 1
                                        ? 60
                                        : 0, size: "sm" }) })] }) }, item?.chain?.chainId || "" + index))), [1, 0].includes(data?.state || -1) && (_jsx(HistoryTimeLineItem, { currentStep: currentStep, step: 4, isLast: true, state: 0, children: _jsx(Text, { fz: 14, fw: 600, children: data?.state === 0 ? "......" : t("complete") }) }))] }));
};
export default HistoryTimeline;
