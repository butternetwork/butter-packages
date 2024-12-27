"use client";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "../store/hooks";
import {
  toggleShowExchangeModal,
  updateFrom,
  updateTo,
} from "../store/route/routes-slice";
import { useChainsMap } from "../store/global/hooks";
import { useAllQueryParams } from "./useNextQueryParam";
import { useStore } from "react-redux";
import { RootState } from "../store";
import { getTokensForNetwork, ResponseTokenItem } from "@butternetwork/sdk";

const findToken = async ({
  chain,
  symbol,
}: {
  chain: string;
  symbol: string;
}) => {
  const res = await getTokensForNetwork({
    network: chain,
    page: 1,
    size: 10,
    keyword: symbol,
  });
  // const res = await fetchTokens({
  //   network: chain,
  //   page: 1,
  //   size: 10,
  //   symbol: symbol,
  // });
  if (res.results) {
    return res.results.find(
      (item: any) => item.symbol.toLowerCase() === symbol.toLowerCase(),
    );
  }
  return null;
};

const useInitialParams = () => {
  const chainsMap = useChainsMap();
  const dispatch = useAppDispatch();
  const { from, to } = useAllQueryParams();
  const { fromChainId, fromTokenSymbol, toChainId, toTokenSymbol } =
    useMemo(() => {
      const fromArr = from ? (from as string).split(":") : [];
      const toArr = to ? (to as string).split(":") : [];
      return {
        fromChainId: fromArr[0],
        fromTokenSymbol: fromArr[1],
        toChainId: toArr[0],
        toTokenSymbol: toArr[1],
      };
    }, [from, to]);

  const store = useStore<RootState>();

  const loadInitialFrom = async () => {
    const chain = chainsMap[Number(fromChainId)];
    const fromTokensForChains =
      store.getState().global.tokensForChain[
      chainsMap[Number(fromChainId)]?.key
      ];

    let token: ResponseTokenItem | undefined | null = fromTokensForChains?.find(
      (item) => item.symbol.toLowerCase() === fromTokenSymbol.toLowerCase(),
    );
    if (!token) {
      token = await findToken({
        chain: chain.key,
        symbol: fromTokenSymbol as string,
      });
    }
    if (chain && token) {
      if (
        (chain?.chainId == "1" && token.symbol == "MAP") ||
        (chain?.chainId == "56" && token.symbol == "MAP")
      ) {
        dispatch(toggleShowExchangeModal(true));
      }
      dispatch(
        updateFrom({
          chain: chain,
          token: token,
        }),
      );
    }
  };

  const loadInitialTo = async () => {
    const chain = chainsMap[Number(toChainId)];
    const toTokensForChains =
      store.getState().global.tokensForChain[chainsMap[Number(toChainId)]?.key];
    let token: ResponseTokenItem | undefined | null = toTokensForChains?.find(
      (item) => item.symbol.toLowerCase() === toTokenSymbol.toLowerCase(),
    );
    if (!token) {
      token = await findToken({
        chain: chain.key,
        symbol: toTokenSymbol as string,
      });
    }
    if (chain && token) {
      dispatch(
        updateTo({
          chain: chain,
          token: token,
        }),
      );
    }
  };
  const updateCoin = async () => {
    if (!fromChainId && !toChainId) {
      dispatch(
        updateTo({
          chain: undefined,
          token: undefined,
        }),
      );
      dispatch(
        updateFrom({
          chain: undefined,
          token: undefined,
        }),
      );
    }
    if (!!fromChainId && !!fromTokenSymbol) {
      await loadInitialFrom();
    }
    if (!!toChainId && !!toTokenSymbol) {
      await loadInitialTo();
    }
  };

  useEffect(() => {
    updateCoin();
  }, [fromChainId, fromTokenSymbol, toChainId, toTokenSymbol]);
};

export default useInitialParams;
