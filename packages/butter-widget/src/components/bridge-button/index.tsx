"use client";
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
      return <EvmBridgeButton></EvmBridgeButton>;
    case WalletName.NEAR:
      return <NearBridgeButton></NearBridgeButton>;
    case WalletName.TRON:
      return <TronBridgeButton></TronBridgeButton>;
    case WalletName.SOLANA:
      return <SolanaBridgeButton></SolanaBridgeButton>;
    case WalletName.TON:
      return <TonBridgeButton></TonBridgeButton>;
    case WalletName.BTC:
      return <BtcBridgeButton></BtcBridgeButton>;
    default:
      return <></>;
  }
};

export default BridgeButton;
