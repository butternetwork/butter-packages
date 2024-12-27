"use client";
import { useCallback, useState } from "react";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { useRouteTxData } from "../../store/route/hooks";
import { showSuccess } from "../../utils/notifications";
import { setShowConfirmCard } from "../../store/global/global-slice";
import { useAppDispatch } from "../../store/hooks";
import { executeRoute } from "@butternetwork/sdk";
const useSubmitTonBridge = ({ onComplete }) => {
    const route = useRouteTxData();
    const dispatch = useAppDispatch();
    const [tonConnectUI, _setOptions] = useTonConnectUI();
    const address = useTonAddress();
    const [bridging, setBridging] = useState(false);
    const submitBridge = useCallback(async () => {
        if (!address || !tonConnectUI || !route) {
            return;
        }
        try {
            setBridging(true);
            await executeRoute(route[0]);
            // const hash = await tonConnectUI.sendTransaction({
            //   network: CHAIN.MAINNET,
            //   validUntil: Math.floor(Date.now() / 1000) + 60,
            //   messages: [
            //     {
            //       address: route[0].to,
            //       amount: route[0].value,
            //       payload: route[0].data,
            //     },
            //   ],
            // });
            onComplete();
            showSuccess("Success!");
            dispatch(setShowConfirmCard(false));
            setBridging(false);
        }
        catch (e) {
            setBridging(false);
        }
    }, [address, dispatch, onComplete, route, tonConnectUI]);
    return {
        submitBridge,
        bridging,
    };
};
export default useSubmitTonBridge;
