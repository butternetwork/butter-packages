"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
const TonProvider = ({ children }) => {
    console.log("TonProvider props:", { children });
    return (_jsx(TonConnectUIProvider, { manifestUrl: "https://map-static-file.s3.amazonaws.com/json/butter/tonconnect-manifest.json", walletsListConfiguration: {
            includeWallets: [
                {
                    name: "UXUY Wallet",
                    appName: "uxuyTonWallet",
                    universalLink: "https://t.me/UXUYbot/app",
                    bridgeUrl: "https://bridge.tonapi.io/bridge",
                    imageUrl: "https://raw.githubusercontent.com/uxuycom/uxuy-docsite/main/static/assets/UXUYWallet-logo/UXUYWallet_logo_circle.svg",
                    platforms: ["android", "ios", "linux", "windows", "macos"],
                    aboutUrl: "https://uxuy.com/",
                },
            ],
        }, children: children }));
};
export default TonProvider;
