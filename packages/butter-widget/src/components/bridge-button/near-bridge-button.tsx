"use client";
import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import useSubmitNearBridge from "../../hooks/submitBridge/useSubmitNearBridge";

const NearBridgeButton = () => {
  const { t } = useTranslation();
  const { bridging, submitBridge } = useSubmitNearBridge({
    onComplete: () => { },
  });
  return (
    <Button
      loading={bridging}
      onClick={submitBridge}
      fz={18}
      c={"black"}
      h={42}
    >
      {t("confirm")}
    </Button>
  );
};

export default NearBridgeButton;
