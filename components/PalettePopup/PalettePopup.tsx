import { BaseSyntheticEvent, useRef, useState } from "react";
import Popup from "reactjs-popup";
import { Input } from "@progress/kendo-react-inputs";

import { PopupActions } from "reactjs-popup/dist/types";

import { useColorPaletteContext } from "../../state/colorPaletteContext";
import useInputChange from "../../hooks/useInputChange";

import { PALETTE_ACTIONS } from "../../state/types";
import axiosClient from "../../utils/axiosClient";
import { PALETTES } from "../../constants/apiEndpoints";

import styles from "./PalettePopup.module.css";
import toastNotification from "../../utils/helpers/toastNotifications";
import { NOTIFICATION_TYPES } from "../../types";
import { PALETTE_ACTION_ERROR } from "../../constants/paletteActionNotifications";

interface Props {
  trigger: JSX.Element;
}

const handleErrorNotification = (): void =>
  toastNotification(NOTIFICATION_TYPES.Error, PALETTE_ACTION_ERROR);

const PalettePopup = ({ trigger }: Props): JSX.Element => {
  const ref = useRef<PopupActions>(null);
  const { state, dispatch } = useColorPaletteContext();
  const { inputValue: paletteName, handleChange } = useInputChange(state.name);

  const handleSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    try {
      const reqData = { ...state, name: paletteName };
      const response = await axiosClient.post(PALETTES, reqData);

      if (response.data) {
        toastNotification(NOTIFICATION_TYPES.Success, response.data);

        dispatch({
          type: PALETTE_ACTIONS.SetName,
          payload: { name: paletteName },
        });
      } else {
        handleErrorNotification();
      }

      ref?.current?.close();
    } catch (err) {
      console.log(err);
      handleErrorNotification();
    }
  };

  return (
    <Popup trigger={trigger} ref={ref} closeOnDocumentClick modal nested>
      <form className={styles.content} onSubmit={handleSubmit}>
        <Input
          placeholder="Palette Name"
          value={paletteName}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </Popup>
  );
};

export default PalettePopup;
