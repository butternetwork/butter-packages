declare const useSubmitNearBridge: ({}: {
    onComplete: VoidFunction;
}) => {
    submitBridge: () => Promise<void>;
    bridging: boolean;
};
export default useSubmitNearBridge;
