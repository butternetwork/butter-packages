import { useBTCProvider } from "@particle-network/btc-connectkit";
import { useCallback, useState } from "react";
import { showError } from "../../utils/notifications";
// import {saveHistory} from "@/utils/storage";
import useToAddress from "../../hooks/useToAddress";
import { useAppDispatch, useFrom, useTo } from "../../store/hooks";
import { useRouteTxData } from "../../store/route/hooks";
import { setShowConfirmCard } from "../../store/global/global-slice";

const useSubmitBtcBridge = ({ onComplete }: { onComplete: VoidFunction }) => {
    const { sendBitcoin } = useBTCProvider();
    const from = useFrom();
    const to = useTo();
    const route = useRouteTxData();
    const toAddress = useToAddress();
    const [bridging, setBridging] = useState(false);
    const dispatch = useAppDispatch();
    const submitBridge = useCallback(async () => {
        if (!route?.[0].to
            || !route?.[0].value
            || !from
            || !to
        ) {
            return;
        }
        try {
            setBridging(true);
            await sendBitcoin(
                route?.[0].to,
                Number(route?.[0].value)
            )
            setBridging(false);
            dispatch(setShowConfirmCard(false));
            onComplete();
        } catch (e: any) {
            setBridging(false);
            showError(e.message);
        }
    }, [from, to, onComplete, route, sendBitcoin, toAddress, dispatch])
    return {
        submitBridge,
        bridging
    }
}

export default useSubmitBtcBridge;
