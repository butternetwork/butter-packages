"use client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IsomericChainIds } from "../../lib/configs";
import { RootState } from "../../store";
import { Wallet } from "../../lib/wallets/useWallets";
import {
  Token,
  Chain,
  getChains,
  getTokensForNetwork,
} from "@butternetwork/sdk";

export interface GlobalState {
  chains: Chain[];
  metamaskChains: Chain[];
  loadingChains: boolean;
  chainsMap: { [key: string]: Chain };

  tokensForChain: {
    [key: string]: Token[];
  };
  tokensForChainPages: {
    [key: string]: number;
  };
  tokensForChainNoMore: {
    [key: string]: boolean;
  };
  tokensLoading: boolean;

  showConfirmCard: boolean;
}

const initialState: GlobalState = {
  chains: [],
  metamaskChains: [],
  loadingChains: false,
  chainsMap: {},
  tokensForChain: {},
  tokensForChainPages: {},
  tokensForChainNoMore: {},
  tokensLoading: false,
  showConfirmCard: false,
};

export const fetchChainsData = createAsyncThunk<Chain[]>(
  "global/fetchChainsData",
  async () => {
    const res = await getChains();
    const chains = [...res];
    return chains;
  },
);

const TOKEN_PAGE_SIZE = 10;

export const getTokensForChain = createAsyncThunk<
  Pick<
    GlobalState,
    "tokensForChain" | "tokensForChainNoMore" | "tokensForChainPages"
  >,
  {
    network: string;
    page: number;
    chainId: string;
    wallet: Wallet | null;
    symbol: string;
  },
  { state: RootState }
>(
  "routes/getTokensForChain",
  async ({ network, page, chainId, wallet, symbol }, { getState }) => {
    if (!network) {
      return {
        tokensForChain: {},
        tokensForChainNoMore: {},
        tokensForChainPages: {},
      };
    }
    const res = await getTokensForNetwork({
      network,
      page,
      size: TOKEN_PAGE_SIZE,
      keyword: symbol,
    });
    let tokensRes = [...res.results];
    try {
      if (!!wallet) {
        const balances = await wallet.getBalances(
          tokensRes.map((item: any) => {
            return {
              address: item.address,
              decimals: item.decimals,
            };
          }),
          Number(chainId),
        );
        tokensRes = tokensRes.map((item: any, index: number) => {
          return {
            ...item,
            balance: Number(balances[index]).toFixed(6),
          };
        });
      }
    } catch (err) {
      tokensRes = tokensRes.map((item: any, _index: number) => {
        return {
          ...item,
          balance: Number(0).toFixed(4),
        };
      });
    }
    tokensRes = tokensRes.sort((a: any, b: any) =>
      Number(a.balance) > Number(b.balance) ? -1 : 1,
    );
    const state = getState().global;
    const oldTokens = page === 1 ? [] : state.tokensForChain[network] || [];
    return {
      tokensForChain: {
        [network]: [...oldTokens, ...tokensRes],
      },
      tokensForChainNoMore: {
        [network]: tokensRes.length < TOKEN_PAGE_SIZE,
      },
      tokensForChainPages: {
        [network]: page,
      },
    };
  },
);

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    updateTokensPage: (
      state,
      action: PayloadAction<{ [network: string]: number }>,
    ) => {
      state.tokensForChainPages = {
        ...state.tokensForChainPages,
        ...action.payload,
      };
    },
    setShowConfirmCard: (state, action: PayloadAction<boolean>) => {
      state.showConfirmCard = action.payload;
    },
    setTokensNoMoreForNetwork(
      state,
      action: PayloadAction<{ network: string; noMore: boolean }>,
    ) {
      state.tokensForChainNoMore = {
        ...state.tokensForChainNoMore,
        [action.payload.network]: action.payload.noMore,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchChainsData.fulfilled,
      (state, action: PayloadAction<Chain[]>) => {
        state.chains = action.payload;
        state.metamaskChains = action.payload.filter((chain) => {
          return !Object.values(IsomericChainIds).includes(chain.chainId + "");
        });
        state.chainsMap = action.payload.reduce((acc, chain) => {
          return {
            ...acc,
            [chain.chainId]: chain,
          };
        }, {});
        state.loadingChains = false;
      },
    );
    builder.addCase(fetchChainsData.rejected, (state, action) => {
      state.chains = [];
      state.metamaskChains = [];
      state.chainsMap = {};
      state.loadingChains = false;
      console.log(action.error, "error");
    });
    builder.addCase(fetchChainsData.pending, (state, _action) => {
      state.loadingChains = true;
    });

    builder.addCase(getTokensForChain.fulfilled, (state, action) => {
      state.tokensForChain = {
        ...state.tokensForChain,
        ...action.payload.tokensForChain,
      };
      state.tokensForChainNoMore = {
        ...state.tokensForChainNoMore,
        ...action.payload.tokensForChainNoMore,
      };
      state.tokensForChainPages = {
        ...state.tokensForChainPages,
        ...action.payload.tokensForChainPages,
      };
    });
    builder.addCase(getTokensForChain.pending, (state, _action) => {
      state.tokensLoading = true;
    });
    builder.addCase(getTokensForChain.rejected, (state, _action) => {
      state.tokensLoading = false;
    });
  },
});

export const {
  updateTokensPage,
  setShowConfirmCard,
  setTokensNoMoreForNetwork,
} = globalSlice.actions;

export default globalSlice.reducer;
