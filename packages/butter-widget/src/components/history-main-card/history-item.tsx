"use client";
import { Avatar, Box, Flex, Text } from "@mantine/core";
import {
  HistoryItemProps,
  HistoryItemStateTagProps,
  HistoryState,
} from "./types";
import {
  useCrossStateTagStyles,
  useHistoryItemStyles,
} from "./styles";
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

const CrossStateTag = ({ state }: HistoryItemStateTagProps) => {
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
  return (
    <Box className={classes.root} style={{ backgroundImage: `url("${bgSrc}")` }}>
      <Text className={classes.text}>{stateText}</Text>
    </Box>
  );
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

const HistoryItem = ({ onClick, data }: HistoryItemProps) => {
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
        ? formatUnits(
          BigInt((data.receiveAmount as number) || 0),
          data.receiveTokenDict?.decimal,
        )
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

  return (
    <li className={classes.root} onClick={handleTapItem}>
      <div className={classes.coinList}>
        {steps.map((step, index) => (
          <div className={classes.coinItem} key={index}>
            {step.token ? (
              <Avatar
                radius={"xl"}
                src={step.token?.icon || ""}
                size={30}
              ></Avatar>
            ) : (
              <Box bg={"gray"} w={30} h={30} style={{ borderRadius: 30 }}></Box>
            )}
            <img
              className={classes.coinImg}
              src={step.chain?.chainImg || ""}
              alt={""}
              width={10}
              height={10}
              style={{
                objectFit: "contain",
              }}
            ></img>
            <div className={classes.arrow}>
              {index !== steps.length - 1 ? (
                <IconArrowRightNormal></IconArrowRightNormal>
              ) : data.state == 4 ? (
                <IconError></IconError>
              ) : (
                <> {data.state == 1 ? <></> : <IconDot></IconDot>}</>
              )}
            </div>
          </div>
        ))}
      </div>
      <Flex align={"center"} gap={"xs"}>
        <div className={classes.swapInfo}>
          {"Swap"}
          <div>
            {truncateAndTrimDecimals(
              Number(
                fromTo.from.amount,
                // formatUnits(
                //   BigInt(data.amount || 0),
                //   data.sourceToken?.decimal,
                // ),
              ),
              6,
            )}
          </div>
          <div>{fromTo.from.symbol}</div>
          {"for"}

          <div>
            {fromTo.to.amount ? (
              truncateAndTrimDecimals(
                Number(
                  fromTo.to.amount,
                  // formatUnits(
                  //   BigInt((data.inAmount as number) || 0),
                  //   data.destinationToken?.decimal,
                  // ),
                ),
                6,
              )
            ) : (
              <>{fromTo.to.symbol ? 0 : ". . . "}</>
            )}
          </div>
          <div>{fromTo.to.symbol}</div>
        </div>
      </Flex>
      <div className={classes.time}>
        {new Date(data.timestamp).toLocaleString()}
      </div>
      {
        // !mdUp &&
        <div className={classes.stutas}>
          <Box>
            <CrossStateTag
              state={
                data.state === 4
                  ? HistoryState.Imcomplete
                  : data.state === 1
                    ? HistoryState.Complete
                    : HistoryState.Crossing
              }
            ></CrossStateTag>
          </Box>
        </div>
      }
    </li>
  );
};

export default HistoryItem;
