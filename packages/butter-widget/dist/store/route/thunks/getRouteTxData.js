"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateSwapData } from "@butternetwork/sdk";
export const getRouteTxData = createAsyncThunk("route/getRouteTxData", async ({ route: selectedRoute, slippage, toAddress, from }) => {
    return await generateSwapData({
        hash: selectedRoute.hash,
        slippage: `${Number(slippage) * 100}`,
        receiver: toAddress,
        from: from,
    });
});
export default getRouteTxData;
