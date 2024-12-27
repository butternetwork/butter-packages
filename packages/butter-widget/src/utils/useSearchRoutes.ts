"use client";
import {
  useAmount,
  useAppDispatch,
  useFrom,
  useSlippage,
  useTo,
} from "../store/hooks";
import { useEffect, useMemo, useRef } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { showError } from "../utils/notifications";
import getRouteData, {
  GetRouteDataProps,
} from "../store/route/thunks/getRouteData";
import { closeRoute } from "../store/route/routes-slice";
import { TON_CHAINID } from "../lib/configs";
import { useSearchParams } from "react-router";


const searchParamsValid = (params: GetRouteDataProps) => {
  return (
    !!params.fromChainId &&
    !!params.toChainId &&
    !!params.tokenInAddress &&
    !!params.tokenOutAddress &&
    !!params.amount &&
    Number(params.amount) > 0 &&
    Number(params.slippage) >= 0
  );
};

const useSearchRoutes = () => {
  const [query] = useSearchParams();
  const referrer = useMemo(() => query.get('referrer'), [query]);
  const lastSearch = useRef<GetRouteDataProps | null>(null);
  const from = useFrom();
  const to = useTo();
  const slippage = useSlippage();
  const amount = useAmount();
  const [debouncedAmount] = useDebouncedValue(amount, 1000);
  const dispatch = useAppDispatch();
  const controllerRef = useRef<AbortController | null>(null);
  const requestId = useRef(0);

  const slippage_ = useMemo(() => {
    if (
      from?.chain?.chainId === TON_CHAINID ||
      to?.chain?.chainId === TON_CHAINID
    ) {
      if (Number(slippage) < 3) {
        return "3";
      }
    }
    return slippage;
  }, [from?.chain?.chainId, to?.chain?.chainId, slippage]);

  const searchParams = useMemo(() => {
    return {
      fromChainId: from?.chain?.chainId + "" || "",
      toChainId: to?.chain?.chainId + "" || "",
      amount: debouncedAmount,
      tokenInAddress: from?.token?.address || "",
      tokenOutAddress: to?.token?.address || "",
      slippage: slippage_,
      entrance: referrer ? referrer + "" : "",
    };
  }, [
    from?.chain?.chainId,
    from?.token?.address,
    to?.chain?.chainId,
    to?.token?.address,
    debouncedAmount,
    slippage_,
    referrer,
  ]);

  useEffect(() => {
    if (!searchParamsValid(searchParams)) {
      if (controllerRef.current) {
        controllerRef.current.abort("cancel");
        controllerRef.current = null;
      }
      dispatch(closeRoute());
      return;
    }
    try {
      if (controllerRef.current) {
        controllerRef.current.abort("cancel");
        controllerRef.current = null;
      }
      controllerRef.current = new AbortController();
      lastSearch.current = searchParams;
      requestId.current += 1;
      dispatch(
        getRouteData({
          ...searchParams,
          id: requestId.current,
          signal: controllerRef.current.signal,
        }),
      ).finally(() => {
        controllerRef.current = null;
      });
    } catch (e: any) {
      if (e.message !== "canceled") {
        showError(e.message);
      }
    }
  }, [searchParams]);
};

export default useSearchRoutes;
