import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Text } from "@mantine/core";
const PoweredBy = () => {
    return _jsxs(Flex, { align: "center", justify: "center", gap: 4, children: [_jsx(Text, { fz: 12, fw: 500, c: "foreground1", children: "Powered by" }), _jsx("a", { href: "https://butterswap.io", target: "_blank", children: _jsx(Text, { fz: 12, fw: 500, c: "foreground", children: "ButterSwap" }) })] });
};
export default PoweredBy;
