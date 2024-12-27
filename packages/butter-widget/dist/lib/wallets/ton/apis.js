"use client";
import { TonClient } from "@ton/ton";
// const TonRpcUrl = "https://go.getblock.io/4c57fe41a9864c2a81d1e5e2953dc565";
const TonRpcUrl = "https://toncenter.com/api/v2/jsonRPC";
export const tonClient = new TonClient({
    endpoint: TonRpcUrl,
});
