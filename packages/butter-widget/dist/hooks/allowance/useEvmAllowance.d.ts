import { RouteTxData } from '../../utils/api/types';
declare const useEvmAllowance: ({ data }: {
    data: RouteTxData[];
}) => {
    approve: (value: string) => Promise<import('viem').TransactionReceipt>;
    needApprove: boolean;
    balance: string;
};
export default useEvmAllowance;
