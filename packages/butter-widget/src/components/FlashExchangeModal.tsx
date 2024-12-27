"use client";
import {
  ActionIcon,
  Button,
  CopyButton,
  Flex,
  Modal,
  NumberInput,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleShowExchangeModal } from "../store/route/routes-slice";
import { useEffect, useState } from "react";
import {
  useAccount,
  useNetwork,
  useSwitchNetwork,
  useWalletClient,
} from "wagmi";
import { createPublicClient, formatUnits, http, parseEther } from "viem";
import { showError, showSuccess } from "../utils/notifications";
import IconCopy from "./icons/icon-copy";
import IconSuccess from "./icons/icon-success";
import Usdt_abi from "../utils/abis/usdt_abi";
import { bsc, mainnet } from "wagmi/chains";

import { useTranslation } from "react-i18next";

const BtCopyButton = ({ value }: { value: string }) => {
  return (
    <CopyButton value={value}>
      {({ copied, copy }) => (
        <ActionIcon
          size={20}
          sx={{
            display: "inline",
          }}
          p={0}
          color={copied ? "teal" : "blue"}
          onClick={copy}
          variant="transparent"
        >
          {copied ? <IconSuccess></IconSuccess> : <IconCopy></IconCopy>}
        </ActionIcon>
      )}
    </CopyButton>
  );
};

const MAP_ADDRESS_ETH = "0x9E976F211daea0D652912AB99b0Dc21a7fD728e4";
const MAP_ADDRESS_BSC = "0x8105ece4ce08b6b6449539a5db23e23b973dfa8f";

const TO_ADDRESS = "0xCED0Fffb0177EEe2CAFb1Cb0a9FD11eE3C943DA0";

const FlashExchangeModal = () => {
  const { t } = useTranslation();

  const opened = useAppSelector((state) => state.routes.showExchangeModal);
  const from = useAppSelector((state) => state.routes.from);

  const dispatch = useAppDispatch();
  const theme = useMantineTheme();
  const { data: signer } = useWalletClient();
  const { address } = useAccount();
  const [amount, setAmount] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const { switchNetworkAsync } = useSwitchNetwork();
  const publicClient = createPublicClient({
    chain: from?.chain?.id == 1 ? mainnet : bsc,
    transport: http(),
  });
  const [userBalance, setUserBalance] = useState("0");
  const { chain } = useNetwork();
  useEffect(() => {
    if (address)
      publicClient
        ?.readContract({
          abi: Usdt_abi,
          address: from?.chain?.id == 1 ? MAP_ADDRESS_ETH : MAP_ADDRESS_BSC,
          functionName: "balanceOf",
          args: [address || ""],
        })
        .then((data) => {
          const balance = data && formatUnits(data as bigint, 18);
          setUserBalance((balance as any) || "0");
        });
  }, [publicClient, address]);

  const handleSend = async () => {
    try {
      setLoading(true);
      const hash = await signer?.writeContract({
        abi: Usdt_abi,
        address: from?.chain?.id == 1 ? MAP_ADDRESS_ETH : MAP_ADDRESS_BSC,
        functionName: "transfer",
        args: [TO_ADDRESS, parseEther(amount.toString())],
      });
      await publicClient.waitForTransactionReceipt({
        hash: hash as any,
      });
      showSuccess(t("success!"));
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      showError(e.message);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={() => {
        dispatch(toggleShowExchangeModal(false));
      }}
      title={"Flash Swap Channel"}
      size={"lg"}
    >
      <Modal.Body>
        <Text
          fz={14}
          fw={600}
          sx={{
            whiteSpace: "pre-wrap",
          }}
          c={"white"}
        >
          <strong>PATH:</strong> MAP (
          {from?.chain?.id == 1 ? "Ethereum" : "BNBChain"}) to $MAPO (MAP
          Protocol)
          <br></br>
          <br></br>
          <strong>Exchange Ratio: 1:1 </strong>.<br></br>
          <br></br>
          <strong>OPERATION: </strong>
          Users holding MAP tokens on{" "}
          {from?.chain?.id == 1 ? "Ethereum" : "BNBChain"} can transfer their
          tokens to this address: (
          <a
            target={"_blank"}
            href={
              "https://etherscan.io/address/0xCED0Fffb0177EEe2CAFb1Cb0a9FD11eE3C943DA0"
            }
          >
            <strong
              style={{
                color: theme.colors.yellow[6],
                textDecoration: "underline",
              }}
            >
              0xCED0Fffb0177EEe2CAFb1Cb0a9FD11eE3C943DA0
            </strong>
          </a>{" "}
          <BtCopyButton
            value={"0xCED0Fffb0177EEe2CAFb1Cb0a9FD11eE3C943DA0"}
          ></BtCopyButton>
          )<br></br>
          <br></br>
          <strong>
            Upon successful transfer, users will receive $MAPO tokens on the MAP
            Protocol at a 1:1 ratio.
          </strong>
          <br></br>
          <br></br>
          <strong>Waiting Time:</strong> 5-10 minutes
          <br></br>
          <br></br>
        </Text>
        <Flex mt={20} gap={10} direction={"column"}>
          <NumberInput
            value={amount}
            placeholder={"Amount"}
            onChange={(value) => {
              setAmount(value as any);
            }}
            w={"100%"}
          ></NumberInput>
          <Text fz={14}>Balance: {userBalance} MAP</Text>
          {chain?.id !== (from?.chain?.id == 1 ? 1 : 56) ? (
            <Button
              onClick={() => {
                switchNetworkAsync &&
                  switchNetworkAsync(from?.chain?.id == 1 ? 1 : 56);
              }}
              w={"100%"}
              c={"black"}
            >
              Switch Network
            </Button>
          ) : (
            <Button
              w={"100%"}
              c={"black"}
              disabled={amount === "" || amount === 0}
              onClick={handleSend}
              loading={loading}
            >
              SEND
            </Button>
          )}
        </Flex>
      </Modal.Body>
    </Modal>
  );
};

export default FlashExchangeModal;
