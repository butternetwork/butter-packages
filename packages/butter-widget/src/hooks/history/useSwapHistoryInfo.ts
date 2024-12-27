"use client";
import { useMemo } from "react";
import { fixToSix } from "../../utils/numbers";
import {
  SwapHistory,
  SwapHistoryChainItem,
  SwapHistoryDetail,
  SwapHistoryTokenItem,
} from "@butternetwork/sdk";

interface HistoryListItemStepItem {
  token?: SwapHistoryTokenItem | null;
  chain: SwapHistoryChainItem;
}

export const useSwapHistoryInfo = ({ data }: { data: SwapHistory }) => {
  const steps = useMemo(() => {
    let steps: HistoryListItemStepItem[] = [];
    if (data.sourceChain) {
      steps.push({
        token: data.sourceToken,
        chain: data.sourceChain,
      });
    }
    if (data.relayerChain) {
      steps.push({
        token: data.bridgeTokenDict,
        chain: data.relayerChain,
      });
    }
    if (data.destinationChain) {
      steps.push({
        token: data.receiveTokenDict,
        chain: data.destinationChain,
      });
    }
    return steps;
  }, [data]);
  return {
    steps,
  };
};

interface HistoryDetailStep {
  hash?: string | null;
  token?: SwapHistoryTokenItem | null;
  chain?: SwapHistoryChainItem | null;
  step: string;
}

// interface FromToItem {
//   token: SwapHistoryTokenItem | null;
//   chain: SwapHistoryChainItem | null;
//   amount: string;
//   hash: string;
// }

export const useSwapDetailSteps = ({
  data,
}: {
  data: SwapHistoryDetail | null | undefined;
}) => {
  const steps = useMemo(() => {
    let _steps: HistoryDetailStep[] = [];
    if (data) {
      if (data.fromChain) {
        _steps.push({
          hash: data.sourceHash,
          token: data.sourceToken,
          chain: data.fromChain,
          step:
            fixToSix(data.amount) +
            " " +
            (data.sourceToken?.symbol || "") +
            " for " +
            fixToSix(data.bridgeAmount) +
            " " +
            (data.bridgeToken?.symbol || ""),
        });
      }
      if (data.relayerChain) {
        _steps.push({
          hash: data.relayerHash,
          chain: data.relayerChain,
          step:
            fixToSix(data.bridgeAmount) +
            " " +
            (data?.bridgeToken?.symbol || "") +
            " for " +
            (data.receiveToken?.symbol
              ? fixToSix(data?.receiveAmount)
              : "...") +
            " " +
            (data.receiveToken?.symbol || ""),
        });
      }

      if (data.toChain) {
        _steps.push({
          hash: data.toHash,
          token: data.receiveToken,
          chain: data.toChain,
          step: data.receiveToken?.symbol
            ? fixToSix(data.receiveAmount) +
            " " +
            (data.receiveToken?.symbol || "") +
            " for " +
            fixToSix(data.inAmount) +
            " " +
            (data.receiveToken?.symbol || "")
            : "",
        });
      }
    }

    return _steps;
  }, [data]);

  const { fromData, toData } = useMemo(() => {
    if (!data) {
      return {
        fromData: null,
        toData: null,
      };
    }
    const from = {
      token: data.sourceToken,
      chain: data.fromChain,
      amount: fixToSix(data.amount || 0) + "",
      hash: data.sourceHash,
      address: data.sourceAddress,
    };
    const to = {
      token: data.receiveToken,
      chain: data.toChain,
      amount: fixToSix(data.receiveAmount || 0) + "",
      hash: data.toHash,
      address: data.toAddress,
    };
    return {
      fromData: from,
      toData: to,
    };
  }, [data]);

  return {
    steps,
    fromData,
    toData,
  };
};
