import IcoButton from "../../IcoButton/IcoButton";
import ColorValue from "../ColorValue/ColorValue";
import { FaLockOpen, FaLock, FaSlidersH } from "react-icons/fa";

import styles from "./ColorVariant.module.css";

const ColorVariant = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <ColorValue />
      <IcoButton icon={<FaLockOpen />} />
      <IcoButton icon={<FaSlidersH />} />
    </div>
  );
};

export default ColorVariant;
