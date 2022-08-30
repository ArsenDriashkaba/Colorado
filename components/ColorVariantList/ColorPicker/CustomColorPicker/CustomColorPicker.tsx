import { ColorResult, CustomPicker } from "react-color";
import { Saturation, Hue, Alpha } from "react-color/lib/components/common";
import classNames from "classnames";

import ColorPointer from "../ColorPointer/ColorPointer";
import SaturationPointer from "../SaturationPointer/SaturationPointer";

import { HSL, HSV, RGB } from "../../../../types";

import styles from "./CustomColorPicker.module.css";

interface Props {
  onChange: (color: ColorResult) => void;
  rgb?: RGB;
  hsl?: HSL;
  hsv?: HSV;
}

const MyColorPicker = ({ onChange, rgb, hsl, hsv }: Props): JSX.Element => {
  return (
    <form className={styles.container}>
      <label>
        Saturation
        <div className={classNames(styles.saturation, styles.colorChannel)}>
          <Saturation
            hsl={hsl}
            hsv={hsv}
            onChange={onChange}
            pointer={SaturationPointer}
          />
        </div>
      </label>

      <label>
        Hue
        <div className={classNames(styles.hue, styles.colorChannel)}>
          <Hue hsl={hsl} onChange={onChange} pointer={ColorPointer} />
        </div>
      </label>

      <label>
        Alpha
        <div className={classNames(styles.alpha, styles.colorChannel)}>
          <Alpha
            rgb={rgb}
            hsl={hsl}
            onChange={onChange}
            pointer={ColorPointer}
          />
        </div>
      </label>
    </form>
  );
};

export default CustomPicker(MyColorPicker);
