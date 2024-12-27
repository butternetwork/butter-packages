"use client";
import type { Meta, StoryObj } from '@storybook/react';

import InnerWidget from './Widget';
import { ChainType } from '@butternetwork/sdk';

const meta: Meta<typeof InnerWidget> = {
    component: InnerWidget,
};

export default meta;
type Story = StoryObj<typeof InnerWidget>;

export const Default: Story = {
    args: {
        sdkOptions: {
            rpcs: {
                [ChainType.NEAR]: ["https://rpc.testnet.near.org"],
                [ChainType.SOLANA]: [
                    "https://necessary-broken-tent.solana-mainnet.quiknode.pro/12741a7fd6e506423f3be7cf75afdd283fc0674a/",
                ],
                [ChainType.TRON]: {
                    urls: ["https://api.trongrid.io"],
                    headers: {
                        "TRON-PRO-API-KEY": "6c42d887-8df4-4660-9642-a608ba131ecb",
                    },
                },
                [ChainType.TON]: [
                    "https://smart-white-emerald.ton-mainnet.quiknode.pro/c4a95791e2bd921f5fce7a4aceff0f717e1a9cd6/jsonRPC",
                ],
            }
        }
    },
};