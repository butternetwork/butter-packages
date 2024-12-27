"use client";
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import useInitialParams from "../../hooks/useInitialParams";
const SwapPageProvider = memo(({ children }) => {
    useInitialParams();
    return _jsx(_Fragment, { children: children });
});
SwapPageProvider.displayName = "SwapPageProvider";
export default SwapPageProvider;
