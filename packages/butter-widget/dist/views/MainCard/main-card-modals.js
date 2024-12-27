"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mantine/core";
import { useMainCardModalBox } from "./styles";
import SettingPanel from "./setting-panel";
import AddressEditorPanel from "./address-editor-panel";
import { useAppDispatch, useShowAddressEditor, useShowSetting, } from "../../store/hooks";
import { batch } from "react-redux";
import { toggleAddressEditor, toggleSetting } from "../../store/route/routes-slice";
const MainCardModals = ({}) => {
    const showSetting = useShowSetting();
    const showAddressEditor = useShowAddressEditor();
    const dispatch = useAppDispatch();
    const { classes } = useMainCardModalBox({
        show: showSetting || showAddressEditor,
    });
    return (_jsx(Box, { className: classes.root, children: _jsx(Box, { className: classes.content, children: _jsxs(Box, { className: classes.modalsContent, children: [_jsx(Box, { className: classes.overlay, onClick: () => {
                            batch(() => {
                                dispatch(toggleSetting(false));
                                dispatch(toggleAddressEditor(false));
                            });
                        } }), _jsx(SettingPanel, {}), _jsx(AddressEditorPanel, {})] }) }) }));
};
export default MainCardModals;
