"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRoutes, Route } from "@butternetwork/sdk";

export type GetRouteDataProps = {
  fromChainId: string;
  toChainId: string;
  amount: string;
  tokenInAddress: string;
  tokenOutAddress: string;
  slippage: string;
  signal?: AbortSignal;
  id?: number;
  entrance: string;
};

const getRouteData = createAsyncThunk<
  {
    data: Route[];
    id: number;
  },
  GetRouteDataProps
>(
  "route/getRouteData",
  async ({
    fromChainId,
    toChainId,
    amount,
    tokenInAddress,
    tokenOutAddress,
    slippage,
    signal,
    entrance,
    id,
  }) => {
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
  },
);

export default getRouteData;
