import { MouseEventHandler } from "react";
import useHandleColorChange from "../../../hooks/useHandleColorChange";
import { ChromePicker } from "react-color";

import IcoButton from "../../IcoButton/IcoButton";
import { GrFormClose } from "react-icons/gr";

import chromePickerStyles from "./styles";
import styles from "./ColorPicker.module.css";

interface Props {
  colorVariantId: number;
  handleClose: MouseEventHandler;
}

const ColorPicker = ({ colorVariantId, handleClose }: Props): JSX.Element => {
  const [colorState, handleChange] = useHandleColorChange(colorVariantId);

  return (
    <div className={styles.pickerContainer}>
      <div className={styles.closeButtonContainer}>
        <IcoButton icon={<GrFormClose />} isDark={true} onClick={handleClose} />
      </div>

      <ChromePicker
        styles={chromePickerStyles}
        color={colorState}
        onChange={handleChange}
      />
    </div>
  );
};

export default ColorPicker;
