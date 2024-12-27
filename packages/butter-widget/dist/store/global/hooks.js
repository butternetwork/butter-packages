"use client";
import { useAppSelector } from "../../store/hooks";
import { selectChainById, selectChainLogoById, selectChains, selectChainsMap, selectMetamaskChains, selectShowConfirmCard, selectTokensForNetwork, selectTokensNoMoreForNetwork, selectTokensPageForNetwork, } from "./selector";
export const useChainsSelector = () => {
    return useAppSelector(selectChains);
};
export const useMetamaskChains = () => {
    return useAppSelector(selectMetamaskChains);
};
export const useChainsMap = () => {
    return useAppSelector(selectChainsMap);
};
export const useChainById = (chainId) => {
    return useAppSelector((state) => selectChainById(state, chainId));
};
export const useChainLogoById = (chainId) => {
    return useAppSelector((state) => selectChainLogoById(state, chainId));
};
export const useTokensForNetwork = (network) => {
    return useAppSelector((state) => selectTokensForNetwork(state, network));
};
export const useTokenNoMoreForNetwork = (network) => {
    return useAppSelector((state) => selectTokensNoMoreForNetwork(state, network));
};
export const useTokensPageForNetwork = (network) => {
    return useAppSelector((state) => selectTokensPageForNetwork(state, network));
};
export const useTokenLoading = () => {
    return useAppSelector((state) => state.global.tokensLoading);
};
export const useShowConfirmCard = () => {
    return useAppSelector(selectShowConfirmCard);
};
