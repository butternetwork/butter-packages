"use client";
export function saveHistory(data) {
    if (typeof window !== "undefined") {
        const res = localStorage.getItem("history");
        if (res) {
            const history = JSON.parse(res);
            history[data.txHash] = data;
            localStorage.setItem("history", JSON.stringify(history));
        }
        else {
            const history = { [data.txHash]: data };
            localStorage.setItem("history", JSON.stringify(history));
        }
    }
}
export function loadHistory() {
    if (typeof window !== "undefined") {
        const res = localStorage.getItem("history");
        if (res) {
            return JSON.parse(res);
        }
        return null;
    }
    return null;
}
