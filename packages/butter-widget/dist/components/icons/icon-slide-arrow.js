"use client";
import { jsx as _jsx } from "react/jsx-runtime";
function IconSlideArrow({ rotate = false }) {
    return (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "13", height: "14", fill: "none", viewBox: "0 0 13 14", style: {
            transform: rotate ? "rotate(180deg)" : "",
        }, children: _jsx("path", { fill: "#fff", d: "M13 0L6.5 7l6.5 7H6.5L0 7l6.5-7H13z" }) }));
}
export default IconSlideArrow;
