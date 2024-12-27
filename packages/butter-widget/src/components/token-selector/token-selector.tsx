"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  List,
  Loader,
  Modal,
  Space,
  Text,
  TextInput,
  Image
} from "@mantine/core";

import {
  useTokenSelectorModalStyles,
  useTokenSelectorStyles,
} from "./styles";
import IconSearch from "../icons/icon-search";
import {
  ChangeEvent,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import MagicButton from "../magic-button";
import { TokenSelectorProps } from "./types";
import {
  useDebouncedValue,
  useIntersection,
} from "@mantine/hooks";
import type { ChainTokenSelectedItem, TokenItem } from "../../utils/api/types";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";
import {
  useNetwork,
  useSwitchNetwork,
  useWalletClient,
} from "wagmi";
import { useTranslation } from "react-i18next";
import {
  useChainsSelector,
  useTokenNoMoreForNetwork,
  useTokensForNetwork,
  useTokensPageForNetwork,
} from "../../store/global/hooks";
import {
  getTokensForChain,
  setTokensNoMoreForNetwork,
} from "../../store/global/global-slice";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
import { getWalletNameForChainId } from "../../lib/configs";
import useWallets from "../../lib/wallets/useWallets";

// const TOKEN_PAGE_SIZE = 50;

const MAPO_CHAIN_ID = 22776;

const TokenItem = forwardRef(
  (
    {
      onSelected,
      index,
      currentSelected,
      item,
      chainId,
    }: {
      currentSelected: ChainTokenSelectedItem | null;
      item: TokenItem;
      index: number;
      onSelected: (token: TokenItem) => void;
      chainId: number;
    },
    ref: any,
  ) => {
    const { classes } = useTokenSelectorStyles();
    const { data: signer } = useWalletClient();
    const { switchNetworkAsync } = useSwitchNetwork();
    const { chain } = useNetwork();
    const showButton = useMemo(() => {
      return chainId === MAPO_CHAIN_ID;
    }, [chainId]);
    const watchAsset = async () => {
      if (chain?.id !== MAPO_CHAIN_ID) {
        switchNetworkAsync && (await switchNetworkAsync(MAPO_CHAIN_ID));
      }
      if (signer) {
        try {
          await signer.watchAsset({
            type: "ERC20",
            options: {
              address: item.address,
              symbol: item.symbol,
              decimals: item.decimals,
              image: item.image,
            },
          });
        } catch (e: any) { }
      }
    };
    return (
      <List.Item
        ref={ref}
        key={index}
        className={`${classes.tokenItem}
            ${currentSelected?.token?.address === item.address ? "selected" : ""}`}
        onClick={() => {
          onSelected(item);
        }}
      >
        <Flex align={"center"} justify={"space-between"}>
          <Flex align={"stretch"} gap={"sm"}>
            <Image
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
              alt={""}
              width={30}
              height={30}
              fit={"contain"}
              src={item?.image}
            ></Image>
            <Flex direction={"column"} align={"flex-start"}>
              <Text lh={1.2} fz={14} fw={700}>
                {item.symbol}
              </Text>
              <Text lh={1.2} fz={12} fw={500} c={"opw.3"}>
                {item?.name}
              </Text>
            </Flex>
          </Flex>
          <Flex align={"center"} gap={"sm"}>
            <Text fz={14}>
              {Number(item?.balance) === 0 ? "" : item?.balance}
            </Text>
            {showButton && (
              <Button
                variant={"outline"}
                c={"primary.6"}
                size={"xs"}
                onClick={(e) => {
                  e.stopPropagation();
                  watchAsset();
                }}
              >
                Add to Wallet
              </Button>
            )}
          </Flex>
        </Flex>
      </List.Item>
    );
  },
);

TokenItem.displayName = "TokenItem";

const TokenSelector = ({
  show,
  onClose,
  onSelected,
  position,
}: TokenSelectorProps) => {
  // const { height, width } = useViewportSize();
  const { classes } = useTokenSelectorStyles();
  const [addressValue, setAddressValue] = useState("");
  const [debouncedFilter] = useDebouncedValue(addressValue, 1000);
  const { wallets } = useWallets();
  // const abortController = useRef<AbortController>();

  const from = useAppSelector((state: RootState) => state.routes.from);
  const to = useAppSelector((state: RootState) => state.routes.to);
  const currentSelected = useMemo(() => {
    return position === "from" ? from : to;
  }, [position, from, to]);
  const chains = useChainsSelector();
  // const [tokens, setTokens] = useState<TokenItem[]>([]);
  const dispatch = useAppDispatch();
  const [selectedChain, setSelectedChain] = useState(0);

  const network = useMemo(() => {
    return chains[selectedChain].key;
  }, [selectedChain, chains]);

  const currentPage = useTokensPageForNetwork(network);
  const currentTokens = useTokensForNetwork(network);
  const tokensNoMore = useTokenNoMoreForNetwork(network);
  // const loading = useTokenLoading();

  const currentPromise = useRef<any>(null);

  useEffect(() => {
    if (!show) {
      setAddressValue("");
    }
  }, [show]);

  const tokenListContainerRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: tokenListContainerRef.current,
    threshold: 1,
  });
  const loaderVisible = !!entry?.isIntersecting;
  const loadToken = useCallback(
    async (page: number) => {
      if (tokensNoMore && page !== 1) {
        return;
      }
      currentPromise.current = dispatch(
        getTokensForChain({
          network: chains[selectedChain].key,
          page: page,
          chainId: chains[selectedChain].chainId,
          wallet:
            wallets.find(
              (item) =>
                item.providerName ===
                getWalletNameForChainId(chains[selectedChain].chainId),
            ) || null,
          symbol: debouncedFilter,
        }),
      );
    },
    [chains, debouncedFilter, dispatch, wallets, selectedChain, tokensNoMore],
  );

  useEffect(() => {
    if (loaderVisible && !tokensNoMore) {
      loadToken(currentPage + 1);
    }
  }, [loaderVisible]);

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressValue(e.target.value);
  };
  const handleTapChain = (index: number) => {
    setSelectedChain(index);
  };

  useEffect(() => {
    if (currentSelected?.chain) {
      setSelectedChain(
        chains.findIndex((item: any) => item.key === currentSelected.chain?.key),
      );
    }
  }, [currentSelected]);

  useEffect(() => {
    // tokenPage.current = 1;
    // setTokens([]);
    // setTokenNoMore(false);
    // if (abortController.current) {
    //     abortController.current?.abort();
    // }
    if (currentPromise.current) {
      currentPromise.current.abort();
    }
    console.log(debouncedFilter, "debounced");
    dispatch(
      setTokensNoMoreForNetwork({
        network,
        noMore: false,
      }),
    );
    setTimeout(() => {
      loadToken(1);
    }, 200);
  }, [debouncedFilter, network]);

  const handleSelectToken = (token: TokenItem) => {
    onSelected(chains[selectedChain], token);
  };

  const { t } = useTranslation();

  const { classes: modalClasses } = useTokenSelectorModalStyles();

  const { isLargerOrEqual: md } = useBreakpointsUp({ breakpoint: "md" });

  return (
    <Modal
      centered={true}
      opened={show}
      onClose={onClose}
      classNames={modalClasses}
      title={t("select_token")}
      fullScreen={!md}
      size={"xl"}
    >
      <Box className={classes.root}>
        <Box className={classes.chainBox}>
          <TextInput
            className={classes.inputBox}
            variant={"filled"}
            radius={"xl"}
            placeholder={t("search_token")}
            sx={{
              input: {
                background: "rgba(255,255,255, 0.05)",
              },
            }}
            leftSection={<IconSearch />}
            onChange={handleAddressChange}
            value={addressValue}
          ></TextInput>
          <Space h={10}></Space>
          <Flex
            align={"center"}
            wrap={"wrap"}
            gap={"xs"}
            className={classes.chainList}
          >
            {chains.map((item, index) => (
              <div key={index}>
                {item.isBlock == 0 && (
                  <MagicButton
                    key={index}
                    width={"auto"}
                    height={"35px"}
                    justifyContent={"flex-start"}
                    radius={"35px"}
                    onClick={() => {
                      handleTapChain(index);
                    }}
                    selected={selectedChain === index}
                  >
                    <Flex align={"center"} gap={4} px={4}>
                      <Image
                        style={{ borderRadius: "50%" }}
                        alt={""}
                        width={30}
                        height={30}
                        src={item.logoUri}
                      ></Image>
                      <Text fz={14} fw={600}>
                        {item.name}
                      </Text>
                    </Flex>
                  </MagicButton>
                )}
              </div>
            ))}
          </Flex>
        </Box>
        <Space h={10}></Space>
        <List
          ref={tokenListContainerRef}
          listStyleType={"none"}
          className={classes.tokenListBox}
          spacing={0}
          styles={{
            item: {
              display: "flex",
              alignItems: "center",
            },
            itemWrapper: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
            },
          }}
        >
          {currentTokens.map((item, index) => (
            <TokenItem
              chainId={Number(chains[selectedChain].chainId)}
              ref={index === currentTokens.length - 1 ? ref : null}
              currentSelected={currentSelected}
              item={item}
              index={index}
              onSelected={handleSelectToken}
              key={index}
            ></TokenItem>
          ))}
          {!tokensNoMore && (
            <List.Item
              styles={{
                itemWrapper: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <Center w={"100%"} my={14}>
                <Loader size={25}></Loader>
              </Center>
            </List.Item>
          )}
        </List>
        <Space h={10}></Space>
      </Box>
    </Modal>
  );
};

export default TokenSelector;
