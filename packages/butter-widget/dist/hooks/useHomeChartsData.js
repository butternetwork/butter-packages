"use client";
import { useEffect, useState } from "react";
const useHomeChartsData = ({ data }) => {
    const [accountCharData, setAccountData] = useState({
        labels: [],
        values: [],
    });
    const [transactionsData, setTransactionsData] = useState({
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
    const [crossChainData, setCrossChainData] = useState({
        labels: [],
        values: [],
    });
    const [contractData, setContractData] = useState({
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
                        values: Object.values(data.allTransactionCharData),
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
                    values: Object.values(data.assetCharData),
                });
            }
            if (data.accountCharData) {
                setAccountData({
                    labels: Object.keys(data.accountCharData),
                    values: Object.values(data.accountCharData),
                });
            }
            if (data.allContractCharData) {
                setContractData({
                    all: {
                        labels: Object.keys(data.allContractCharData),
                        values: Object.values(data.allContractCharData),
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
