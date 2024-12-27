"use client";
import { Cards, UIState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: UIState = {
  pages: [Cards.MainCard],
  showBestCard: false,
  showMoreCard: false,
  showHistoryCard: false,

  activeIndex: 0,

  selectedProject: "all",
  supportedProjects: [],
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    insertCard: (state, action: PayloadAction<Cards>) => {
      state.pages.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<Cards>) => {
      const index = state.pages.indexOf(action.payload);
      if (index >= 0) {
        state.pages.splice(index, 1);
      }
    },
    toggleHistoryShow: (state, action) => {
      state.showHistoryCard = action.payload;
    },
    toggleBestShow: (state, action) => {
      state.showBestCard = action.payload;
    },
    toggleMoreShow: (state, action) => {
      state.showMoreCard = action.payload;
    },
    setEmbAbi: (state, action) => {
      state.embApi = action.payload;
    },

    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },

    setSupportedProjects: (state, action) => {
      state.supportedProjects = action.payload;
    },
  },
});

export const {
  toggleHistoryShow,
  setActiveIndex,
  toggleMoreShow,
  toggleBestShow,
  setEmbAbi,
  setSelectedProject,
  setSupportedProjects,
} = uiSlice.actions;
