"use client";
import { useEffect, useState } from "react";
import { useNextQueryParam } from "./useNextQueryParam";
import { useNavigate } from "react-router";
// const SIZES = [10, 25, 50, 100];
const useTablePageChange = ({ baseParams }) => {
    // const {page, size} = router.query;
    const page = useNextQueryParam("page");
    const size = useNextQueryParam("size");
    const [currentPage, setCurrentPage] = useState(isNaN(Number(page)) ? 1 : Number(page));
    const [pageSize, setPageSize] = useState(isNaN(Number(size)) ? 10 : Number(size));
    const [totalPage, setTotalPage] = useState(1);
    useEffect(() => {
        if (!isNaN(Number(page))) {
            setCurrentPage(Number(page));
        }
        else {
            setCurrentPage(1);
        }
        if (!isNaN(Number(size))) {
            setPageSize(Number(size));
        }
        else {
            setPageSize(10);
        }
    }, [page, size]);
    const navigate = useNavigate();
    const changeRoute = (page, size) => {
        navigate(window.location.pathname +
            "?" +
            (baseParams ? baseParams + "&" : "") +
            `page=${page}&size=${size}`);
    };
    const handlePageChange = (page) => {
        if (page <= totalPage) {
            changeRoute(page, pageSize);
        }
        else {
            changeRoute(totalPage, pageSize);
        }
    };
    const handlePageSizeChange = (size) => {
        changeRoute(currentPage, Number(size));
    };
    return {
        currentPage,
        pageSize,
        handlePageSizeChange,
        handlePageChange,
        totalPage,
        setTotalPage,
        changeRoute,
    };
};
export default useTablePageChange;
