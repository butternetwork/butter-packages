import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import useSubmitBtcBridge from "../../hooks/submitBridge/useSubmitBtcBridge";

const BtcBridgeButton = () => {
    const { t } = useTranslation("common");
    const { bridging, submitBridge } = useSubmitBtcBridge({
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

export default BtcBridgeButton;
