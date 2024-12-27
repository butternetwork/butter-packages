"use client";
import { createSelector } from "reselect";
import { memoize, memoizeWithArgs } from "proxy-memoize";
export const selectChains = memoize((state) => state.global.chains);
export const selectChainsMap = memoize((state) => state.global.chainsMap);
export const selectMetamaskChains = memoize((state) => state.global.metamaskChains);
export const selectChainById = memoizeWithArgs((state, chainId) => {
    const chainsMap = selectChainsMap(state);
    return chainsMap[chainId] || null;
});
export const selectChainLogoById = memoizeWithArgs((state, chainId) => {
    const chainsMap = selectChainsMap(state);
    return chainsMap[chainId]?.logoUri || null;
});
export const selectAllChainTokens = memoize((state) => state.global.tokensForChain);
export const selectTokensForNetwork = memoizeWithArgs((state, network) => {
    const tokensForChain = selectAllChainTokens(state);
    return tokensForChain[network] || [];
});
// export const selectTokensForNetwork = createSelector(
//     [
//         selectAllChainTokens,
//         (state, network: string) => network
//     ],
//     (tokensForChain, network) => tokensForChain[network] || []
// )
export const selectTokensNoMoreForNetwork = createSelector([
    (state) => state.global.tokensForChainNoMore,
    (_state, network) => network,
], (tokensForChainNoMore, network) => tokensForChainNoMore[network] || false);
export const selectTokensPageForNetwork = createSelector([
    (state) => state.global.tokensForChainPages,
    (_state, network) => network,
], (tokensForChainPages, network) => tokensForChainPages[network] || 1);
export const selectTokenByNetrokAndSymbol = memoizeWithArgs((state, network, symbol) => {
    const tokens = selectTokensForNetwork(state, network);
    return (tokens.find((item) => item.symbol.toLowerCase() === symbol.toLowerCase()) || null);
});
export const selectShowConfirmCard = memoize((state) => state.global.showConfirmCard);
