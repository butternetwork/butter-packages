"use client";


import styles from "./page.module.css";
import dynamic from "next/dynamic";


import "@butternetwork/widget/butter-widget.css";
// import { ButterWidget } from "@butternetwork/widget";


const ButterWidget = dynamic(
  () => import("@butternetwork/widget").then((mod) => {
    // Import CSS only on client side
    return mod.ButterWidget;
  }),
  { ssr: false }
);

export default function Home() {
  return (
    <div className={styles.page}>
      <ButterWidget
        title="TEST TITLE"
        sdkOptions={{
          rpcs: {
            ["near"]: ["https://rpc.testnet.near.org"],
            ["solana"]: [
              "https://necessary-broken-tent.solana-mainnet.quiknode.pro/12741a7fd6e506423f3be7cf75afdd283fc0674a/",
            ],
            ["tron"]: {
              urls: ["https://api.trongrid.io"],
              headers: {
                "TRON-PRO-API-KEY": "6c42d887-8df4-4660-9642-a608ba131ecb",
              },
            },
            ["ton"]: [
              "https://smart-white-emerald.ton-mainnet.quiknode.pro/c4a95791e2bd921f5fce7a4aceff0f717e1a9cd6/jsonRPC",
            ],
          },
        }}
        colors={{
          primary: "#00DD00",
          red: "#FF0000",
          green: "#00FF0D",
          background: "#FFFFFF",
          background1: "#F0F0F0",
          background2: "#E0E0E0",
          foreground: "#000000",
          foreground1: "#333333",
          divider: "#E0E0E0",
        }}
      />
    </div>
  );
}
