"use client";
import { useDispatch, useSelector } from "react-redux";
import { selectAmount, selectFrom, selectInputAddress, selectIsSwap, selectShowAddressEditor, selectShowSetting, selectSlippage, selectTo, selectUserHistory, selectUserHistoryForPage, } from "./selectors";
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
export const useFrom = () => {
    return useAppSelector(selectFrom);
};
export const useTo = () => {
    return useAppSelector(selectTo);
};
export const useSlippage = () => {
    return useAppSelector(selectSlippage);
};
export const useAmount = () => {
    return useAppSelector(selectAmount);
};
export const useInputAddress = () => {
    return useAppSelector(selectInputAddress);
};
export const useIsSwap = () => {
    return useAppSelector(selectIsSwap);
};
export const useUserHistory = (account) => {
    return useAppSelector((state) => selectUserHistory(state, account));
};
export const useUserHistoryLoading = () => {
    return useAppSelector((state) => state.routes.historyLoading);
};
export const useUserHistoryForPage = (page, size, account) => {
    return useAppSelector((state) => selectUserHistoryForPage(state, page, size, account));
};
export const useShowAddressEditor = () => {
    return useAppSelector(selectShowAddressEditor);
};
export const useShowSetting = () => {
    return useAppSelector(selectShowSetting);
};
