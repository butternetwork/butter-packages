declare const useTronAllowanceCheck: ({ amount, token, target, }: {
    amount: number | string;
    token: string;
    target: string;
}) => {
    approve: () => Promise<void>;
    approving: boolean;
    needApprove: boolean;
};
export default useTronAllowanceCheck;
