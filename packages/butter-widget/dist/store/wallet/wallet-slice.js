"use client";
import { createSlice } from "@reduxjs/toolkit";
import getTokenBalance from "./thunks/getTokenBalance";
export const USER_TOKEN_KEY = "BT_USER_TOKEN";
const initialState = {
    tokenBalances: {},
    userToken: null,
};
export const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        setUserToken: (state, action) => {
            if (action.payload === null) {
                localStorage.removeItem(USER_TOKEN_KEY);
                state.userToken = null;
                return;
            }
            localStorage.setItem(USER_TOKEN_KEY, JSON.stringify(action.payload));
            state.userToken = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTokenBalance.fulfilled, (state, action) => {
            if (!action.payload) {
                return;
            }
            state.tokenBalances = {
                ...state.tokenBalances,
                [action.payload.chainId]: {
                    ...state.tokenBalances[action.payload.chainId],
                    [action.payload.address]: action.payload.balance,
                },
            };
        });
        builder.addCase(getTokenBalance.rejected, (_state, action) => {
            console.log(action.error, "error");
        });
    },
});
export const { setUserToken } = walletSlice.actions;
export default walletSlice.reducer;
