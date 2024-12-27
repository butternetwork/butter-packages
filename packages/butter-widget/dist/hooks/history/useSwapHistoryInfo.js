"use client";
import { useMemo } from "react";
import { fixToSix } from "../../utils/numbers";
export const useSwapHistoryInfo = ({ data }) => {
    const steps = useMemo(() => {
        let steps = [];
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
// interface FromToItem {
//   token: SwapHistoryTokenItem | null;
//   chain: SwapHistoryChainItem | null;
//   amount: string;
//   hash: string;
// }
export const useSwapDetailSteps = ({ data, }) => {
    const steps = useMemo(() => {
        let _steps = [];
        if (data) {
            if (data.fromChain) {
                _steps.push({
                    hash: data.sourceHash,
                    token: data.sourceToken,
                    chain: data.fromChain,
                    step: fixToSix(data.amount) +
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
                    step: fixToSix(data.bridgeAmount) +
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
