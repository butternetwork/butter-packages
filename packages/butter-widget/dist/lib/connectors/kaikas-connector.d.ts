import { Wallet } from "@rainbow-me/rainbowkit";
declare global {
    interface Window {
        klaytn: any;
    }
}
declare const KaikasWallet: ({ chains }: any) => Wallet;
export default KaikasWallet;
