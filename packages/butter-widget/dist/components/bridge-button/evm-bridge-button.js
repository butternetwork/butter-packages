"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import useEvmAllowance from "../../hooks/allowance/useEvmAllowance";
import { useRouteTxData } from "../../store/route/hooks";
import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { useNetwork, usePublicClient, useWalletClient } from "wagmi";
import { showError, showSuccess } from "../../utils/notifications";
import { useAmount, useAppDispatch, useAppSelector, useFrom, } from "../../store/hooks";
import useFromWallet from "../../hooks/useFromWallet";
import { setShowConfirmCard } from "../../store/global/global-slice";
import { setCurrentHistoryData } from "../../store/route/routes-slice";
import useToAddress from "../../hooks/useToAddress";
import { executeRoute } from "@butternetwork/sdk";
import { parseUnits } from "viem";
const EvmBridgeButton = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const routeRxData = useRouteTxData();
    const selectedRoute = useAppSelector((state) => state.routes.selectedRoute);
    const { chain } = useNetwork();
    const fromWallet = useFromWallet();
    const toAddress = useToAddress();
    const { needApprove, approve } = useEvmAllowance({ data: routeRxData || [] });
    const { data: signer } = useWalletClient();
    const [loading, setLoading] = useState(false);
    const [approving, setApproving] = useState(false);
    const amount = useAmount();
    const from = useFrom();
    const handleTapApprove = async () => {
        try {
            setApproving(true);
            // if (isTron(Number(from?.chain?.chainId))) {
            //     const res = await tronConnector.approve(from?.token?.address as string, ethers.utils.parseUnits(amount, from?.token?.decimals).toString())
            //
            // } else {
            await approve(parseUnits(amount, from?.token?.decimals || 18).toString());
            // }
            setApproving(false);
            // onClose();
        }
        catch (e) {
            // showError(e.message);
            setApproving(false);
        }
    };
    const publicClient = usePublicClient({
        chainId: Number(from?.chain?.chainId) || 0,
    });
    const handleTapConfirm = useCallback(async () => {
        // if (isNear(Number(from?.chain?.chainId))) {
        //     handleBridgeNear();
        //     return;
        // } else if (isTron(Number(from?.chain?.chainId))) {
        //     setLoading(true);
        //     await handleBridgeTron()
        //     setLoading(false);
        //
        //     return;
        // }
        if (!routeRxData || !fromWallet)
            return;
        try {
            setLoading(true);
            const hash = await executeRoute(routeRxData[0]);
            // const request = await prepareSendTransaction({
            //   to: routeRxData[0].to as `0x${string}`,
            //   data: routeRxData[0].data as `0x${string}`,
            //   value: BigInt(routeRxData[0].value || 0),
            //   chainId: Number(routeRxData[0].chainId),
            // });
            // const hash = await signer?.sendTransaction({
            //   ...(request as any),
            //   gas: request.gas ? (request.gas * BigInt(15)) / BigInt(10) : undefined,
            //   chain: chain,
            // });
            // if (hash) {
            //   await sleep(2000);
            //   await publicClient.waitForTransactionReceipt({
            //     hash: hash as `0x${string}`,
            //     pollingInterval: 1000,
            //     timeout: 50000,
            //     confirmations: 1,
            //   });
            // }
            showSuccess("Success!");
            dispatch(setShowConfirmCard(false));
            dispatch(setCurrentHistoryData({
                txHash: hash,
                fromAddress: fromWallet?.address,
                toAddress: toAddress,
                route: selectedRoute,
                timestamp: new Date().getTime(),
            }));
            setLoading(false);
        }
        catch (e) {
            showError(e.message);
            setLoading(false);
        }
    }, [
        chain,
        fromWallet,
        publicClient,
        routeRxData,
        selectedRoute,
        signer,
        toAddress,
    ]);
    if (needApprove) {
        return (_jsx(Button, { loading: approving, fz: 18, c: "black", h: 42, onClick: handleTapApprove, children: t("approve") }));
    }
    return (_jsx(Button, { loading: loading, onClick: handleTapConfirm, fz: 18, c: "black", h: 42, children: t("confirm") }));
};
export default EvmBridgeButton;
