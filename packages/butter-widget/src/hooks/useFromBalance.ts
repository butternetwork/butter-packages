"use client";
// import { useAppSelector } from "@/store/hooks";
// import { useAccount, useBalance, useContractRead, useContractWrite, usePublicClient } from "wagmi";
// import { BigNumber, ethers } from "ethers";
// import { EMPTY_ADDRESS } from "@/utils/addresses";
// import Erc20Abi from "@/utils/abis/erc20";
// import { isNear, isTron } from "@/utils/chains-helper";
// import { useEffect, useMemo, useState } from "react";
// import { RouteTxData } from "@/utils/api/types";
// import nearConnector from "@/utils/connectors/near-connector";
// import { formatUnits, parseAbi } from "viem";
// import USDTMainnetABI from "@/utils/abis/usdtmainnet";
// import tronConnector from "../utils/connectors/tron-connector";
//
// interface UseFromBalanceProps {
//     routeTxData?: RouteTxData[]
// }
// const useFromBalance = ({ routeTxData }: UseFromBalanceProps) => {
//     const from = useAppSelector(state => state.routes.from);
//     const { address: evmAccount } = useAccount();
//     const amount = useAppSelector(state => state.routes.amount);
//     const [noEvmBalance, setNoEvmBalance] = useState("")
//     const [noEvmAllowance, setNoEvmAllowance] = useState(false)
//     // const { data: balance } = useBalance({
//     //     address: evmAccount as `0x${string}`,
//     //     token: from?.token?.address as `0x${string}`,
//     //     enabled: !!from?.token?.address
//     //         && !!evmAccount
//     //         && (from?.token?.address !== EMPTY_ADDRESS)
//     //         && !isNear(Number(from.chain?.chainId)),
//     //     chainId: Number(from?.chain?.chainId),
//     //     watch: true,
//     // });
//     //
//     // const { data: ethBalance } = useBalance({
//     //     address: evmAccount,
//     //     chainId: Number(from?.chain?.chainId),
//     //     watch: true,
//     // })
//     // const loadNearBalance = async () => {
//     //     const res = await nearConnector.getBalance({ token: from?.token?.address || "", decimals: from?.token?.decimals });
//     //     setNoEvmBalance(res);
//     // }
//     // const loadTronBalance = async () => {
//     //     const res = await tronConnector.getBalance({ token: from?.token?.address || "", decimals: from?.token?.decimals });
//     //     setNoEvmBalance(res);
//     // }
//
//     const getTronAllowance = async () => {
//         if (from)
//             if (isTron(Number(from?.chain?.chainId))) {
//                 if (from.token?.address == 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb') { setNoEvmAllowance(false) }
//                 else {
//                     const tronAmount = await tronConnector.allowance(from?.token?.address as string)
//                     console.log(tronAmount[0], ethers.utils.parseUnits(amount || "0", from.token?.decimals as number), !(tronAmount[0] >= ethers.utils.parseUnits(amount || "0", from.token?.decimals as number)))
//                     setNoEvmAllowance(!(tronAmount[0] >= ethers.utils.parseUnits(amount || "0", from.token?.decimals as number)))
//                 }
//             }
//
//     }
//     useEffect(() => {
//         getTronAllowance()
//         //
//         // if (isNear(Number(from?.chain?.chainId))) {
//         //     loadNearBalance();
//         // }
//         // else if (isTron(Number(from?.chain?.chainId))) {
//         //     loadTronBalance();
//         // }
//     }, [from]);
//
//     const { data: allowanceData, refetch } = useContractRead({
//         address: from?.token?.address as `0x${string}`,
//         abi: Erc20Abi,
//         functionName: "allowance",
//         args: [
//             evmAccount,
//             routeTxData ? routeTxData![0]?.to : ""
//         ],
//         enabled: !!evmAccount
//             && !!from?.token?.address
//             && from.token.address !== EMPTY_ADDRESS
//             && !!routeTxData
//             && !isNear(from.chain?.chainId),
//         watch: true,
//         staleTime: 1000,
//     })
//
//     const isMainnetUSDT = (Number(from?.chain?.chainId) === 1 && from?.token?.symbol === "USDT");
//     const publicClient = usePublicClient();
//     const { data: writeResult, isLoading, isSuccess, writeAsync } = useContractWrite({
//         address: from?.token?.address as `0x${string}`,
//         abi: isMainnetUSDT ? USDTMainnetABI : Erc20Abi,
//         functionName: 'approve',
//     });
//
//     const needApprove = useMemo(() => {
//
//         if (isTron(Number(from?.chain?.chainId))) return noEvmAllowance
//         if (!isNaN(Number(amount)) && from && (allowanceData as any) >= BigInt(0)) {
//             const amountBig = ethers.utils.parseUnits(amount || "0", from.token?.decimals as number);
//             return amountBig.gt(BigNumber.from(allowanceData));
//         } else {
//             return false;
//         }
//     }, [amount, from, allowanceData, noEvmAllowance]);
//
//     const approve = async (value: string) => {
//         if (BigNumber.from(allowanceData?.toString()).gt(0) && isMainnetUSDT) {
//             // USDT on ETH need to do this next step
//             const res = await writeAsync({
//                 args: [
//                     routeTxData![0].to,
//                     0,
//                 ]
//             })
//             await publicClient.waitForTransactionReceipt({ hash: res.hash });
//         }
//         const result = await writeAsync({
//             args: [
//                 routeTxData![0].to,
//                 value,
//             ]
//         })
//         const receipt = await publicClient.waitForTransactionReceipt({ hash: result.hash });
//         await refetch();
//         return receipt;
//     }
//     // TODO: need near data
//     const insufficientBalance = useMemo(() => {
//         if (isNear(Number(from?.chain?.chainId))) {
//             return Number(amount) > Number(noEvmBalance);
//         } else if (isTron(Number(from?.chain?.chainId))) {
//             return Number(amount) > Number(noEvmBalance);
//         }
//         if (from?.token?.address === EMPTY_ADDRESS) {
//             return Number(amount) > Number(ethBalance?.formatted || 0);
//         } else {
//             return Number(amount) > Number(balance?.formatted || 0);
//         }
//     }, [from, balance, ethBalance, amount, noEvmBalance]);
//
//     return {
//         needApprove,
//         approve,
//         insufficientBalance,
//         balance: noEvmBalance !== "" ? noEvmBalance
//             : (from?.token?.address === EMPTY_ADDRESS ? ethBalance?.formatted : balance?.formatted)
//     };
//
// }
//
// export default useFromBalance;
