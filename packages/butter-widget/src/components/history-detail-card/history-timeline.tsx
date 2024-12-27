"use client";
import { useHistoryTimelineStyles } from "./styles";
import {
  ActionIcon,
  Avatar,
  Box,
  Flex,
  Progress,
  Text,
  useMantineTheme,
} from "@mantine/core";
import IconLaunchYellow from "../icons/icon-launch-yellow";
import IconArrowDownLong from "../icons/icon-arrow-down-long";
import IconOkYellow from "../icons/icon-ok-yellow";
import {
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  HistoryTimelineItemProps,
  HistoryTimelineProps,
} from "./types";
import { ellipsis } from "../../utils/addresses";
import errorIcon from "../../assets/images/icon-error.png";


import { chainExplorerUrl } from "../../utils/links";
import { useTranslation } from "react-i18next";
import { isNear } from "../../utils/chains-helper";
import { useSwapDetailSteps } from "../../hooks/history/useSwapHistoryInfo";

const HistoryTimeLineItem = ({
  children,
  isLast,
  currentStep,
  step,
  state,
}: PropsWithChildren<HistoryTimelineItemProps>) => {
  const { classes } = useHistoryTimelineStyles();
  const [isComplete, setIsComplete] = useState(false);
  const theme = useMantineTheme();
  useEffect(() => {
    setIsComplete(currentStep >= step);
  }, [currentStep, step]);
  return (
    <Box className={classes.tlItem}>
      {children}
      <Box className={classes.bullet}>
        <Flex direction={"column"} align={"center"} gap={10}>
          <Box className={classes.bulletIcon}>
            {state !== 1 && step == 3 ? (
              <img
                src={errorIcon}
                alt={""}
                width={12}
                height={12}
              ></img>
            ) : (
              <IconOkYellow
                color={isComplete ? theme.colors.yellow[5] : "#FFF"}
              ></IconOkYellow>
            )}
          </Box>
          {!isLast && (
            <Box className={classes.bulletLine}>
              {!(state !== 1 && step == 3) && (
                <IconArrowDownLong
                  color={isComplete ? theme.colors.yellow[5] : "#FFF"}
                ></IconArrowDownLong>
              )}
            </Box>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

const HistoryTimeline = ({ data }: HistoryTimelineProps) => {
  const { t } = useTranslation();
  const { classes } = useHistoryTimelineStyles();
  const { steps } = useSwapDetailSteps({ data });

  const currentStep = useMemo(() => {
    let flag = 0;
    steps.forEach((item: any) => {
      if (item.hash) {
        flag++;
      }
    });
    if (flag === steps.length) {
      flag++;
    }
    return flag;
  }, [steps]);

  return (
    <Box className={classes.root}>
      {steps.map((item, index: number) => (
        <HistoryTimeLineItem
          key={item?.chain?.chainId || "" + index}
          currentStep={currentStep}
          state={data?.state || 1}
          step={index + 1}
          isLast={false}
        >
          <Flex direction={"column"}>
            <Flex direction={"column"}>
              <Flex align={"center"} gap={6}>
                <Avatar
                  radius={"xl"}
                  src={item.chain?.chainImg}
                  size={25}
                ></Avatar>
                <Text fz={14} fw={600}>
                  {item.chain?.chainName}
                </Text>
              </Flex>
              {/*<Flex className={classes.swapDetail} align={"center"} gap={6}>*/}
              {/*  <Text fz={12} fw={600}>*/}
              {/*    <div style={{ marginBottom: "8px" }}>*/}
              {/*      {item.step + " on " + item.chain.chainName}*/}
              {/*    </div>*/}
              {/*  </Text>*/}
              {/*</Flex>*/}

              <a
                href={chainExplorerUrl({
                  explore: item.chain?.scanUrl || "",
                  hash: item.hash || "",
                  near: isNear(item.chain?.chainId || 0),
                })}
                target={"_blank"}
              >
                <Flex
                  justify={"flex-end"}
                  mt={-10}
                  align={"center"}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Text fz={12} fw={500}>
                    {ellipsis(item.hash || "") || ".........."}
                  </Text>
                  <ActionIcon variant="transparent">
                    <IconLaunchYellow></IconLaunchYellow>
                  </ActionIcon>
                </Flex>
              </a>
            </Flex>
            <Box>
              <Progress
                className={classes.progress}
                w={"100%"}
                value={
                  currentStep > index + 1
                    ? 100
                    : currentStep === index + 1
                      ? 60
                      : 0
                }
                size={"sm"}
              ></Progress>
            </Box>
          </Flex>
        </HistoryTimeLineItem>
      ))}
      {[1, 0].includes(data?.state || -1) && (
        <HistoryTimeLineItem
          currentStep={currentStep}
          step={4}
          isLast={true}
          state={0}
        >
          <Text fz={14} fw={600}>
            {data?.state === 0 ? "......" : t("complete")}
          </Text>
        </HistoryTimeLineItem>
      )}
    </Box>
  );
};

export default HistoryTimeline;
