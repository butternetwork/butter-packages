"use client";
import { memo, PropsWithChildren } from "react";
import useSearchRoutes from "../../utils/useSearchRoutes";

const SwapSearchContainer = memo(({ children }: PropsWithChildren) => {
  useSearchRoutes();
  return <>{children}</>;
});

SwapSearchContainer.displayName = "SwapSearchContainer";

export default SwapSearchContainer;
