"use client";
import {
  ActionIcon,
  Box,
  Flex,
  Loader,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useHistoryMainCardStyles } from "./styles";
import { useCallback, useMemo, useRef, useState } from "react";
import IconCloseCircle from "../icons/icon-close-circle";
import HistoryItem from "./history-item";
import {
  useAppDispatch,
  useUserHistoryForPage,
  useUserHistoryLoading,
} from "../../store/hooks";
import { useAccount } from "wagmi";
import { UserSwapHistoryResponseItem } from "../../utils/api/types";
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
  const history = useUserHistoryForPage(
    currentIndex + 1,
    PAGE_SIZE,
    userAccount,
  );
  const totalPage = useMemo(() => {
    return Math.ceil(history.total / PAGE_SIZE);
  }, [history]);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<UserSwapHistoryResponseItem | null>(
    null,
  );
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

  useSWR(
    [userAccount, "getUserHistory"],
    ([address]) => {
      if (address) {
        dispatch(
          getUserHistory({
            account: address!,
            page: 1,
          }),
        );
      }
    },
    {
      refreshInterval: 6000,
    },
  );

  const [showDetail, setShowDetail] = useState(false);
  const handleTapItem = (item: UserSwapHistoryResponseItem) => {
    setSelected(item);
    setShowDetail(true);
  };
  const { t } = useTranslation();
  // const swiper = useSwiper();
  // const embApi = useEmbAPI();
  const hide = useCallback(() => {
    dispatch(toggleHistoryShow(false));
  }, [dispatch]);
  const box = useRef<HTMLDivElement | null>(null);
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

  return (
    <Box ref={box} className={`${classes.root} historyCard`}>
      <Flex align={"center"} justify={"space-between"} w={"100%"}>
        <Text fz={18} fw={700} c={"primary.6"}>
          {t("history")}
        </Text>
        <Flex align={"center"} justify={"flex-end"} gap={"xs"}>
          <Flex align={"center"} gap={4}>
            <UnstyledButton
              onClick={handleTapPrevious}
              disabled={currentIndex === 0}
              fz={12}
              fw={700}
              className={classes.topButton}
            >
              {t("previous")}
            </UnstyledButton>
            <Flex>
              <Text fz={12} fw={600} c={"primary.6"}>
                {currentIndex + 1}
              </Text>
              <Text fz={12} fw={600}>
                /{totalPage}
              </Text>
            </Flex>
            <UnstyledButton
              onClick={handleTapNext}
              disabled={currentIndex === totalPage}
              fz={12}
              fw={700}
              className={classes.topButton}
            >
              {t("next")}
            </UnstyledButton>
          </Flex>
          <ActionIcon onClick={hide} variant="transparent">
            <IconCloseCircle color={theme.colors.foreground[6]}></IconCloseCircle>
          </ActionIcon>
        </Flex>
      </Flex>
      {loading && history.list.length === 0 && (
        <Flex align={"center"} justify={"center"} h={"100%"} p={40}>
          <Loader></Loader>
        </Flex>
      )}
      <ul className={classes.list}>
        {history.list.map((item: any, index: number) => {
          return (
            <HistoryItem
              onClick={() => {
                handleTapItem(item);
              }}
              key={item.sourceHash + index}
              data={item}
            ></HistoryItem>
          );
        })}
      </ul>
      <HistoryDetailCard
        data={selected}
        show={showDetail}
        onClose={() => {
          setSelected(null);
          setShowDetail(false);
        }}
      ></HistoryDetailCard>
    </Box>
  );
};

HistoryMainCard.displayName = "SwiperSlide";

export default HistoryMainCard;
