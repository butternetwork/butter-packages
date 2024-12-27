"use client";
import { useCallback } from "react";
import useSWR from "swr";
import { getUserHistory } from "../store/route/routes-slice";
import { useAccount } from "wagmi";
import { useAppDispatch } from "../store/hooks";

const usePollingHistory = () => {
  const { address } = useAccount();
  const dispatch = useAppDispatch();
  const loadHistory = useCallback(() => {
    if (address) {
      dispatch(
        getUserHistory({
          account: address!,
          page: 1,
        }),
      );
    }
  }, [address]);

  useSWR(address ? [address, "history"] : null, loadHistory, {
    refreshInterval: 5000,
    revalidateOnFocus: true,
    revalidateOnMount: true,
  });
};

export default usePollingHistory;
