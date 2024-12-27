export declare function fixedFormatBigNumber({ value, decimals, fixed, }: {
    value?: string;
    decimals?: number;
    fixed?: number;
}): string;
export declare function customToFixed(num: any): any;
export declare function shortenNumber(num: number): string;
export declare function generateLightColorHex(): string;
export declare function fixToSix(num: number): string | 0;
export declare function toFixedN(num: string | number, n: number): string | number;
export declare function truncateAndTrimDecimals(value: number | string, decimalPlaces: number): string;
