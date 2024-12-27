"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Center, Flex, List, Loader, Modal, Space, Text, TextInput, Image } from "@mantine/core";
import { useTokenSelectorModalStyles, useTokenSelectorStyles, } from "./styles";
import IconSearch from "../icons/icon-search";
import { forwardRef, useCallback, useEffect, useMemo, useRef, useState, } from "react";
import MagicButton from "../magic-button";
import { useDebouncedValue, useIntersection, } from "@mantine/hooks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNetwork, useSwitchNetwork, useWalletClient, } from "wagmi";
import { useTranslation } from "react-i18next";
import { useChainsSelector, useTokenNoMoreForNetwork, useTokensForNetwork, useTokensPageForNetwork, } from "../../store/global/hooks";
import { getTokensForChain, setTokensNoMoreForNetwork, } from "../../store/global/global-slice";
import useBreakpointsUp from "../../hooks/useBreakpointsUp";
import { getWalletNameForChainId } from "../../lib/configs";
import useWallets from "../../lib/wallets/useWallets";
// const TOKEN_PAGE_SIZE = 50;
const MAPO_CHAIN_ID = 22776;
const TokenItem = forwardRef(({ onSelected, index, currentSelected, item, chainId, }, ref) => {
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
            }
            catch (e) { }
        }
    };
    return (_jsx(List.Item, { ref: ref, className: `${classes.tokenItem}
            ${currentSelected?.token?.address === item.address ? "selected" : ""}`, onClick: () => {
            onSelected(item);
        }, children: _jsxs(Flex, { align: "center", justify: "space-between", children: [_jsxs(Flex, { align: "stretch", gap: "sm", children: [_jsx(Image, { style: {
                                borderRadius: "50%",
                                width: "30px",
                                height: "30px",
                            }, alt: "", width: 30, height: 30, fit: "contain", src: item?.image }), _jsxs(Flex, { direction: "column", align: "flex-start", children: [_jsx(Text, { lh: 1.2, fz: 14, fw: 700, children: item.symbol }), _jsx(Text, { lh: 1.2, fz: 12, fw: 500, c: "opw.3", children: item?.name })] })] }), _jsxs(Flex, { align: "center", gap: "sm", children: [_jsx(Text, { fz: 14, children: Number(item?.balance) === 0 ? "" : item?.balance }), showButton && (_jsx(Button, { variant: "outline", c: "primary.6", size: "xs", onClick: (e) => {
                                e.stopPropagation();
                                watchAsset();
                            }, children: "Add to Wallet" }))] })] }) }, index));
});
TokenItem.displayName = "TokenItem";
const TokenSelector = ({ show, onClose, onSelected, position, }) => {
    // const { height, width } = useViewportSize();
    const { classes } = useTokenSelectorStyles();
    const [addressValue, setAddressValue] = useState("");
    const [debouncedFilter] = useDebouncedValue(addressValue, 1000);
    const { wallets } = useWallets();
    // const abortController = useRef<AbortController>();
    const from = useAppSelector((state) => state.routes.from);
    const to = useAppSelector((state) => state.routes.to);
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
    const currentPromise = useRef(null);
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
    const loadToken = useCallback(async (page) => {
        if (tokensNoMore && page !== 1) {
            return;
        }
        currentPromise.current = dispatch(getTokensForChain({
            network: chains[selectedChain].key,
            page: page,
            chainId: chains[selectedChain].chainId,
            wallet: wallets.find((item) => item.providerName ===
                getWalletNameForChainId(chains[selectedChain].chainId)) || null,
            symbol: debouncedFilter,
        }));
    }, [chains, debouncedFilter, dispatch, wallets, selectedChain, tokensNoMore]);
    useEffect(() => {
        if (loaderVisible && !tokensNoMore) {
            loadToken(currentPage + 1);
        }
    }, [loaderVisible]);
    const handleAddressChange = (e) => {
        setAddressValue(e.target.value);
    };
    const handleTapChain = (index) => {
        setSelectedChain(index);
    };
    useEffect(() => {
        if (currentSelected?.chain) {
            setSelectedChain(chains.findIndex((item) => item.key === currentSelected.chain?.key));
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
        dispatch(setTokensNoMoreForNetwork({
            network,
            noMore: false,
        }));
        setTimeout(() => {
            loadToken(1);
        }, 200);
    }, [debouncedFilter, network]);
    const handleSelectToken = (token) => {
        onSelected(chains[selectedChain], token);
    };
    const { t } = useTranslation();
    const { classes: modalClasses } = useTokenSelectorModalStyles();
    const { isLargerOrEqual: md } = useBreakpointsUp({ breakpoint: "md" });
    return (_jsx(Modal, { centered: true, opened: show, onClose: onClose, classNames: modalClasses, title: t("select_token"), fullScreen: !md, size: "xl", children: _jsxs(Box, { className: classes.root, children: [_jsxs(Box, { className: classes.chainBox, children: [_jsx(TextInput, { className: classes.inputBox, variant: "filled", radius: "xl", placeholder: t("search_token"), sx: {
                                input: {
                                    background: "rgba(255,255,255, 0.05)",
                                },
                            }, leftSection: _jsx(IconSearch, {}), onChange: handleAddressChange, value: addressValue }), _jsx(Space, { h: 10 }), _jsx(Flex, { align: "center", wrap: "wrap", gap: "xs", className: classes.chainList, children: chains.map((item, index) => (_jsx("div", { children: item.isBlock == 0 && (_jsx(MagicButton, { width: "auto", height: "35px", justifyContent: "flex-start", radius: "35px", onClick: () => {
                                        handleTapChain(index);
                                    }, selected: selectedChain === index, children: _jsxs(Flex, { align: "center", gap: 4, px: 4, children: [_jsx(Image, { style: { borderRadius: "50%" }, alt: "", width: 30, height: 30, src: item.logoUri }), _jsx(Text, { fz: 14, fw: 600, children: item.name })] }) }, index)) }, index))) })] }), _jsx(Space, { h: 10 }), _jsxs(List, { ref: tokenListContainerRef, listStyleType: "none", className: classes.tokenListBox, spacing: 0, styles: {
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
                    }, children: [currentTokens.map((item, index) => (_jsx(TokenItem, { chainId: Number(chains[selectedChain].chainId), ref: index === currentTokens.length - 1 ? ref : null, currentSelected: currentSelected, item: item, index: index, onSelected: handleSelectToken }, index))), !tokensNoMore && (_jsx(List.Item, { styles: {
                                itemWrapper: {
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                },
                            }, children: _jsx(Center, { w: "100%", my: 14, children: _jsx(Loader, { size: 25 }) }) }))] }), _jsx(Space, { h: 10 })] }) }));
};
export default TokenSelector;
