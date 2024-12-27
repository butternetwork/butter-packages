"use client";
import { useTranslation } from "react-i18next";
import { Button } from "@mantine/core";
import useSubmitSolanaBridge from "../../hooks/submitBridge/useSubmitSolanaBridge";

const SolanaBridgeButton = () => {
  const { t } = useTranslation();
  const { bridging, submitBridge } = useSubmitSolanaBridge({
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

export default SolanaBridgeButton;
