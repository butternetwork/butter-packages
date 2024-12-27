"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import useSubmitNearBridge from "../../hooks/submitBridge/useSubmitNearBridge";
const NearBridgeButton = () => {
    const { t } = useTranslation();
    const { bridging, submitBridge } = useSubmitNearBridge({
        onComplete: () => { },
    });
    return (_jsx(Button, { loading: bridging, onClick: submitBridge, fz: 18, c: "black", h: 42, children: t("confirm") }));
};
export default NearBridgeButton;
