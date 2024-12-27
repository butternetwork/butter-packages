import { AppDispatch, RootState } from "./index";
import { TypedUseSelectorHook } from "react-redux";
export declare const useAppDispatch: () => AppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
export declare const useFrom: () => import("./route/types").ChainTokenSelectedItem | null;
export declare const useTo: () => import("./route/types").ChainTokenSelectedItem | null;
export declare const useSlippage: () => string;
export declare const useAmount: () => string;
export declare const useInputAddress: () => string;
export declare const useIsSwap: () => boolean;
export declare const useUserHistory: (account: string) => import("@butternetwork/sdk").SwapHistory[];
export declare const useUserHistoryLoading: () => boolean;
export declare const useUserHistoryForPage: (page: number, size: number, account: string) => {
    list: import("@butternetwork/sdk").SwapHistory[];
    total: number;
};
export declare const useShowAddressEditor: () => boolean;
export declare const useShowSetting: () => boolean;
