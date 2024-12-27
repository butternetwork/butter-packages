"use client";
import {
  Accordion,
  ActionIcon,
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Loader,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useConfirmCardStyles } from "./styles";
import { gsap } from "gsap";
import { useCallback, useEffect, useMemo, useRef } from "react";
import {
  useAmount,
  useAppDispatch,
  useFrom,
  useIsSwap,
  useSlippage,
  useTo,
} from "../../../store/hooks";
import { Route } from "@butternetwork/sdk"
import { truncateAndTrimDecimals } from "../../../utils/numbers";
import { useNetwork } from "wagmi";
import useToAddress from "../../../hooks/useToAddress";
import { useTranslation } from "react-i18next";
import useFromWallet from "../../../hooks/useFromWallet";
import getRouteTxData from "../../../store/route/thunks/getRouteTxData";
import { useBestRoute, useLoadingRouteTxData } from "../../../store/route/hooks";
import useFromTokenBalance from "../../../hooks/useFromTokenBalance";
import IconCloseCircle from "../../../components/icons/icon-close-circle";
import BridgeButton from "../../../components/bridge-button";
import { useShowConfirmCard } from "../../../store/global/hooks";
import { setShowConfirmCard } from "../../../store/global/global-slice";
import { showError } from "../../../utils/notifications";
import { TON_CHAINID } from "../../../lib/configs";

const InfoContent = () => {
  const { classes } = useConfirmCardStyles({ show: true });

  const loadingData = useLoadingRouteTxData();
  const selectedRoute = useBestRoute();
  const toAddress = useToAddress();
  const from = useFrom();
  const to = useTo();

  const route = useMemo(() => {
    if (selectedRoute && selectedRoute !== "empty") {
      return selectedRoute as Route;
    }
    return null;
  }, [selectedRoute]);

  const exchangeRate = useMemo(() => {
    const fromAmount = route?.srcChain.totalAmountIn || "0";
    const toAmount = route?.dstChain
      ? route.dstChain.totalAmountOut
      : route?.srcChain.totalAmountOut || "0";
    return Number(toAmount) === 0 ? 0 : Number(toAmount) / Number(fromAmount);
  }, [
    route?.srcChain.totalAmountIn,
    route?.dstChain,
    route?.srcChain.totalAmountOut,
  ]);

  const theme = useMantineTheme();

  const { t } = useTranslation();

  if (loadingData) {
    return (
      <Box w={"100%"} h={300}>
        <Center w={"100%"}>
          <Loader></Loader>
        </Center>
      </Box>
    );
  }

  return (
    <Flex align={"stretch"} direction={"column"} gap={10}>
      {/*<Text fz={14} c={"opw.3"}>1 UNI = 0.7000 ETH</Text>*/}
      <Accordion
        variant="transparent"
        value={"0"}
        style={{
          [".mantine-Accordion-control"]: {
            backgroundColor: theme.colors.background1[6],
            borderRadius: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          },
          [".mantine-Accordion-item"]: {
            borderRadius: "10px",
            backgroundColor: theme.colors.background1[6],
          },
          [".mantine-Accordion-panel"]: {
            padding: "12px",
          },
          [".mantine-Accordion-content"]: {
            padding: "0 0 10px 0",
          },
        }}
      >
        <Accordion.Item value={"0"}>
          <Accordion.Panel>
            <Flex direction={"column"} align={"stretch"} gap={6} w={"100%"}>
              <Flex style={{ marginBottom: "12px" }} align={"center"} gap={4}>
                <Text fz={14} fw={600} c={"foreground.6"}>
                  1 {from?.token?.symbol} ={" "}
                  {truncateAndTrimDecimals(exchangeRate || 0, 6)}{" "}
                  {to?.token?.symbol}
                </Text>
              </Flex>
              <Flex align={"center"} w={"100%"} justify={"space-between"}>
                <Flex align={"center"} gap={4}>
                  <Text fz={13} c={"foreground1.6"}>
                    {t("fee")}
                  </Text>
                  {/* <Tooltip label={"service fee"}>
                                                        <ActionIcon>
                                                            <IconInfoPrimary></IconInfoPrimary>
                                                        </ActionIcon>
                                                    </Tooltip> */}
                </Flex>
                <Text fz={13} fw={500} c={"foreground1.6"}>
                  {truncateAndTrimDecimals(route?.bridgeFee.amount || 0, 6)}{" "}
                  {route?.bridgeFee.symbol}
                </Text>
              </Flex>
              <Flex align={"center"} w={"100%"} justify={"space-between"}>
                <Flex align={"center"} gap={4}>
                  <Text fz={13} c={"foreground1.6"} maw={"50%"}>
                    {t("orignal_gas")}
                  </Text>
                </Flex>
                <Text fz={13} fw={500} c={"foreground1.6"}>
                  {truncateAndTrimDecimals(Number(route?.gasFee.amount), 6)}{" "}
                  {route?.gasFee.symbol}
                </Text>
              </Flex>
              <Flex align={"center"} w={"100%"} justify={"space-between"}>
                <Flex align={"center"} gap={4}>
                  <Text fz={13} c={"foreground1.6"}>
                    Minimum received
                  </Text>
                </Flex>
                <Text fz={13} fw={500} c={"foreground1.6"}>
                  {truncateAndTrimDecimals(
                    Number(route?.minAmountOut.amount || 0),
                    6,
                  )}{" "}
                  {route?.minAmountOut.symbol}
                </Text>
              </Flex>
              <Flex align={"center"} w={"100%"} justify={"space-between"}>
                <Flex align={"center"} gap={4}>
                  <Text fz={13} c={"foreground1.6"}>
                    {t("estimate_time")}
                  </Text>
                </Flex>
                <Text fz={13} fw={500} c={"foreground1.6"}>
                  {Math.ceil((route?.timeEstimated || 120) / 60)} minutes
                </Text>
              </Flex>
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Flex
        align={"flex-start"}
        direction={"column"}
        className={classes.addressBox}
      >
        <Text fz={14} fw={700}>
          {t("receive_address")}:
        </Text>
        <Text
          fz={13}
          style={{
            wordBreak: "break-all",
          }}
        >
          {toAddress}
        </Text>
      </Flex>
    </Flex>
  );
};

const ConfirmCard = () => {
  const show = useShowConfirmCard();
  const { classes } = useConfirmCardStyles({ show });
  const rootBox = useRef(null);
  const contentBox = useRef(null);
  useEffect(() => {
    if (show) {
      const tl = gsap.timeline();
      tl.set(rootBox.current, {
        display: "block",
      });
      tl.to(contentBox.current, {
        translateY: "0",
        ease: "back.out(1.7)",
        duration: "0.45",
      });
    } else {
      const tl = gsap.timeline();
      tl.to(contentBox.current, {
        translateY: "-100%",
        duration: "0.3",
      });
      tl.set(rootBox.current, {
        display: "none",
      });
    }
  }, [show]);
  const dispatch = useAppDispatch();
  const fromWallet = useFromWallet();
  const selectedRoute = useBestRoute();
  const toAddress = useToAddress();
  const slippage = useSlippage();
  const from = useFrom();
  const to = useTo();
  const amount = useAmount();
  const { chain } = useNetwork();
  const balance = useFromTokenBalance();

  const slippage_ = useMemo(() => {
    if (
      from?.chain?.chainId === TON_CHAINID ||
      to?.chain?.chainId === TON_CHAINID
    ) {
      if (Number(slippage) < 3) {
        return "3";
      }
    }
    return slippage;
  }, [from?.chain?.chainId, to?.chain?.chainId, slippage]);

  const insufficientBalance = useMemo(() => {
    if (!balance) {
      return true;
    }
    if (!amount) {
      return false;
    }
    return Number(balance) < Number(amount);
  }, [balance, amount]);

  const onClose = useCallback(() => {
    dispatch(setShowConfirmCard(false));
  }, []);

  // const { insufficientBalance, needApprove, approve } = useFromBalance({ routeTxData: result })
  useEffect(() => {
    if (!selectedRoute || !fromWallet) {
      onClose();
    }
  }, [selectedRoute, fromWallet, onClose]);

  useEffect(() => {
    if (chain?.id !== Number(from?.chain?.chainId)) onClose();
  }, [chain?.id, from?.chain?.chainId]);

  const isSwap = useIsSwap();

  const route = useMemo(() => {
    if (selectedRoute && selectedRoute !== "empty") {
      return selectedRoute as Route;
    }
    return null;
  }, [selectedRoute]);

  useEffect(() => {
    if (!fromWallet || !route || !toAddress || !slippage_ || !show) return;
    dispatch(
      getRouteTxData({
        route: selectedRoute as Route,
        from: fromWallet.address,
        toAddress: toAddress,
        slippage: slippage_ + "",
      }),
    ).then((res) => {
      if ((res as any).error) {
        showError((res as any).error.message);
        onClose();
      }
    });
  }, [fromWallet, selectedRoute, show, slippage_, toAddress]);

  // const handleBridgeNear = async () => {
  //     if (result) {
  //         try {
  //             await nearConnector.bridgeToken({ data: result })
  //         } catch (e: any) {
  //         }
  //     }
  // }
  // const handleBridgeTron = async () => {
  //     if (result) {
  //         try {
  //             await tronConnector.bridgeToken({ data: result })
  //         } catch (e: any) {
  //         }
  //     }
  // }

  const totalAmountOut = useMemo(() => {
    if (route?.dstChain) {
      return route.dstChain.totalAmountOut;
    }
    if (route?.bridgeChain) {
      return route.bridgeChain.totalAmountOut;
    }
    return route?.srcChain.totalAmountOut;
  }, [route]);

  const { t } = useTranslation();
  const theme = useMantineTheme();
  return (
    <>
      <div className={classes.modalOverlay}></div>
      <Box className={classes.root} ref={rootBox}>
        <Box className={classes.content} ref={contentBox}>
          <Flex align={"center"} justify={"space-between"}>
            <Text fz={18} fw={700}>
              {t("confirm_swap")}
            </Text>
            <ActionIcon onClick={onClose} variant="transparent">
              <IconCloseCircle color={theme.colors.foreground[6]}></IconCloseCircle>
            </ActionIcon>
          </Flex>
          <Space h={20}></Space>
          <Flex direction={"column"} align={"stretch"} gap={10} w={"100%"}>
            <Flex
              align={"center"}
              justify={"space-between"}
              w={"100%"}
              className={classes.tokenBox}
            >
              <Text fz={18} fw={700}>
                {truncateAndTrimDecimals(
                  route?.srcChain.totalAmountIn || 0,
                  10,
                )}
              </Text>
              <Flex align={"center"} justify={"flex-end"} gap={4}>
                <Avatar src={route?.srcChain.tokenIn.icon} size={25}></Avatar>
                <Text fz={18} fw={600}>
                  {route?.srcChain.tokenIn.symbol}
                </Text>
              </Flex>
            </Flex>
            <Flex
              align={"center"}
              justify={"space-between"}
              w={"100%"}
              className={classes.tokenBox}
            >
              <Text fz={18} fw={700}>
                {truncateAndTrimDecimals(totalAmountOut || 0, 10)}
              </Text>
              <Flex align={"center"} justify={"flex-end"} gap={4}>
                <Avatar
                  src={
                    isSwap
                      ? route?.srcChain?.tokenOut.icon
                      : route?.dstChain?.tokenOut.icon
                  }
                  size={25}
                ></Avatar>
                <Text fz={18} fw={600}>
                  {isSwap
                    ? route?.srcChain.tokenOut.symbol
                    : route?.dstChain?.tokenOut.symbol}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Space h={20}></Space>
          <InfoContent></InfoContent>
          {insufficientBalance ? (
            <Button fz={18} c={"black"} h={42} disabled={true}>
              {t("insufficient_balance")}
            </Button>
          ) : (
            show && <BridgeButton></BridgeButton>
          )}
        </Box>
      </Box >
    </>
  );
};

ConfirmCard.displayName = "ConfirmCard";

export default ConfirmCard;
