import { useAccounts, useBTCProvider, useConnectModal } from "@particle-network/btc-connectkit";
import { useCallback, useMemo } from "react";
import { WalletName } from "../../lib/types";
import { AddressZero } from "@ethersproject/constants";
import { getBtcBalance } from "../../utils/api/btc";
import { zipWith } from "lodash";
import { formatUnits } from "viem";
const useBtcWallet = () => {
    const name = WalletName.BTC;
    const { accounts } = useAccounts();
    const currentAccount = useMemo(() => {
        return (accounts && accounts.length) > 0 ? accounts[0] : null;
    }, [accounts]);
    const { provider, } = useBTCProvider();
    const { openConnectModal, disconnect } = useConnectModal();
    const connectWallet = useCallback(() => {
        return openConnectModal && openConnectModal();
    }, [openConnectModal]);
    const disconnectWallet = useCallback(async () => {
        return disconnect && disconnect();
    }, [disconnect]);
    const getBalances = useCallback(async (tokens) => {
        if (!currentAccount) {
            return [];
        }
        const res = await Promise.all(tokens.map((token) => {
            if (!token.address || token.address === AddressZero) {
                return getBtcBalance(currentAccount).then((res) => {
                    return res.data.data.satoshi;
                });
            }
            return "";
        }));
        return zipWith(tokens, res, (token, balance) => {
            return formatUnits(BigInt(balance), token.decimals || 10);
        });
    }, [currentAccount]);
    const getConnectedWallet = useCallback(() => {
        if (currentAccount && provider) {
            return {
                address: currentAccount,
                connector: provider.name,
                metadata: provider,
                providerName: name,
                getBalances: getBalances
            };
        }
    }, [currentAccount, getBalances, name, provider]);
    return {
        connectWallet,
        disconnectWallet,
        getConnectedWallet,
        name,
    };
};
export default useBtcWallet;
