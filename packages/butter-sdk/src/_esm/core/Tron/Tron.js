import { isAddress } from "./isAddress.js";
import { getTronBalance } from "./getTronBalance.js";
import { ChainType } from "../../types/index.js";
import { getTronClient } from "./getTronClient.js";
export function createTronProvider(options) {
    const _options = options ?? {};
    return {
        providerType: ChainType.TRON,
        isAddress,
        getBalance: getTronBalance,
        async executeRoute(route) {
            if (!_options.getAdapter) {
                throw new Error(`Adapter is not provided.`);
            }
            const adapter = await _options.getAdapter();
            const fromAddress = adapter.address;
            const tronClient = getTronClient();
            if (!adapter) {
                throw new Error(`Adapter is not connected.`);
            }
            if (!fromAddress) {
                throw new Error(`Wallet is not connected.`);
            }
            let functionSelector = "";
            // if (route.args.length > 0) {
            //   functionSelector = route.method + "(";
            //   route.args.map((item: any, index: number) => {
            //     if (index !== 0) functionSelector += ",";
            //     functionSelector += item.type;
            //   });
            //   functionSelector += ")";
            // }
            const preExecResult = await tronClient.transactionBuilder.triggerConstantContract(route.to, functionSelector, {
                callValue: Number(route.value),
                input: route.data
            }, [], fromAddress);
            if (!preExecResult ||
                !preExecResult.constant_result ||
                preExecResult.constant_result.length === 0) {
                throw new Error("pre-execute error");
            }
            const unsignedTxn = await tronClient.transactionBuilder.triggerSmartContract(route.to, functionSelector, {
                callValue: Number(route.value),
                feeLimit: 500000000,
                input: route.data
            }, [], fromAddress);
            const unsignedTxnData = unsignedTxn.transaction;
            if (!unsignedTxnData)
                throw new Error("triggerSmartContract failed to create transaction");
            const signedTxn = await adapter.signTransaction(unsignedTxnData);
            const res = await tronClient.trx.sendRawTransaction(signedTxn);
            return res.transaction;
        },
        setOptions(options) {
            Object.assign(_options, options);
        },
        // resolveAddress: getENSAddress,
    };
}
//# sourceMappingURL=Tron.js.map