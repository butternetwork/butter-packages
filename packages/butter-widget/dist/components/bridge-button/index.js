"use client";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import useFromWallet from "../../hooks/useFromWallet";
import { WalletName } from "../../lib/types";
import EvmBridgeButton from "./evm-bridge-button";
import NearBridgeButton from "./near-bridge-button";
import TronBridgeButton from "./tron-bridge-button";
import SolanaBridgeButton from "./solana-bridge-button";
import TonBridgeButton from "./ton-bridge-button";
import BtcBridgeButton from "./btc-bridge-button";
const BridgeButton = () => {
    const fromWallet = useFromWallet();
    switch (fromWallet?.providerName) {
        case WalletName.EVM:
            return _jsx(EvmBridgeButton, {});
        case WalletName.NEAR:
            return _jsx(NearBridgeButton, {});
        case WalletName.TRON:
            return _jsx(TronBridgeButton, {});
        case WalletName.SOLANA:
            return _jsx(SolanaBridgeButton, {});
        case WalletName.TON:
            return _jsx(TonBridgeButton, {});
        case WalletName.BTC:
            return _jsx(BtcBridgeButton, {});
        default:
            return _jsx(_Fragment, {});
    }
};
export default BridgeButton;
