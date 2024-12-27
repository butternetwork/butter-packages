"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import useSubmitTonBridge from "../../hooks/submitBridge/useSubmitTonBridge";
const TronBridgeButton = () => {
    const { t } = useTranslation();
    const { bridging, submitBridge } = useSubmitTonBridge({
        onComplete: () => { },
    });
    return (_jsx(Button, { loading: bridging, onClick: submitBridge, fz: 18, c: "black", h: 42, children: t("confirm") }));
};
export default TronBridgeButton;
