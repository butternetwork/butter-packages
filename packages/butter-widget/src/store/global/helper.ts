"use client";
export function jsonToChainList(jsonData: any) {
    return jsonData.map((item: any) => {
        const data = { ...item };
        try {
            data.metamask = JSON.parse(data.metamask);
            if (jsonData.chainId === "1") {
                data.metamask.rpcUrls = ["https://eth-pokt.nodies.app"];
            }
        } catch (error) {
            console.log("Error parsing metamask: ", error);
            data.metamask = {}; // or some default value
        }
        try {
            data.nativeToken = JSON.parse(data.nativeToken);
        } catch (error) {
            console.log("Error parsing nativeToken: ", error);
            data.nativeToken = ""; // or some default value
        }
        return data;
    });
}
