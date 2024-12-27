"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
const toggleHistory = createAsyncThunk("ui/toggleHistory", async ({ show }) => {
    if (show) {
        return true;
    }
    return false;
});
export default toggleHistory;
