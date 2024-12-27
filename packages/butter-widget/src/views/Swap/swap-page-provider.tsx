"use client";
import { memo, PropsWithChildren } from "react";
import useInitialParams from "../../hooks/useInitialParams";

const SwapPageProvider = memo(({ children }: PropsWithChildren) => {
  useInitialParams();
  return <>{children}</>;
});

SwapPageProvider.displayName = "SwapPageProvider";

export default SwapPageProvider;
