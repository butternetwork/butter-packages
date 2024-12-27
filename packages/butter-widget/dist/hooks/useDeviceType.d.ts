declare const useDeviceType: () => {
    deviceType: "mobile" | "tablet" | "desktop";
    isMobileBrowser: boolean;
};
export default useDeviceType;
