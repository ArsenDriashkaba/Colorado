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

interface Props {
  trigger: JSX.Element;
}

const PalettePopup = ({ trigger }: Props): JSX.Element => {
  const ref = useRef<PopupActions>(null);
  const { state, dispatch } = useColorPaletteContext();
  const { inputValue: paletteName, handleChange } = useInputChange(state.name);

  const handleSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    try {
      const reqData = { ...state, name: paletteName };
      const response = await axiosClient.post(PALETTES, reqData);
      console.log(response.data);

      dispatch({
        type: PALETTE_ACTIONS.SetName,
        payload: { name: paletteName },
      });

      ref?.current?.close();
    } catch (err) {
      console.log(err);
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
