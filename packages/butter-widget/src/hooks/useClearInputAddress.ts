"use client";
import { useEffect, useRef } from "react";
import useToWallet from "./useToWallet";
import { useAppDispatch } from "../store/hooks";
import { updateInputAddress } from "../store/route/routes-slice";

const useClearInputAddress = () => {
  const toWallet = useToWallet();
  const dispatch = useAppDispatch();
  const lastAddress = useRef<string | null | undefined>(null);
  useEffect(() => {
    if (lastAddress.current !== toWallet?.address) {
      dispatch(updateInputAddress(""));
    }
    lastAddress.current = toWallet?.address || "";
  }, [toWallet?.address]);
};

export default useClearInputAddress;
