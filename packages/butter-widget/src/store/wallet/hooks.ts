"use client";
import { useAppSelector } from "../hooks";
import {
  selectTokenBalance,
  selectTokenBalances,
  selectUserToken,
} from "./selectors";
import { RootState } from "../../store";

export const useTokenBalances = () => {
  return useAppSelector(selectTokenBalances);
};

export const useTokenBalance = (token: string, chainId: string) => {
  return useAppSelector((state: RootState) =>
    selectTokenBalance(state, token, chainId),
  );
};

export const useUserToken = () => {
  return useAppSelector(selectUserToken);
};
