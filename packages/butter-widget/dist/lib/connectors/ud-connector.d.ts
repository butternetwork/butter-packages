import { InjectedConnector } from "wagmi/connectors/injected";
export declare class UdConnector extends InjectedConnector {
    readonly id = "ud";
    readonly name = "ud";
    constructor();
    connect({ chainId }: {
        chainId?: number;
    }): Promise<{
        account: `0x${string}`;
        chain: {
            id: number;
            unsupported: boolean;
        };
    }>;
}
