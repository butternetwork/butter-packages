"use client";
import { formatUnits } from "viem";
export function fixedFormatBigNumber({ value = "0", decimals = 18, fixed = 4, }) {
    const bigValue = formatUnits(BigInt(Number(value).toFixed()), decimals);
    const number = Number(bigValue);
    return number.toFixed(fixed);
}
export function customToFixed(num) {
    let numStr = num.toString();
    let decimalIndex = numStr.indexOf(".");
    if (decimalIndex === -1 || decimalIndex >= numStr.length - 6) {
        return numStr;
    }
    else {
        return numStr.slice(0, decimalIndex + 7);
    }
}
export function shortenNumber(num) {
    let numb = typeof num === "string" ? parseInt(num, 10) : num;
    numb = parseInt(numb.toFixed());
    if (numb) {
        if (num > 1e9) {
            return `${(numb / 1e9).toFixed(2)}B`;
        }
        if (num >= 1000000) {
            return `${(numb / 1000000).toFixed(2)}M`;
        }
        else if (num >= 1000) {
            return `${(numb / 1000).toFixed(2)}K`;
        }
        else {
            return `${numb}`;
        }
    }
    else {
        return `${numb}`;
    }
}
export function generateLightColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i += 1) {
        color +=
            `0${Math.floor(((1 + Math.random()) * (16 * 16)) / 2).toString(16)}`.slice(-2);
    }
    return color;
}
export function fixToSix(num) {
    try {
        let decimal = 5 - Math.floor(Math.log10(num));
        if (decimal < 0)
            decimal = 0;
        return Number(num).toFixed(decimal);
    }
    catch {
        return 0;
    }
}
export function toFixedN(num, n) {
    let re = new RegExp("(\\d+\\.\\d{" + n + "})(\\d)"), m = num.toString().match(re);
    return m ? parseFloat(m[1]) : num.valueOf();
}
export function truncateAndTrimDecimals(value, decimalPlaces) {
    let valueStr = value.toString();
    if (valueStr.includes("e") || valueStr.includes("E")) {
        // 将科学计数法转换为普通数字字符串
        valueStr = Number(value).toFixed(decimalPlaces + 10); // 增加精度以避免误差
    }
    const dotIndex = valueStr.indexOf(".");
    if (dotIndex === -1) {
        return valueStr;
    }
    const integerPart = valueStr.substring(0, dotIndex);
    let decimalPart = valueStr.substring(dotIndex + 1);
    decimalPart = decimalPart.substring(0, decimalPlaces);
    decimalPart = decimalPart.replace(/0+$/, "");
    if (decimalPart === "") {
        return integerPart;
    }
    return `${integerPart}.${decimalPart}`;
}
