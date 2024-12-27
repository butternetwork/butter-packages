"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Box, Flex, Text } from "@mantine/core";
import { HistoryState, } from "./types";
import { useCrossStateTagStyles, useHistoryItemStyles, } from "./styles";
import BgCrossing from "../../assets/images/history-bg-crossing.svg";
import BgRelaying from "../../assets/images/history-bg-relaying.svg";
import BgImComplete from "../../assets/images/history-bg-imcomplete.svg";
import BgRelayComplete from "../../assets/images/history-bg-relayer-complete.svg";
import BgComplete from "../../assets/images/history-bg-complete.svg";
import { useEffect, useMemo, useState } from "react";
import { formatUnits } from "viem";
import { useTranslation } from "react-i18next";
import IconArrowRightNormal from "../icons/icon-arrow-right-normal";
import IconDot from "../icons/icon-dot";
import IconError from "../icons/icon-error";
import { truncateAndTrimDecimals } from "../../utils/numbers";
import { useSwapHistoryInfo } from "../../hooks/history/useSwapHistoryInfo";
const CrossStateTag = ({ state }) => {
    const { t } = useTranslation();
    const [bgSrc, setBgSrc] = useState("");
    const [stateText, setStateText] = useState("");
    useEffect(() => {
        switch (state) {
            case HistoryState.Imcomplete:
                setBgSrc(BgImComplete);
                setStateText(t("imcomplete"));
                break;
            case HistoryState.Complete:
                setBgSrc(BgComplete);
                setStateText(t("complete"));
                break;
            case HistoryState.Crossing:
                setBgSrc(BgCrossing);
                setStateText(t("crossing"));
                break;
            case HistoryState.Relaying:
                setBgSrc(BgRelaying);
                setStateText(t("relaying"));
                break;
            case HistoryState.RelayerComplete:
                setBgSrc(BgRelayComplete);
                setStateText(t("relayer_complete"));
                break;
        }
    }, [state, t]);
    const { classes } = useCrossStateTagStyles({ bg: bgSrc });
    return (_jsx(Box, { className: classes.root, style: { backgroundImage: `url("${bgSrc}")` }, children: _jsx(Text, { className: classes.text, children: stateText }) }));
};
// const CrossValueBox = ({ value, chain }: { value: string; chain: string }) => {
//   const { classes } = useCrossValueBoxStyles();
//   return (
//     <Box className={classes.root}>
//       <Text className={classes.value}>{value}</Text>
//       <Text className={classes.chain}>{chain}</Text>
//     </Box>
//   );
// };
const HistoryItem = ({ onClick, data }) => {
    const { classes } = useHistoryItemStyles();
    const handleTapItem = () => {
        onClick();
    };
    const { steps } = useSwapHistoryInfo({ data });
    const fromTo = useMemo(() => {
        const from = {
            amount: formatUnits(BigInt(data.amount || 0), data.sourceToken?.decimal),
            symbol: data.sourceToken.symbol,
        };
        const to = {
            amount: data.receiveAmount
                ? formatUnits(BigInt(data.receiveAmount || 0), data.receiveTokenDict?.decimal)
                : 0,
            symbol: data.receiveTokenDict?.symbol,
        };
        return {
            from,
            to,
        };
    }, [
        data.amount,
        data.sourceToken?.decimal,
        data.sourceToken.symbol,
        data.receiveAmount,
        data.receiveTokenDict?.decimal,
        data.receiveTokenDict?.symbol,
    ]);
    return (_jsxs("li", { className: classes.root, onClick: handleTapItem, children: [_jsx("div", { className: classes.coinList, children: steps.map((step, index) => (_jsxs("div", { className: classes.coinItem, children: [step.token ? (_jsx(Avatar, { radius: "xl", src: step.token?.icon || "", size: 30 })) : (_jsx(Box, { bg: "gray", w: 30, h: 30, style: { borderRadius: 30 } })), _jsx("img", { className: classes.coinImg, src: step.chain?.chainImg || "", alt: "", width: 10, height: 10, style: {
                                objectFit: "contain",
                            } }), _jsx("div", { className: classes.arrow, children: index !== steps.length - 1 ? (_jsx(IconArrowRightNormal, {})) : data.state == 4 ? (_jsx(IconError, {})) : (_jsxs(_Fragment, { children: [" ", data.state == 1 ? _jsx(_Fragment, {}) : _jsx(IconDot, {})] })) })] }, index))) }), _jsx(Flex, { align: "center", gap: "xs", children: _jsxs("div", { className: classes.swapInfo, children: ["Swap", _jsx("div", { children: truncateAndTrimDecimals(Number(fromTo.from.amount), 6) }), _jsx("div", { children: fromTo.from.symbol }), "for", _jsx("div", { children: fromTo.to.amount ? (truncateAndTrimDecimals(Number(fromTo.to.amount), 6)) : (_jsx(_Fragment, { children: fromTo.to.symbol ? 0 : ". . . " })) }), _jsx("div", { children: fromTo.to.symbol })] }) }), _jsx("div", { className: classes.time, children: new Date(data.timestamp).toLocaleString() }), 
            // !mdUp &&
            _jsx("div", { className: classes.stutas, children: _jsx(Box, { children: _jsx(CrossStateTag, { state: data.state === 4
                            ? HistoryState.Imcomplete
                            : data.state === 1
                                ? HistoryState.Complete
                                : HistoryState.Crossing }) }) })] }));
};
export default HistoryItem;
