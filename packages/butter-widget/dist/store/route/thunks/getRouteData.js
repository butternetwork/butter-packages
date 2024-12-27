"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRoutes } from "@butternetwork/sdk";
const getRouteData = createAsyncThunk("route/getRouteData", async ({ fromChainId, toChainId, amount, tokenInAddress, tokenOutAddress, slippage, signal, entrance, id, }) => {
    const res = await getRoutes({
        fromChainId,
        toChainId,
        amount,
        tokenInAddress,
        tokenOutAddress,
        type: "exactIn",
        slippage: Number(slippage) * 100 + "",
        entrance: entrance || "Butter+",
        abortSignal: signal,
    });
    return {
        data: res,
        id: id || 0,
    };
});
export default getRouteData;
