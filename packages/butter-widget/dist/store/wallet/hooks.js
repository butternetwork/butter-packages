"use client";
import { useAppSelector } from "../hooks";
import { selectTokenBalance, selectTokenBalances, selectUserToken, } from "./selectors";
export const useTokenBalances = () => {
    return useAppSelector(selectTokenBalances);
};
export const useTokenBalance = (token, chainId) => {
    return useAppSelector((state) => selectTokenBalance(state, token, chainId));
};
export const useUserToken = () => {
    return useAppSelector(selectUserToken);
};
