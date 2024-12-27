"use client";
import { Box } from "@mantine/core";
import { useMainCardModalBox } from "./styles";
import { MainCardModalsProps } from "./types";
import SettingPanel from "./setting-panel";
import AddressEditorPanel from "./address-editor-panel";
import {
  useAppDispatch,
  useShowAddressEditor,
  useShowSetting,
} from "../../store/hooks";
import { batch } from "react-redux";
import { toggleAddressEditor, toggleSetting } from "../../store/route/routes-slice";

const MainCardModals = ({ }: MainCardModalsProps) => {
  const showSetting = useShowSetting();
  const showAddressEditor = useShowAddressEditor();
  const dispatch = useAppDispatch();
  const { classes } = useMainCardModalBox({
    show: showSetting || showAddressEditor,
  });

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.modalsContent}>
          <Box
            className={classes.overlay}
            onClick={() => {
              batch(() => {
                dispatch(toggleSetting(false));
                dispatch(toggleAddressEditor(false));
              });
            }}
          ></Box>
          <SettingPanel></SettingPanel>
          <AddressEditorPanel></AddressEditorPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default MainCardModals;
