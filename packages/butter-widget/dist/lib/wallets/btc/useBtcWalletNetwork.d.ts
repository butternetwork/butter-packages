declare const useBtcWalletNetwork: () => {
    switchBtcNetwork: () => Promise<void>;
    isNetworkSupported: boolean;
    network: string;
};
export default useBtcWalletNetwork;
