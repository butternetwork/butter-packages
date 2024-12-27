"use client";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import useSearchRoutes from "../../utils/useSearchRoutes";
const SwapSearchContainer = memo(({ children }) => {
    useSearchRoutes();
    return _jsx(_Fragment, { children: children });
});
SwapSearchContainer.displayName = "SwapSearchContainer";
export default SwapSearchContainer;
