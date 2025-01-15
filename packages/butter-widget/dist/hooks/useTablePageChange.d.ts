type Props = {
    baseParams: string;
};
declare const useTablePageChange: ({ baseParams }: Props) => {
    currentPage: number;
    pageSize: number;
    handlePageSizeChange: (size: string) => void;
    handlePageChange: (page: number) => void;
    totalPage: number;
    setTotalPage: import('react').Dispatch<import('react').SetStateAction<number>>;
    changeRoute: (page: number, size: number) => void;
};
export default useTablePageChange;
