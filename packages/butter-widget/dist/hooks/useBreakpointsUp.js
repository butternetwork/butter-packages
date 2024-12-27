"use client";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
const useBreakpointsUp = ({ breakpoint }) => {
    const theme = useMantineTheme();
    const isLargerOrEqual = useMediaQuery(`(min-width: ${theme.breakpoints[breakpoint]})`);
    useEffect(() => { }, [isLargerOrEqual]);
    return {
        isLargerOrEqual,
    };
};
export default useBreakpointsUp;
