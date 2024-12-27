"use client";
import { createSelector } from "reselect";
import { memoize } from "proxy-memoize";
export const selectFrom = memoize((state) => state.routes.from);
export const selectTo = memoize((state) => state.routes.to);
export const selectSlippage = memoize((state) => state.routes.slippage);
export const selectAmount = memoize((state) => state.routes.amount);
export const selectInputAddress = memoize((state) => state.routes.inputAddress);
export const selectShowAddressEditor = memoize((state) => state.routes.showAddressEditor);
export const selectShowSetting = memoize((state) => state.routes.showSetting);
export const selectIsSwap = memoize((state) => {
    const from = selectFrom(state);
    const to = selectTo(state);
    return from?.chain?.chainId === to?.chain?.chainId;
});
export const selectUserHistory = createSelector([
    (_state, account) => account,
    (state) => state.routes.userHistory,
], (account, history) => history[account] || []);
export const selectUserHistoryTotalCount = (state) => state.routes.userHistoryTotal;
export const selectUserHistoryForPage = createSelector([
    (_state, page, size, account) => ({
        page,
        size,
        account,
    }),
    (state) => state.routes.userHistory,
    selectUserHistoryTotalCount,
], ({ page, size, account }, history, total) => {
    const start = (page - 1) * size;
    let end = page * size;
    const userHistory = history[account] || [];
    if (start > userHistory.length)
        return {
            list: [],
            total: total[account] || 0,
        };
    if (end > userHistory.length) {
        end = userHistory.length;
    }
    const list = userHistory.slice(start, end) || [];
    return {
        list,
        total: total[account] || 0,
    };
});
