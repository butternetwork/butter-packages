"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateSwapData, RouteTxData, Route } from "@butternetwork/sdk";

export const getRouteTxData = createAsyncThunk<
  RouteTxData[] | null,
  { route: Route; slippage: string; toAddress: string; from: string }
>(
  "route/getRouteTxData",
  async ({ route: selectedRoute, slippage, toAddress, from }) => {
    return await generateSwapData({
      hash: (selectedRoute as Route).hash,
      slippage: `${Number(slippage) * 100}`,
      receiver: toAddress,
      from: from,
    });
  },
);

export default getRouteTxData;
