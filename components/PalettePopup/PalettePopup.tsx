import { useRef, useState } from "react";
import Popup from "reactjs-popup";
import { PopupActions } from "reactjs-popup/dist/types";

import styles from "./PalettePopup.module.css";

interface Props {
  trigger: JSX.Element;
}

const PalettePopup = ({ trigger }: Props) => {
  const ref = useRef<PopupActions>(null);

  return (
    <Popup trigger={trigger} ref={ref} closeOnDocumentClick modal nested>
      <div className={styles.content}>
        <input type="text" />
        <button onClick={() => ref?.current?.close()}>Save</button>
      </div>
    </Popup>
  );
};

export default PalettePopup;
