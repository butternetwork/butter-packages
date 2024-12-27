import "./global.css";
import { PropsWithChildren } from "react";
import { ButterWidgetConfig } from "./config/types";
export declare const useButterWidgetContext: () => {
    config: ButterWidgetConfig | null;
};
export declare const InnerWidget: ({ children, ...config }: PropsWithChildren<ButterWidgetConfig>) => import("react/jsx-runtime").JSX.Element;
export default InnerWidget;
