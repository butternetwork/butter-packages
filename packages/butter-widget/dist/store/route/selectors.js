"use client";
import { memoize } from "proxy-memoize";
export const selectRouteTxData = memoize((state) => state.routes.routeTxData);
export const selectLoadingRouteTxData = memoize((state) => state.routes.loadingRouteTx);
export const selectCurrentHistory = memoize((state) => state.routes.currentHistory);
export const selectBestRoute = memoize((state) => state.routes.selectedRoute);
export const selectLoadingRoute = memoize((state) => state.routes.loadingRoutes);
export const selectFetchRouteError = memoize((state) => state.routes.fetchRouteError);
