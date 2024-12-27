"use client";
import { Address } from "@ton/core";
import { TronWeb } from "tronweb";
import { isAddress } from "viem";
import { WalletName } from "../types";
import { PublicKey } from "@solana/web3.js";
import { address as bitcoinAddress } from 'bitcoinjs-lib';
export function isValidTonAddress(address) {
    try {
        Address.parse(address);
        return true;
    }
    catch (error) {
        return false;
    }
}
const tronWeb = new TronWeb({
    fullHost: "https://api.trongrid.io", // 主网节点
});
function isValidTronAddress(address) {
    return tronWeb.isAddress(address);
}
function isValidNearAddress(address) {
    const accountIdRegex = /^(([a-z0-9_-]{2,64})|([a-f0-9]{64}))(\.near)?$/;
    return accountIdRegex.test(address);
}
function isValidEvmAddress(address) {
    return isAddress(address);
}
function isValidSolanaAddress(address) {
    try {
        new PublicKey(address);
        return true;
    }
    catch (error) {
        return false;
    }
}
function isValidBtcAddress(address) {
    try {
        bitcoinAddress.toOutputScript(address);
        return true;
    }
    catch (e) {
        return false;
    }
}
export function isValidAddress({ address, walletName, }) {
    if (!address) {
        return false;
    }
    switch (walletName) {
        case WalletName.EVM:
            return isValidEvmAddress(address);
        case WalletName.NEAR:
            return isValidNearAddress(address);
        case WalletName.SOLANA:
            return isValidSolanaAddress(address);
        case WalletName.TRON:
            return isValidTronAddress(address);
        case WalletName.TON:
            return isValidTonAddress(address);
        case WalletName.BTC:
            return isValidBtcAddress(address);
    }
}
