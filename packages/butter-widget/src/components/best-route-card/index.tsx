"use client";

import {
  ActionIcon,
  Avatar,
  Box,
  Center,
  Flex,
  Loader,
  Space,
  Text,
  Tooltip,
  UnstyledButton,
  Image,
  useMantineTheme,
} from "@mantine/core";
import { useBestRouteCardStyles } from "./styles";
import EmptyPic from "../../assets/images/empty.webp";
import rightArrow from "../../assets/images/right-arrow.svg";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import IconLightGreen from "../icons/IconLightGreen";
import IconCloseCircle from "../icons/icon-close-circle";

import IconEye from "../icons/icon-eye";
import { useAppDispatch } from "../../store/hooks";
import IconLightRed from "../icons/icon-light-red";
import { useTranslation } from "react-i18next";

import IconArrowDownSimple from "../icons/icon-arrow-down-simple";
import { customToFixed } from "../../utils/numbers";
import { useChainsMap } from "../../store/global/hooks";
import {
  useBestRoute,
  useFetchRouteError,
  useLoadingRoute,
} from "../../store/route/hooks";
import { toggleMoreShow } from "../../store/ui/uiSlice";
import { closeRoute } from "../../store/route/routes-slice";
import ErrorFallback from "../ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { BestRouteCardProps } from "./types";

interface DexMap {
  [key: string]: string;
}

const dexMap: DexMap = {
  UniswapV2: "https://icons.llamao.fi/icons/protocols/uniswap?w=48&h=48",

  UniswapV3: "https://icons.llamao.fi/icons/protocols/uniswap?w=48&h=48",
  QuickswapV2: "https://icons.llamao.fi/icons/protocols/quickswap?w=48&h=48",
  QuickswapV3: "https://icons.llamao.fi/icons/protocols/quickswap?w=48&h=48",
  SushiswapV2: "https://icons.llamao.fi/icons/protocols/sushi?w=48&h=48",
  SushiswapV3: "https://icons.llamao.fi/icons/protocols/sushi?w=48&h=48",
  PancakeswapV2:
    "https://icons.llamao.fi/icons/protocols/pancakeswap?w=48&h=48",

  PancakeswapV3:
    "https://icons.llamao.fi/icons/protocols/pancakeswap?w=48&h=48",
  KlayswapV2: "https://icons.llamao.fi/icons/protocols/klayswap?w=48&h=48",
  KlayswapV3: "https://icons.llamao.fi/icons/protocols/klayswap?w=48&h=48",

  CURVE: "https://icons.llamao.fi/icons/protocols/curve-finance?w=48&h=48",
  "Ref.finance":
    "https://icons.llamao.fi/icons/protocols/ref-finance?w=48&h=48",
  HiveswapV2: "https://icons.llamao.fi/icons/protocols/hiveswap-v3?w=48&h=48",
  HiveswapPro: "https://icons.llamao.fi/icons/protocols/hiveswap-v3?w=48&h=48",

  HiveswapV3: "https://icons.llamao.fi/icons/protocols/hiveswap-v3?w=48&h=48",
  Swappi: "https://icons.llamao.fi/icons/protocols/swappi?w=48&h=48",
  Balancer: "https://icons.llamao.fi/icons/protocols/balancer?w=48&h=48",
  "1inch": "https://icons.llamao.fi/icons/protocols/1inch-network?w=48&h=48",
  Sunswap: "https://icons.llamao.fi/icons/protocols/sunswap-v1?w=48&h=48",
  iZUMi: "https://icons.llamao.fi/icons/protocols/izumi-finance?w=48&h=48",
};

const bridgeMap: DexMap = {
  Butter: "https://icons.llamao.fi/icons/protocols/butter-swap?w=48&h=48",
  Stargate: "https://icons.llamao.fi/icons/protocols/stargate?w=48&h=48",
  Circle: "https://icons.llamao.fi/icons/protocols/circlepacific?w=48&h=48",
};

const BestRouteCard = forwardRef(({ }: BestRouteCardProps, ref) => {
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
  const box = useRef<HTMLDivElement | null>(null);

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

  const chainLogo = useCallback(
    (chainId?: any) => {
      if (chainId) {
        console.log(chainsMap, chainId, chainsMap[chainId]);
        return chainsMap[chainId].logoUri;
      }
      return "";
    },
    [chainsMap],
  );

  const chainName = useCallback(
    (chainId?: any) => {
      if (chainId) {
        return chainsMap[chainId].name;
      }
      return "";
    },
    [chainsMap],
  );

  return (
    // <div
    //   className={"embla__slide"}
    //   style={{
    //     width: "min-content",
    //   }}
    // >
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Box
        className={`${classes.root} bestRouteCard`}
        ref={box}
        data-flip-id={"route"}
      >
        <Flex align={"center"} justify={"space-between"}>
          <Text fz={18} fw={700} c={"primary.6"}>
            {t("best_route")}
          </Text>
          <Flex align={"center"} justify={"flex-end"} gap={4}>
            <Tooltip label={"Tip"}>
              <ActionIcon variant="transparent">
                {routeLoading || empty ? (
                  <IconLightRed></IconLightRed>
                ) : (
                  <IconLightGreen></IconLightGreen>
                )}
              </ActionIcon>
            </Tooltip>
            <ActionIcon onClick={hide} variant="transparent">
              <IconCloseCircle color={theme.colors.foreground[6]}></IconCloseCircle>
            </ActionIcon>
          </Flex>
        </Flex>
        <Space h={10}></Space>
        {routeLoading ? (
          <Box className={classes.loadingContent}>
            <Center w={"100%"} h={"300px"}>
              <Loader></Loader>
            </Center>
          </Box>
        ) : empty ? (
          <Box className={classes.emptyContent}>
            <img src={EmptyPic} alt={"empty"} width={70}></img>
            <Text fz={16} fw={600}>
              {t("no_route")}
            </Text>
            <Text fz={14} fw={500} sx={{ textAlign: "center" }}>
              {t("select_the_token")}
            </Text>
            <Text fz={12} fw={400} color={"red.4"} sx={{ textAlign: "center" }}>
              {routeError?.message}
            </Text>
          </Box>
        ) : (
          <Box className={classes.routeContent}>
            <div className={`${classes.route}`}>
              {bestRoute !== "empty" && (
                <>
                  {bestRoute?.srcChain && (
                    <div className={`${classes.sourceChain}`}>
                      <div
                        className={classes.rightContent}
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setSrcFold(!srcFold);
                        }}
                      >
                        <div className={classes.sourceText}>
                          {bestRoute?.bridgeChain
                            ? "1. Source Chain"
                            : "Swap"}

                          <div className={classes.clainInfo}>
                            {"on " + chainName(bestRoute?.srcChain.chainId)}
                            <Avatar
                              radius={"xl"}
                              src={chainLogo(bestRoute?.srcChain.chainId)}
                              size={16}
                            />
                          </div>
                        </div>
                        {
                          <div className={classes.topText}>
                            <div className={classes.topLeft}>
                              <div className={classes.sourceChainNumber}>
                                <div className={classes.sourceChainTokenIcon}>
                                  {
                                    <Avatar
                                      radius={"xl"}
                                      src={bestRoute?.srcChain.tokenIn.icon}
                                      size={28}
                                    />
                                  }
                                </div>
                                <div
                                  style={{ fontSize: "15px" }}
                                  className={classes.sourceChainTokenNumber}
                                >
                                  {customToFixed(
                                    bestRoute?.srcChain.totalAmountIn,
                                  ) +
                                    " " +
                                    bestRoute?.srcChain.tokenIn.symbol}
                                </div>
                              </div>

                              <img
                                src={rightArrow}
                                alt={"empty"}
                                height={12}
                                width={12}
                              ></img>

                              <div className={classes.sourceChainNumber}>
                                <div className={classes.sourceChainTokenIcon}>
                                  {
                                    <Avatar
                                      radius={"xl"}
                                      src={bestRoute?.srcChain.tokenOut.icon}
                                      size={28}
                                    />
                                  }
                                </div>
                                <div
                                  style={{ fontSize: "15px" }}
                                  className={classes.sourceChainTokenNumber}
                                >
                                  {customToFixed(
                                    bestRoute?.srcChain.totalAmountOut,
                                  ) +
                                    " " +
                                    bestRoute?.srcChain.tokenOut.symbol}
                                </div>
                              </div>
                            </div>
                            <div className={classes.foldButtom}>
                              <IconArrowDownSimple color={theme.colors.foreground[6]} />
                            </div>
                          </div>
                        }
                        {srcFold && (
                          <div className={classes.routeCards}>
                            {bestRoute?.srcChain.route.map(
                              (item: any, index: number) => (
                                <div
                                  className={classes.routeCard}
                                  key={index}
                                >
                                  {item?.dexName !== "mixed" ? (
                                    <div className={classes.tokenName}>
                                      {item?.dexName && (
                                        <Avatar
                                          radius={"xl"}
                                          src={dexMap[item?.dexName]}
                                          size={18}
                                        />
                                      )}
                                      {item?.dexName
                                        ? item?.dexName
                                        : "DIRECT"}
                                    </div>
                                  ) : (
                                    <div className={classes.dexs}>
                                      <div className={classes.tokenName}>
                                        {
                                          <Avatar
                                            radius={"xl"}
                                            src={
                                              dexMap[item.extra[0].dexName]
                                            }
                                            size={18}
                                          />
                                        }
                                        {item.extra[0].dexName}
                                      </div>
                                      {item.extra[0].dexName !==
                                        item.extra[1].dexName && (
                                          <>
                                            and
                                            <div className={classes.tokenName}>
                                              {
                                                <Avatar
                                                  radius={"xl"}
                                                  src={
                                                    dexMap[
                                                    item.extra[1].dexName
                                                    ]
                                                  }
                                                  size={18}
                                                />
                                              }
                                              {item.extra[1].dexName}
                                            </div>
                                          </>
                                        )}
                                    </div>
                                  )}
                                  <div className={classes.topLeft}>
                                    <div
                                      className={classes.sourceChainNumber}
                                    >
                                      <div
                                        className={
                                          classes.sourceChainTokenIcon
                                        }
                                      >
                                        {
                                          <Avatar
                                            radius={"xl"}
                                            src={
                                              bestRoute?.srcChain.tokenIn.icon
                                            }
                                            size={24}
                                          />
                                        }
                                      </div>
                                      <div
                                        className={
                                          classes.sourceChainTokenNumber
                                        }
                                      >
                                        {customToFixed(item.amountIn) +
                                          " " +
                                          bestRoute?.srcChain.tokenIn.symbol}
                                      </div>
                                    </div>

                                    <img
                                      src={rightArrow}
                                      alt={"empty"}
                                      height={12}
                                      width={12}
                                    ></img>

                                    {item.path[1] && (
                                      <div
                                        className={classes.sourceChainNumber}
                                      >
                                        <div
                                          className={
                                            classes.sourceChainTokenIcon
                                          }
                                        >
                                          {
                                            <Avatar
                                              radius={"xl"}
                                              src={
                                                item?.path[0]?.tokenOut?.icon
                                              }
                                              size={24}
                                            />
                                          }
                                        </div>
                                        {item?.path[0]?.tokenOut?.symbol}
                                        <img
                                          src={rightArrow}
                                          alt={"empty"}
                                          height={12}
                                          width={12}
                                        ></img>
                                      </div>
                                    )}
                                    <div
                                      className={classes.sourceChainNumber}
                                    >
                                      <div
                                        className={
                                          classes.sourceChainTokenIcon
                                        }
                                      >
                                        {
                                          <Avatar
                                            radius={"xl"}
                                            src={
                                              bestRoute?.srcChain.tokenOut
                                                .icon
                                            }
                                            size={24}
                                          />
                                        }
                                      </div>
                                      <div
                                        className={
                                          classes.sourceChainTokenNumber
                                        }
                                      >
                                        {customToFixed(item.amountOut) +
                                          " " +
                                          bestRoute?.srcChain.tokenOut.symbol}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {bestRoute?.bridgeChain && (
                    <div className={classes.sourceChain}>
                      <div className={classes.rightContent}>
                        <div className={classes.sourceText}>
                          {"2. Bridge"}
                        </div>

                        {
                          <div className={classes.routeCards}>
                            {bestRoute?.bridgeChain?.route.map(
                              (item: any, index: number) => (
                                <div
                                  className={classes.routeCard}
                                  key={index}
                                >
                                  <div className={classes.tokenName}>
                                    {
                                      <Avatar
                                        radius={"xl"}
                                        src={
                                          bridgeMap[
                                          bestRoute?.bridgeChain?.bridge
                                          ]
                                        }
                                        size={18}
                                      />
                                    }
                                    {bestRoute?.bridgeChain?.bridge}
                                  </div>
                                  <div className={classes.topLeft}>
                                    <div
                                      className={classes.sourceChainNumber}
                                    >
                                      <div
                                        className={
                                          classes.sourceChainTokenIcon
                                        }
                                      >
                                        {
                                          <Avatar
                                            radius={"xl"}
                                            src={
                                              bestRoute?.bridgeChain.tokenIn
                                                .icon
                                            }
                                            size={24}
                                          />
                                        }
                                      </div>
                                      <div
                                        style={{ fontSize: "15px" }}
                                        className={
                                          classes.sourceChainTokenNumber
                                        }
                                      >
                                        {customToFixed(item.amountIn) +
                                          " " +
                                          bestRoute?.bridgeChain.tokenIn
                                            .symbol}
                                      </div>
                                    </div>

                                    <img
                                      src={rightArrow}
                                      alt={"empty"}
                                      height={12}
                                      width={12}
                                    ></img>

                                    <div
                                      className={classes.sourceChainNumber}
                                    >
                                      <div
                                        className={
                                          classes.sourceChainTokenIcon
                                        }
                                      >
                                        {
                                          <Avatar
                                            radius={"xl"}
                                            src={
                                              bestRoute?.bridgeChain.tokenOut
                                                .icon
                                            }
                                            size={24}
                                          />
                                        }
                                      </div>
                                      <div
                                        style={{ fontSize: "15px" }}
                                        className={
                                          classes.sourceChainTokenNumber
                                        }
                                      >
                                        {customToFixed(item.amountOut) +
                                          " " +
                                          bestRoute?.bridgeChain.tokenOut
                                            .symbol}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        }
                      </div>
                    </div>
                  )}

                  {bestRoute?.dstChain && (
                    <div className={classes.sourceChain}>
                      <div
                        className={classes.rightContent}
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setDstFold(!dstFold);
                        }}
                      >
                        <div className={classes.sourceText}>
                          {"3. Destination Chain"}
                          <div className={classes.clainInfo}>
                            {"on " + chainName(bestRoute?.dstChain.chainId)}
                            <Avatar
                              radius={"xl"}
                              src={chainLogo(bestRoute?.dstChain.chainId)}
                              size={16}
                            />
                          </div>
                        </div>
                        {
                          <div className={classes.topText}>
                            <div className={classes.topLeft}>
                              <div
                                style={{ fontSize: "15px" }}
                                className={classes.sourceChainNumber}
                              >
                                <div className={classes.sourceChainTokenIcon}>
                                  {
                                    <Avatar
                                      radius={"xl"}
                                      src={bestRoute?.dstChain.tokenIn.icon}
                                      size={28}
                                    />
                                  }
                                </div>
                                <div
                                  className={classes.sourceChainTokenNumber}
                                >
                                  {customToFixed(
                                    bestRoute?.dstChain.totalAmountIn,
                                  ) +
                                    " " +
                                    bestRoute?.dstChain.tokenIn.symbol}
                                </div>
                              </div>

                              <Image
                                src={rightArrow}
                                alt={"empty"}
                                height={12}
                                width={12}
                              ></Image>
                              <div
                                style={{ fontSize: "15px" }}
                                className={classes.sourceChainNumber}
                              >
                                <div className={classes.sourceChainTokenIcon}>
                                  {
                                    <Avatar
                                      radius={"xl"}
                                      src={bestRoute?.dstChain.tokenOut.icon}
                                      size={28}
                                    />
                                  }
                                </div>
                                <div
                                  className={classes.sourceChainTokenNumber}
                                >
                                  {customToFixed(
                                    bestRoute?.dstChain.totalAmountOut,
                                  ) +
                                    " " +
                                    bestRoute?.dstChain.tokenOut.symbol}
                                </div>
                              </div>
                            </div>
                            <div className={classes.foldButtom}>
                              <IconArrowDownSimple color={theme.colors.foreground[6]} />
                            </div>
                          </div>
                        }
                        {dstFold && (
                          <div className={classes.routeCards}>
                            {bestRoute?.dstChain.route.map(
                              (item: any, index: number) => (
                                <div
                                  className={classes.routeCard}
                                  key={index}
                                >
                                  {item?.dexName !== "mixed" ? (
                                    <div className={classes.tokenName}>
                                      {item?.dexName && (
                                        <Avatar
                                          radius={"xl"}
                                          src={dexMap[item?.dexName]}
                                          size={18}
                                        />
                                      )}
                                      {item?.dexName
                                        ? item?.dexName
                                        : "DIRECT"}
                                    </div>
                                  ) : (
                                    <div className={classes.dexs}>
                                      <div className={classes.tokenName}>
                                        {
                                          <Avatar
                                            radius={"xl"}
                                            src={
                                              dexMap[item.extra[0].dexName]
                                            }
                                            size={18}
                                          />
                                        }
                                        {item.extra[0].dexName}
                                      </div>
                                      {item.extra[0].dexName !==
                                        item.extra[1].dexName && (
                                          <>
                                            and
                                            <div className={classes.tokenName}>
                                              {
                                                <Avatar
                                                  radius={"xl"}
                                                  src={
                                                    dexMap[
                                                    item.extra[1].dexName
                                                    ]
                                                  }
                                                  size={18}
                                                />
                                              }
                                              {item.extra[1].dexName}
                                            </div>
                                          </>
                                        )}
                                    </div>
                                  )}
                                  <div className={classes.topLeft}>
                                    <div
                                      className={classes.sourceChainNumber}
                                    >
                                      <div
                                        className={
                                          classes.sourceChainTokenIcon
                                        }
                                      >
                                        {
                                          <Avatar
                                            radius={"xl"}
                                            src={
                                              bestRoute?.dstChain.tokenIn.icon
                                            }
                                            size={24}
                                          />
                                        }
                                      </div>
                                      <div
                                        className={
                                          classes.sourceChainTokenNumber
                                        }
                                      >
                                        {customToFixed(item.amountIn) +
                                          " " +
                                          bestRoute?.dstChain.tokenIn.symbol}
                                      </div>
                                    </div>

                                    <img
                                      src={rightArrow}
                                      alt={"empty"}
                                      height={12}
                                      width={12}
                                    ></img>

                                    {item.path[1] && (
                                      <div
                                        className={classes.sourceChainNumber}
                                      >
                                        <div
                                          className={
                                            classes.sourceChainTokenIcon
                                          }
                                        >
                                          {
                                            <Avatar
                                              radius={"xl"}
                                              src={
                                                item.path[0]?.tokenOut?.icon
                                              }
                                              size={24}
                                            />
                                          }
                                        </div>
                                        {item.path[0]?.tokenOut?.symbol}
                                        <img
                                          src={rightArrow}
                                          alt={"empty"}
                                          height={12}
                                          width={12}
                                        ></img>
                                      </div>
                                    )}
                                    <div
                                      className={classes.sourceChainNumber}
                                    >
                                      <div
                                        className={
                                          classes.sourceChainTokenIcon
                                        }
                                      >
                                        {
                                          <Avatar
                                            radius={"xl"}
                                            src={
                                              bestRoute?.dstChain.tokenOut
                                                .icon
                                            }
                                            size={24}
                                          />
                                        }
                                      </div>
                                      <div
                                        className={
                                          classes.sourceChainTokenNumber
                                        }
                                      >
                                        {customToFixed(item.amountOut) +
                                          " " +
                                          bestRoute?.dstChain.tokenOut.symbol}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <Center>
              <UnstyledButton onClick={handleTapMore} variant={"light"}>
                {" "}
                <Flex align={"center"} gap={"xs"}>
                  <Text fz={14}>{t("more_route")}</Text>
                  <IconEye></IconEye>
                </Flex>{" "}
              </UnstyledButton>
            </Center>
          </Box>
        )}
      </Box>
    </ErrorBoundary>
    // </div>
  );
});

BestRouteCard.displayName = "SwiperSlide";

export default BestRouteCard;
