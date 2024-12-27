"use client";
import { useInputAddress, useTo } from "../store/hooks";
import { useMemo } from "react";
import useToWallet from "./useToWallet";
import { getWalletNameForChainId } from "../lib/configs";
import { isValidAddress } from "../lib/wallets/helpers";
const useToAddress = () => {
    const inputToAddress = useInputAddress();
    const toWallet = useToWallet();
    const to = useTo();
    const walletName = useMemo(() => {
        return getWalletNameForChainId(to?.chain?.chainId);
    }, [to?.chain?.chainId]);
    return useMemo(() => {
        if (inputToAddress &&
            isValidAddress({
                address: inputToAddress,
                walletName,
            })) {
            return inputToAddress;
        }
        return toWallet?.address;
    }, [inputToAddress, walletName, toWallet?.address]);
};
export default useToAddress;
