"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { PropsWithChildren } from "react";

const TonProvider = ({ children }: PropsWithChildren) => {
  console.log("TonProvider props:", { children });

  return (
    <TonConnectUIProvider
      manifestUrl={
        "https://map-static-file.s3.amazonaws.com/json/butter/tonconnect-manifest.json"
      }
      walletsListConfiguration={{
        includeWallets: [
          {
            name: "UXUY Wallet",
            appName: "uxuyTonWallet",
            universalLink: "https://t.me/UXUYbot/app",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            imageUrl:
              "https://raw.githubusercontent.com/uxuycom/uxuy-docsite/main/static/assets/UXUYWallet-logo/UXUYWallet_logo_circle.svg",
            platforms: ["android", "ios", "linux", "windows", "macos"],
            aboutUrl: "https://uxuy.com/",
          },
        ],
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};

export default TonProvider;
