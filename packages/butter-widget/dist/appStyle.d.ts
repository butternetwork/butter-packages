declare const useAppStyles: (params: void) => {
    classes: Record<"container", string>;
    cx: (...args: any) => string;
    theme: import("@mantine/core").MantineTheme;
};
export default useAppStyles;
