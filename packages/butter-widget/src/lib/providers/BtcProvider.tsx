"use client";
import { PropsWithChildren } from "react";
import {
    ConnectProvider,
    OKXConnector,
    UnisatConnector,
    BitgetConnector,
    TokenPocketConnector,
    BybitConnector
} from "@particle-network/btc-connectkit";
import { MerlinTestnet, Merlin, BEVMTestnet, MAPProtocolTestnet, MAPProtocol, SatoshiVMTestnet, BSquaredTestnet, Mantle, BitlayerTestnet, BotanixTestnet, PolygonzkEVMCardona } from '@particle-network/chains';

const BtcProvider = ({ children }: PropsWithChildren) => {
    return (
        <ConnectProvider
            options={{
                projectId: "e4f64c91-17ef-4453-bd7e-12f395a73347", // -
                clientKey: "cdE8koM0H2I7Kr8Q17cyB9mD63Sf12EEOWvtZH1s", // Retrieved from https://dashboard.particle.network
                appId: "b4916f74-75ac-438d-a840-7d4a06330f31", // -
                aaOptions: {
                    accountContracts: {
                        BTC: [
                            {
                                chainIds: [MerlinTestnet.id, Merlin.id, BEVMTestnet.id, MAPProtocolTestnet.id, MAPProtocol.id, SatoshiVMTestnet.id],
                                version: '1.0.0',
                            },
                            {
                                chainIds: [BitlayerTestnet.id, BotanixTestnet.id, PolygonzkEVMCardona.id, BSquaredTestnet.id, Mantle.id],
                                version: '2.0.0',
                            },
                        ],
                    },
                },
                walletOptions: {
                    visible: false,
                }
            }}
            connectors={[
                new UnisatConnector(),
                new BitgetConnector(),
                new TokenPocketConnector(),
                new OKXConnector(),
                new BybitConnector()]} // Currently, only these five are supported
        >
            {children}
        </ConnectProvider>
    )
}

export default BtcProvider;
