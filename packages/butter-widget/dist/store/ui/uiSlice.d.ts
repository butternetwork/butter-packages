import { Cards, UIState } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";
export declare const uiSlice: import("@reduxjs/toolkit").Slice<UIState, {
    setActiveIndex: (state: import("immer").WritableDraft<UIState>, action: {
        payload: any;
        type: string;
    }) => void;
    insertCard: (state: import("immer").WritableDraft<UIState>, action: PayloadAction<Cards>) => void;
    removeCard: (state: import("immer").WritableDraft<UIState>, action: PayloadAction<Cards>) => void;
    toggleHistoryShow: (state: import("immer").WritableDraft<UIState>, action: {
        payload: any;
        type: string;
    }) => void;
    toggleBestShow: (state: import("immer").WritableDraft<UIState>, action: {
        payload: any;
        type: string;
    }) => void;
    toggleMoreShow: (state: import("immer").WritableDraft<UIState>, action: {
        payload: any;
        type: string;
    }) => void;
    setEmbAbi: (state: import("immer").WritableDraft<UIState>, action: {
        payload: any;
        type: string;
    }) => void;
    setSelectedProject: (state: import("immer").WritableDraft<UIState>, action: {
        payload: any;
        type: string;
    }) => void;
    setSupportedProjects: (state: import("immer").WritableDraft<UIState>, action: {
        payload: any;
        type: string;
    }) => void;
}, "ui", "ui", import("@reduxjs/toolkit").SliceSelectors<UIState>>;
export declare const toggleHistoryShow: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "ui/toggleHistoryShow">, setActiveIndex: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "ui/setActiveIndex">, toggleMoreShow: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "ui/toggleMoreShow">, toggleBestShow: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "ui/toggleBestShow">, setEmbAbi: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "ui/setEmbAbi">, setSelectedProject: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "ui/setSelectedProject">, setSupportedProjects: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "ui/setSupportedProjects">;
