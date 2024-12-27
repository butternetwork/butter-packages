"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { ActionIcon, Box, Flex, Space, Text, Textarea } from "@mantine/core";
import { useAddressInputPanelStyle } from "./styles";
import IconChecked from "../../components/icons/IconChecked";
import { useMemo, useState } from "react";
import { useAppDispatch, useShowAddressEditor, useTo, } from "../../store/hooks";
import { toggleAddressEditor, updateInputAddress, } from "../../store/route/routes-slice";
import { useTranslation } from "react-i18next";
import { isIsomericChain } from "../../lib/configs";
import { isAddress } from "viem";
const AddressEditorPanel = ({}) => {
    const { t } = useTranslation();
    const show = useShowAddressEditor();
    const { classes } = useAddressInputPanelStyle({ show });
    const [address, setAddress] = useState("");
    const to = useTo();
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };
    const addressChecked = useMemo(() => {
        if (isIsomericChain(Number(to?.chain?.chainId))) {
            return address.length > 0;
        }
        else {
            return isAddress(address);
        }
    }, [address, to?.chain?.chainId]);
    const dispatch = useAppDispatch();
    const handleTapSave = () => {
        dispatch(updateInputAddress(address));
        dispatch(toggleAddressEditor(false));
    };
    return (_jsxs(Box, { className: classes.root, bg: "background", children: [_jsxs(Flex, { align: "center", justify: "space-between", children: [_jsxs(Text, { c: "primary.6", fz: 16, fw: 700, children: [t("receive_address"), ":"] }), _jsx(ActionIcon, { variant: "transparent", onClick: handleTapSave, children: _jsx(IconChecked, { checked: addressChecked }) })] }), _jsx(Space, { h: 10 }), _jsx(Textarea, { style: {
                    [".mantine-Textarea-input"]: {
                        background: "transparent",
                    },
                }, variant: "filled", value: address, onChange: handleAddressChange, placeholder: t("enter_address") })] }));
};
export default AddressEditorPanel;
