import { ColorValue } from "../../../types";

import styles from "./ColorValue.module.css";

interface Props {
  value: ColorValue;
  isDark: boolean;
}

const ColorValue = ({ value, isDark }: Props): JSX.Element => {
  const { hex } = { ...value };

  return (
    <div className={styles.container}>
      <h3 className={isDark ? styles.darkColor : styles.lightColor}>{hex}</h3>
    </div>
  );
};

export default ColorValue;
