"use client";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
export const useNextQueryParam = (key) => {
    // const asPath = window.location.href;
    // const value = useMemo(() => {
    //   const match = asPath.match(new RegExp(`[&?]${key}=(.*?)(&|$)`));
    //   if (!match) return undefined;
    //   return decodeURIComponent(match[1]);
    // }, [asPath, key]);
    const [searchParams] = useSearchParams();
    const value = searchParams.get(key);
    return value || undefined;
};
export const useAllQueryParams = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('from'));
    return useMemo(() => {
        const obj = {};
        searchParams.forEach((value, key) => {
            obj[key] = value;
        });
        // searchParams.forEach((value, key) => {
        //   obj[key] = value;
        // });
        return obj;
    }, [searchParams]);
};
