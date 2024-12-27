import {useBTCProvider} from "@particle-network/btc-connectkit";
import {useCallback, useEffect, useMemo, useState} from "react";

const useBtcWalletNetwork = () => {
    const {
        switchNetwork,
        getNetwork,
        accounts
    } = useBTCProvider();

    const [network, setNetwork] = useState("livenet");

    useEffect(() => {
        getNetwork().then((res) => {
            if (network !== res) {
                setNetwork(res);
            }
        })
    }, [getNetwork, accounts])

    const isNetworkSupported = useMemo(() => {
        return network === "livenet";
    }, [network]);

    const switchBtcNetwork = useCallback(() => {
        return switchNetwork("livenet");
    }, [switchNetwork])

    return {
        switchBtcNetwork,
        isNetworkSupported,
        network
    }
}

export default useBtcWalletNetwork;
