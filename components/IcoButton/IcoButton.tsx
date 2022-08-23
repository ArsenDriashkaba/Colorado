import { MouseEventHandler, ReactNode } from "react";
import { IconContext } from "react-icons";

import styles from "./IcoButton.module.css";

interface Props {
  text?: string;
  icon: ReactNode;
  onClick?: MouseEventHandler;
}

const IcoTextButton = ({ text, icon, onClick }: Props): JSX.Element => {
  const iconSize = text ? "2.5rem" : "5rem";

  return (
    <button className={styles.container} onClick={onClick}>
      <IconContext.Provider
        value={{ className: styles.iconDark, size: iconSize }}
      >
        {icon}
      </IconContext.Provider>
      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
};

export default IcoTextButton;
