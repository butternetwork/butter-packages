"use client";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Chain, getChains as sdkGetChains } from '@butternetwork/sdk';

const apis = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "/" }),
    endpoints: (builder) => ({
        getChains: builder.query<Chain[], void>({
            queryFn: async () => {
                try {
                    const chains = await sdkGetChains();
                    return {
                        data: chains
                    }
                } catch (error) {
                    return {
                        error: { status: 'CUSTOM_ERROR', data: error, error: 'Custom error occurred' }
                    }
                }
            }
        })
    }),
})



export const { useGetChainsQuery } = apis;

export default apis;
