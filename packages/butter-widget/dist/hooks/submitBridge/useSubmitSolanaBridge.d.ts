declare const useSubmitSolanaBridge: ({ onComplete, }: {
    onComplete: VoidFunction;
}) => {
    submitBridge: () => Promise<void>;
    bridging: boolean;
};
export default useSubmitSolanaBridge;
