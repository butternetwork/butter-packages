"use client";

import { useTranslation } from "react-i18next";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useMemo } from "react";
import { Button } from "@mantine/core";
import useWallets from "../../lib/wallets/useWallets";
import { WalletName } from "../../lib/types";
import useFromWallet from "../../hooks/useFromWallet";
import { getWalletNameForChainId } from "../../lib/configs";
import { setShowConfirmCard } from "../../store/global/global-slice";
import useToAddress from "../../hooks/useToAddress";

const EvmConfirmButton = ({
  disabled,
  onSubmit,
}: {
  disabled: boolean;
  onSubmit: () => void;
}) => {
  const { connectWallet } = useWallets();
  const { t } = useTranslation();
  const from = useAppSelector((state) => state.routes.from);
  const { chain } = useNetwork();
  const { switchNetworkAsync } = useSwitchNetwork();
  const { isConnected } = useAccount();
  const selectedRoute = useAppSelector((state) => state.routes.selectedRoute);
  const to = useAppSelector((state) => state.routes.to);
  const toAddress = useToAddress();

  const isEvmNetworkCorrect = useMemo(() => {
    return chain?.id === Number(from?.chain?.chainId);
  }, [from?.chain?.chainId, chain?.id]);

  const handleSwitchNetwork = () => {
    console.log("from?.chain", from?.chain, switchNetworkAsync);
    if (from?.chain && switchNetworkAsync) {
      switchNetworkAsync(Number(from.chain.chainId));
    }
  };


  if (isConnected) {
    if (isEvmNetworkCorrect) {
      return (
        <Button
          onClick={onSubmit}
          disabled={
            disabled ||
            !selectedRoute ||
            selectedRoute === "empty" ||
            (selectedRoute?.dstChain?.chainId == "56" &&
              to?.token?.id == 12264) ||
            !toAddress
          }
          variant="filled"
          h={44}
          fz={18}
          c={"black"}
          w={"100%"}
        >
          {t("confirm")}
        </Button>
      );
    } else {
      return (
        <Button
          disabled={disabled}
          onClick={handleSwitchNetwork}
          h={44}
          fz={18}
          c={"black"}
          w={"100%"}
          variant="filled"
        >
          {t("switch_network")}
        </Button>
      );
    }
  } else {
    return (
      <Button
        // loading={isConnecting}
        onClick={() => {
          connectWallet(WalletName.EVM);
        }}
        h={44}
        fz={18}
        c={"black"}
        w={"100%"}
        variant="filled"
      >
        {t("connect_wallet")}
      </Button>
    );
  }
};

const ConfirmButton = ({ disabled }: { disabled: boolean }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { connectWallet } = useWallets();
  const from = useAppSelector((state) => state.routes.from);
  const to = useAppSelector((state) => state.routes.to);
  const toAddress = useToAddress();

  const selectedRoute = useAppSelector((state) => state.routes.selectedRoute);

  const fromWallet = useFromWallet();
  const fromWalletName = useMemo(() => {
    return getWalletNameForChainId(from?.chain?.chainId);
  }, [from]);

  const onSubmit = () => {
    dispatch(setShowConfirmCard(true));
  };

  if (fromWallet?.providerName === "evm") {
    return <EvmConfirmButton disabled={disabled} onSubmit={onSubmit} />;
  }

  if (!!fromWallet) {
    return (
      <Button
        disabled={
          disabled ||
          !selectedRoute ||
          selectedRoute === "empty" ||
          (selectedRoute?.dstChain?.chainId == "56" &&
            to?.token?.id == 12264) ||
          !toAddress
        }
        onClick={onSubmit}
        h={44}
        fz={18}
        c={"black"}
        w={"100%"}
        variant="filled"
      >
        {t("confirm")}
      </Button>
    );
  }
  return (
    <Button
      onClick={async () => {
        console.log("fromWalletName", fromWalletName);
        connectWallet(fromWalletName);
      }}
      h={44}
      fz={18}
      c={"black"}
      w={"100%"}
      variant="filled"
    >
      {t("connect_wallet")}
    </Button>
  );
};

export default ConfirmButton;
