"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const ErrorFallback = ({ error, id }) => {
    // useEffect(() => {
    //     if (!!error) {
    //         resetErrorBoundary();
    //     }
    // }, [error, resetErrorBoundary]);
    console.log(error.toString());
    return (_jsxs("div", { role: "alert", children: [_jsxs("p", { children: [" Something went wrong with @", id, ":"] }), _jsxs("div", { style: {
                    color: "red",
                    whiteSpace: "wrap",
                    wordBreak: "break-all",
                    maxWidth: "100vw",
                    padding: "10px",
                }, children: [JSON.stringify(error.message), _jsx("br", {}), " ", error.stack] })] }));
};
export default ErrorFallback;
