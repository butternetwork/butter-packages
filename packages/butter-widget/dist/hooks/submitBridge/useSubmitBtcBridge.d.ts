declare const useSubmitBtcBridge: ({ onComplete }: {
    onComplete: VoidFunction;
}) => {
    submitBridge: () => Promise<void>;
    bridging: boolean;
};
export default useSubmitBtcBridge;
