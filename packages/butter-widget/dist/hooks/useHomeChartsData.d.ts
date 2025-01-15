import { ChartsData, HomepageChartsData } from '../utils/data-types';
type Props = {
    data: HomepageChartsData | null;
};
type HomeTransactionChartData = {
    all: ChartsData;
    native: ChartsData;
    cross: ChartsData;
};
declare const useHomeChartsData: ({ data }: Props) => {
    accountCharData: ChartsData;
    transactionsData: HomeTransactionChartData;
    crossChainData: ChartsData;
    contractData: HomeTransactionChartData;
};
export default useHomeChartsData;
