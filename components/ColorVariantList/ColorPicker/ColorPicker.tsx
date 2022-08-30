import { MouseEventHandler } from "react";
import { GrFormClose } from "react-icons/gr";

import useHandleColorChange from "../../../hooks/useHandleColorChange";

import IcoButton from "../../IcoButton/IcoButton";
import CustomColorPicker from "./CustomColorPicker/CustomColorPicker";

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

      <CustomColorPicker onChange={handleChange} color={colorState} />
    </div>
  );
};

export default ColorPicker;
