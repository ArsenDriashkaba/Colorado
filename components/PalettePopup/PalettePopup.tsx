import { BaseSyntheticEvent, useRef, useState } from "react";
import Popup from "reactjs-popup";
import { Input } from "@progress/kendo-react-inputs";

import { PopupActions } from "reactjs-popup/dist/types";

import { useColorPaletteContext } from "../../state/colorPaletteContext";
import useInputChange from "../../hooks/useInputChange";

import styles from "./PalettePopup.module.css";

interface Props {
  trigger: JSX.Element;
}

const PalettePopup = ({ trigger }: Props): JSX.Element => {
  const ref = useRef<PopupActions>(null);
  const { state, dispatch } = useColorPaletteContext();
  const { inputValue: paletteName, handleChange } = useInputChange(state.name);

  const handleSubmit = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    /*
    TODO:
      - On Submit form we change name of palette in the context
      - Next we create post request to our DB and trying to push our palette.
      - We will receive some message if it was succesfull or not.
      - Show the result to user.
    */

    ref?.current?.close();
  };

  return (
    <Popup trigger={trigger} ref={ref} closeOnDocumentClick modal nested>
      <form className={styles.content}>
        <Input
          placeholder="Palette Name"
          value={paletteName}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </Popup>
  );
};

export default PalettePopup;
