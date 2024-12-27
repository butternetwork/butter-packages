"use client";
import { useCallback, useState } from "react";
// import {
//   VersionedTransaction,
// } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { showError, showSuccess } from "../../utils/notifications";
// import useToAddress from "@/hooks/useToAddress";
import { useRouteTxData } from "../../store/route/hooks";
import { setShowConfirmCard } from "../../store/global/global-slice";
import { useAppDispatch } from "../../store/hooks";
import { executeRoute } from "@butternetwork/sdk";

// function encodeNumberToArrayLE(num: number, arraySize: number): Uint8Array {
//   const result = new Uint8Array(arraySize);
//   for (let i = 0; i < arraySize; i++) {
//     result[i] = Number(num & 0xff);
//     num >>= 8;
//   }

//   return result;
// }

// function updatePriorityFee(
//   tx: VersionedTransaction,
//   computeUnitPrice: number,
//   computeUnitLimit?: number,
// ) {
//   const computeBudgetOfset = 1;
//   const computeUnitPriceData = tx.message.compiledInstructions[1].data;
//   const encodedPrice = encodeNumberToArrayLE(computeUnitPrice, 8);
//   for (let i = 0; i < encodedPrice.length; i++) {
//     computeUnitPriceData[i + computeBudgetOfset] = encodedPrice[i];
//   }

//   if (computeUnitLimit) {
//     const computeUnitLimitData = tx.message.compiledInstructions[0].data;
//     const encodedLimit = encodeNumberToArrayLE(computeUnitLimit, 4);
//     for (let i = 0; i < encodedLimit.length; i++) {
//       computeUnitLimitData[i + computeBudgetOfset] = encodedLimit[i];
//     }
//   }
// }

// const NEW_CU_PRICE = 5000;
// const NEW_CU_LIMIT = 5000;

const useSubmitSolanaBridge = ({
  onComplete,
}: {
  onComplete: VoidFunction;
}) => {
  // const { wallets } = useWallets();
  const route = useRouteTxData();
  const { signTransaction } =
    useWallet();
  const dispatch = useAppDispatch();
  // const { connection } = useConnection();
  // const toAddress = useToAddress();
  // const accountId = useMemo(() => {
  //   return wallets.find((wallet) => wallet.providerName === "solana")?.address;
  // }, [wallets]);
  const [bridging, setBridging] = useState(false);

  const submitBridge = useCallback(async () => {
    // if (!accountId || !route?.tx || !sendTransaction || !signTransaction) {
    //   return;
    // }
    if (!signTransaction || !route) {
      return;
    }
    try {
      setBridging(true);
      await executeRoute(route[0]);
      // let txData = route?.[0].data;
      // if (!txData) {
      //   return;
      // }
      // txData = txData.startsWith("0x") ? txData.slice(2) : txData;
      // const versionedTransaction = VersionedTransaction.deserialize(
      //   Buffer.from(txData, "hex"),
      // );
      // // updatePriorityFee(versionedTransaction, NEW_CU_PRICE);
      // const {
      //   context: { slot: minContextSlot },
      //   value: { blockhash, lastValidBlockHeight },
      // } = await connection.getLatestBlockhashAndContext();
      // versionedTransaction.message.recentBlockhash = blockhash;
      // const tx = await signTransaction(versionedTransaction);
      // const signature = await connection.sendTransaction(tx);
      // await connection.confirmTransaction(
      //   {
      //     signature,
      //     lastValidBlockHeight,
      //     blockhash,
      //   },
      //   "processed",
      // );
      setBridging(false);
      dispatch(setShowConfirmCard(false));
      onComplete();
      showSuccess("Transaction sent successfully");
    } catch (e: any) {
      showError(e.message);
      setBridging(false);
    }
  }, [dispatch, onComplete, route, signTransaction]);

  return {
    submitBridge,
    bridging,
  };
};

export default useSubmitSolanaBridge;
