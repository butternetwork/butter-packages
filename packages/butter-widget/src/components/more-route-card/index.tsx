"use client";
import { ActionIcon, Box, Flex, Space, Text, Tooltip, useMantineTheme } from "@mantine/core";
import { useMoreRoutesCardStyles } from "./styles";
import IconLightRed from "../icons/icon-light-red";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import IconLightGreen from "../icons/IconLightGreen";
import { MoreRouteCardProps } from "./types";
import IconCloseCircle from "../icons/icon-close-circle";
import RouteItem from "./route-item";
import { gsap } from "gsap";
import { AnimationBackEase } from "../../utils/animations";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateSelectedRoute } from "../../store/route/routes-slice";
import { useTranslation } from "react-i18next";
import { toggleMoreShow } from "../../store/ui/uiSlice";
import {
  useEmbAPI,
  useShowHistoryCard,
  useShowMoreCard,
} from "../../store/ui/hooks";
import ErrorFallback from "../ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

type MoreRouteCardHandle = {
  hide: () => void;
};

const MoreRouteCard = forwardRef<MoreRouteCardHandle, MoreRouteCardProps>(
  ({ }, ref) => {
    const { t } = useTranslation();
    const { classes } = useMoreRoutesCardStyles();
    const [networkOk, _setNetworkOk] = useState(true);
    // const swiper = useSwiper();
    const emberAPI = useEmbAPI();
    const routes = useAppSelector((state) => state.routes.routes);
    const dispatch = useAppDispatch();
    const show = useShowMoreCard();
    const showHistory = useShowHistoryCard();

    const handleTapItem = (item: number) => {
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
        if (!emberAPI) return;
        const currentIndex = showHistory ? 3 : 2;
        emberAPI?.scrollTo(currentIndex - 1, true);
        setTimeout(() => {
          emberAPI?.scrollTo(currentIndex, false);
        }, 16);
      }
    }, [show]);

    const theme = useMantineTheme();

    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Box className={`${classes.root} moreRouteCard embla__slide`}>
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            <Text c={"primary.6"} fz={18} fw={"bold"}>
              {t("more_route")}
            </Text>
            <Flex align={"center"} justify={"flex-end"} gap={"xs"}>
              <Tooltip label={"Tip"}>
                <ActionIcon variant="transparent">
                  {networkOk ? (
                    <IconLightGreen></IconLightGreen>
                  ) : (
                    <IconLightRed></IconLightRed>
                  )}
                </ActionIcon>
              </Tooltip>
              <ActionIcon onClick={hide} variant="transparent">
                <IconCloseCircle color={theme.colors.foreground[6]}></IconCloseCircle>
              </ActionIcon>
            </Flex>
          </Flex>
          <Space h={10}></Space>
          <Flex
            direction={"column"}
            align={"stretch"}
            justify={"flex-start"}
            gap={10}
            w={"100%"}
          >
            {routes.map((item, index) => {
              return (
                <RouteItem
                  data={item}
                  key={item.hash}
                  onClick={() => {
                    handleTapItem(index);
                  }}
                  best={index === 0}
                ></RouteItem>
              );
            })}
          </Flex>
        </Box>
      </ErrorBoundary>
    );
  },
);

MoreRouteCard.displayName = "SwiperSlide";

export default MoreRouteCard;
