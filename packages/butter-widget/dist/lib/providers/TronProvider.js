"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { WalletProvider, } from "@tronweb3/tronwallet-adapter-react-hooks";
import { WalletDisconnectedError, WalletNotFoundError, } from "@tronweb3/tronwallet-abstract-adapter";
import { useEffect, useState } from "react";
import { WalletModalProvider, } from "@tronweb3/tronwallet-adapter-react-ui";
import "@tronweb3/tronwallet-adapter-react-ui/style.css";
import { Center, Container, Loader } from "@mantine/core";
const TronProvider = ({ children }) => {
    const [adaptors, setAdaptors] = useState([]);
    const [_ready, setReady] = useState(false);
    useEffect(() => {
        import("@tronweb3/tronwallet-adapters").then((adaptors) => {
            setAdaptors([
                new adaptors.TronLinkAdapter(),
                new adaptors.OkxWalletAdapter(),
                new adaptors.BitKeepAdapter(),
                new adaptors.WalletConnectAdapter({
                    network: "Mainnet",
                    options: {
                        projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID,
                    },
                }),
                new adaptors.LedgerAdapter(),
                new adaptors.TokenPocketAdapter(),
            ]);
            setReady(true);
        });
    }, []);
    function onError(e) {
        if (e instanceof WalletNotFoundError) {
            console.log(e.message);
        }
        else if (e instanceof WalletDisconnectedError) {
            console.log(e.message);
        }
        else {
            console.error(e.message);
        }
    }
    if (!adaptors.length) {
        return (_jsx(Container, { fluid: true, h: "100vh", children: _jsxs(Center, { w: "100%", h: "100%", children: [process.env.NEXT_PUBLIC_APP_ENV === "dev" && "Loading TRON", _jsx(Loader, {})] }) }));
    }
    return (_jsx(WalletProvider, { onError: onError, adapters: adaptors, children: _jsx(WalletModalProvider, { children: children }) }));
};
export default TronProvider;
