"use client";
import { ActionIcon, Box, Flex, Space, Text, Textarea } from "@mantine/core";
import { useAddressInputPanelStyle } from "./styles";
import IconChecked from "../../components/icons/IconChecked";
import { ChangeEvent, useMemo, useState } from "react";
import { AddressEditorPanelProps } from "./types";
import {
  useAppDispatch,
  useShowAddressEditor,
  useTo,
} from "../../store/hooks";
import {
  toggleAddressEditor,
  updateInputAddress,
} from "../../store/route/routes-slice";
import { useTranslation } from "react-i18next";
import { isIsomericChain } from "../../lib/configs";
import { isAddress } from "viem";

const AddressEditorPanel = ({ }: AddressEditorPanelProps) => {
  const { t } = useTranslation();
  const show = useShowAddressEditor();
  const { classes } = useAddressInputPanelStyle({ show });
  const [address, setAddress] = useState("");
  const to = useTo();
  const handleAddressChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddress(e.target.value);
  };
  const addressChecked = useMemo(() => {
    if (isIsomericChain(Number(to?.chain?.chainId))) {
      return address.length > 0;
    } else {
      return isAddress(address);
    }
  }, [address, to?.chain?.chainId]);

  const dispatch = useAppDispatch();
  const handleTapSave = () => {
    dispatch(updateInputAddress(address));
    dispatch(toggleAddressEditor(false));
  };

  return (
    <Box className={classes.root} bg={"background"}>
      <Flex align={"center"} justify={"space-between"}>
        <Text c={"primary.6"} fz={16} fw={700}>
          {t("receive_address")}:
        </Text>
        <ActionIcon variant="transparent" onClick={handleTapSave}>
          <IconChecked checked={addressChecked}></IconChecked>
        </ActionIcon>
      </Flex>
      <Space h={10}></Space>
      <Textarea
        style={{
          [".mantine-Textarea-input"]: {
            background: "transparent",
          },
        }}
        variant={"filled"}
        value={address}
        onChange={handleAddressChange}
        placeholder={t("enter_address")}
      ></Textarea>
    </Box>
  );
};

export default AddressEditorPanel;
