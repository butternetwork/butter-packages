"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isIsomericChain } from "../../../lib/configs";
const getTokenBalance = createAsyncThunk("wallet/getFromTokenBalance", async ({ wallet, tokenAddress, decimals, chainId }) => {
    if (!wallet || !tokenAddress || !decimals) {
        return null;
    }
    const balance = await wallet.getBalances([{ address: tokenAddress, decimals }], !isIsomericChain(chainId) ? Number(chainId) : undefined);
    return {
        address: tokenAddress,
        balance: balance[0],
        chainId,
    };
});
export default getTokenBalance;
