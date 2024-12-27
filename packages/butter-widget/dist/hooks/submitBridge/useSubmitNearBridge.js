"use client";
import { useCallback, useMemo, useState } from "react";
import useWallets from "../../lib/wallets/useWallets";
import { useNearWalletSelector } from "../../lib/providers/NearProvider";
import { useRouteTxData } from "../../store/route/hooks";
import { executeRoute } from "@butternetwork/sdk";
const useSubmitNearBridge = ({}) => {
    const { wallets } = useWallets();
    const route = useRouteTxData();
    const accountId = useMemo(() => {
        return wallets.find((wallet) => wallet.providerName === "near")?.address;
    }, [wallets]);
    const [bridging, setBridging] = useState(false);
    const { selector } = useNearWalletSelector();
    const submitBridge = useCallback(async () => {
        if (!accountId || !selector || !route || route.length === 0) {
            return;
        }
        try {
            setBridging(true);
            await executeRoute(route);
            // const to = route[0].to;
            // const actions = route.map((item) => {
            //   return {
            //     type: "FunctionCall",
            //     params: {
            //       methodName: item.method,
            //       args: JSON.parse(item.data),
            //       gas: "300000000000000",
            //       deposit: item.value || "0",
            //     },
            //   } as FunctionCallAction;
            // });
            // await selector.wallet().then((wallet) => {
            //   wallet.signAndSendTransaction({
            //     receiverId: to,
            //     actions: actions,
            //   });
            // });
            setBridging(false);
        }
        catch (e) {
            setBridging(false);
        }
    }, [accountId, route, selector]);
    return {
        submitBridge,
        bridging,
    };
};
export default useSubmitNearBridge;
