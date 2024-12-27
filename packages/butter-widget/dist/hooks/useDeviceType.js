"use client";
import { useState, useEffect } from "react";
const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState("desktop");
    const [isMobileBrowser, setIsMobileBrowser] = useState(false);
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
        const isTablet = /tablet|ipad/.test(userAgent);
        if (isTablet) {
            setDeviceType("tablet");
        }
        else if (isMobile) {
            setDeviceType("mobile");
            setIsMobileBrowser(true);
        }
        else {
            setDeviceType("desktop");
        }
    }, []);
    return { deviceType, isMobileBrowser };
};
export default useDeviceType;
