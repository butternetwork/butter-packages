declare const useSubmitTonBridge: ({ onComplete }: {
    onComplete: VoidFunction;
}) => {
    submitBridge: () => Promise<void>;
    bridging: boolean;
};
export default useSubmitTonBridge;
