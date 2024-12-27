"use client";
import { ChartsData, HomepageChartsData } from "../utils/data-types";
import { useEffect, useState } from "react";

type Props = {
  data: HomepageChartsData | null;
};

type HomeTransactionChartData = {
  all: ChartsData;
  native: ChartsData;
  cross: ChartsData;
};

const useHomeChartsData = ({ data }: Props) => {
  const [accountCharData, setAccountData] = useState<ChartsData>({
    labels: [],
    values: [],
  });
  const [transactionsData, setTransactionsData] =
    useState<HomeTransactionChartData>({
      all: {
        labels: [],
        values: [],
      },
      native: {
        labels: [],
        values: [],
      },
      cross: {
        labels: [],
        values: [],
      },
    });
  const [crossChainData, setCrossChainData] = useState<ChartsData>({
    labels: [],
    values: [],
  });
  const [contractData, setContractData] = useState<HomeTransactionChartData>({
    all: {
      labels: [],
      values: [],
    },
    native: {
      labels: [],
      values: [],
    },
    cross: {
      labels: [],
      values: [],
    },
  });

  useEffect(() => {
    if (data) {
      if (data.nativeTransactionCharData) {
        setTransactionsData({
          all: {
            labels: Object.keys(data.allTransactionCharData),
            values: Object.values(data.allTransactionCharData) as any,
          },
          cross: {
            labels: Object.keys(data.crossChainTransactionCharData),
            values: Object.values(data.crossChainTransactionCharData),
          },
          native: {
            labels: Object.keys(data.nativeTransactionCharData),
            values: Object.values(data.nativeTransactionCharData),
          },
        });
      }
      if (data.assetCharData) {
        setCrossChainData({
          labels: Object.keys(data.assetCharData),
          values: Object.values(data.assetCharData) as any,
        });
      }
      if (data.accountCharData) {
        setAccountData({
          labels: Object.keys(data.accountCharData),
          values: Object.values(data.accountCharData) as any,
        });
      }
      if (data.allContractCharData) {
        setContractData({
          all: {
            labels: Object.keys(data.allContractCharData),
            values: Object.values(data.allContractCharData) as any,
          },
          cross: {
            labels: Object.keys(data.nativeContractCharData || {}),
            values: Object.values(data.nativeContractCharData || {}),
          },
          native: {
            labels: Object.keys(data.crossContractCharData || {}),
            values: Object.values(data.crossContractCharData || {}),
          },
        });
      }
    }
  }, [data]);

  return {
    accountCharData,
    transactionsData,
    crossChainData,
    contractData,
  };
};

export default useHomeChartsData;
