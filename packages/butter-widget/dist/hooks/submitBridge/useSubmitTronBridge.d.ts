declare const useSubmitTronBridge: () => {
    bridging: boolean;
    submitBridge: () => Promise<void>;
};
export default useSubmitTronBridge;
