type useBreakpointsUpProps = {
    breakpoint: "xs" | "sm" | "md" | "lg" | "xl";
};
declare const useBreakpointsUp: ({ breakpoint }: useBreakpointsUpProps) => {
    isLargerOrEqual: boolean | undefined;
};
export default useBreakpointsUp;
