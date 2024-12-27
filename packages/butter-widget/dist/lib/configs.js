"use client";
import { WalletName } from "./types";
const NEAR_CHAINID = "1360100178526209";
const SOLANA_CHAINID = "1360108768460801";
const TRON_CHAINID = "728126428";
export const TON_CHAINID = "1360104473493505";
export const BTC_CHAINID = "313230561203979757";
export const IsomericChainIds = {
    [WalletName.NEAR]: NEAR_CHAINID,
    [WalletName.SOLANA]: SOLANA_CHAINID,
    [WalletName.TRON]: TRON_CHAINID,
    [WalletName.TON]: TON_CHAINID,
    [WalletName.BTC]: BTC_CHAINID,
};
export const isIsomericChain = (chainId) => {
    return Object.values(IsomericChainIds).includes(chainId + "");
};
export const getWalletNameForChainId = (chainId) => {
    if (!chainId)
        return WalletName.EVM;
    for (const key in IsomericChainIds) {
        if (IsomericChainIds[key] === chainId + "") {
            return key;
        }
    }
    return WalletName.EVM;
};
export const WalletIcons = {
    [WalletName.NEAR]: "https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png",
    [WalletName.TRON]: "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
    [WalletName.SOLANA]: "/images/wallets/solana.svg",
    [WalletName.EVM]: "/images/wallets/ethereum.svg",
};
