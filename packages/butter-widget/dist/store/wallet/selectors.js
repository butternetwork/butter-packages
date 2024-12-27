"use client";
import { memoize, memoizeWithArgs } from "proxy-memoize";
export const selectTokenBalances = memoize((state) => state.wallet.tokenBalances);
export const selectTokenBalance = memoizeWithArgs((state, address, chainId) => {
    const balances = selectTokenBalances(state);
    return balances[chainId]?.[address] || "0";
});
export const selectUserToken = memoize((state) => state.wallet.userToken);
