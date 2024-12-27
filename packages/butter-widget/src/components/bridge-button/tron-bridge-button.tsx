"use client";
import { Button } from "@mantine/core";
import useTronAllowanceCheck from "../../lib/wallets/tron/useTronAllowanceCheck";
import { useAmount, useFrom } from "../../store/hooks";
import { useRouteTxData } from "../../store/route/hooks";
import { useTranslation } from "react-i18next";
import useSubmitTronBridge from "../../hooks/submitBridge/useSubmitTronBridge";

// const TRON_BRIDGE_CONTRACT = "TSBDbe1TB8Ft3KZTdbDcZPLFTkL2BFBiZh";

const TronBridgeButton = () => {
  const { t } = useTranslation();
  const amount = useAmount();
  const from = useFrom();
  const routeTxData = useRouteTxData();
  const { needApprove, approve, approving } = useTronAllowanceCheck({
    amount,
    token: from?.token?.address || "",
    target: routeTxData?.[0].to || "",
  });

  const { bridging, submitBridge } = useSubmitTronBridge();

  if (needApprove) {
    return (
      <Button loading={approving} fz={18} c={"black"} h={42} onClick={approve}>
        {t("approve")}
      </Button>
    );
  }

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

export default TronBridgeButton;
