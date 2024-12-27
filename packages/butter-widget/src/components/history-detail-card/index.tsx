"use client";
import {
  ActionIcon,
  Box,
  Center,
  Flex,
  Loader,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useHistoryDetailCardStyles } from "./styles";
import { HistoryDetailCardProps } from "./types";
import IconCloseCircle from "../icons/icon-close-circle";
import { useCallback, useEffect, useState } from "react";
import { gsap } from "gsap";
import HistoryTimeline from "./history-timeline";
import { UserSwapHistoryDetailResponse } from "../../utils/api/types";
import { chainExplorerUrl } from "../../utils/links";
import useSWR from "swr";
import { useTranslation } from "react-i18next";
import { useSwapDetailSteps } from "../../hooks/history/useSwapHistoryInfo";
import { getSwapHistoryDetail } from "@butternetwork/sdk";

const HistoryDetailCard = ({ show, onClose, data }: HistoryDetailCardProps) => {
  const { t } = useTranslation();
  const { classes } = useHistoryDetailCardStyles();
  const [details, setDetails] = useState<
    UserSwapHistoryDetailResponse | null | undefined
  >(null);
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
    } else {
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
    } else {
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

  return (
    <Box className={`${classes.root} historyContainer`}>
      <Box className={`${classes.content} historyContent`}>
        <Flex align={"center"} justify={"space-between"}>
          <Text fz={18} fw={"bold"} c={"primary.6"}>
            {t("transaction_detail")}
          </Text>
          <ActionIcon onClick={onClose} variant="transparent">
            <IconCloseCircle color={theme.colors.foreground[6]}></IconCloseCircle>
          </ActionIcon>
        </Flex>
        <Flex
          direction={"column"}
          w={"100%"}
          gap={10}
          className={classes.historyContent}
        >
          <Flex direction={"column"} align={"flex-start"}>
            <Text fz={14} fw={700}>
              {t("sending")}
            </Text>
            <Box className={classes.infoBox}>
              <Text fz={14} fw={"bold"} c={"primary.6"}>
                {fromData?.amount} {fromData?.token?.symbol}
              </Text>
              <a
                href={chainExplorerUrl({
                  explore: fromData?.chain?.scanUrl || "",
                  address: fromData?.address || "",
                })}
                target={"_blank"}
              >
                <Text fz={12} className={classes.addressText}>
                  {fromData?.address}
                </Text>
              </a>
            </Box>
          </Flex>
          <Flex direction={"column"} align={"flex-start"}>
            <Text fz={14} fw={700}>
              {t("receiving")}
            </Text>
            <Box className={classes.infoBox}>
              <Text fz={14} fw={"bold"} c={"primary.6"}>
                {toData?.amount} {toData?.token?.symbol}
              </Text>
              <a
                href={chainExplorerUrl({
                  explore: toData?.chain?.scanUrl || "",
                  address: toData?.address || "",
                })}
                target={"_blank"}
              >
                <Text fz={12} className={classes.addressText}>
                  {toData?.address}
                </Text>
              </a>
            </Box>
          </Flex>
          <Flex direction={"column"} align={"flex-start"}>
            <Text fz={14} fw={700}>
              {t("fee")}
            </Text>
            <Box className={classes.infoBox}>
              {/*<Skeleton visible={loading} w={"100px"} h={"20px"}>*/}
              <Text fz={14} fw={"bold"} c={"primary.6"}>
                {details && details.fee}
              </Text>
              {/*</Skeleton>*/}
            </Box>
          </Flex>
          {loading && !details ? (
            <Center w={"100%"}>
              <Loader></Loader>
            </Center>
          ) : (
            <Flex direction={"column"} align={"flex-start"}>
              <Text fz={14} fw={700}>
                {t("status")}
              </Text>
              <Box className={classes.infoBox}>
                <HistoryTimeline
                  data={details}
                  currentStep={2}
                ></HistoryTimeline>
              </Box>
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default HistoryDetailCard;
