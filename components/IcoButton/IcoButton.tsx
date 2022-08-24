import { MouseEventHandler, ReactNode } from "react";
import { IconContext } from "react-icons";

import styles from "./IcoButton.module.css";

interface Props {
  text?: string;
  icon: ReactNode;
  onClick?: MouseEventHandler;
  isDark: boolean;
}

const IcoButton = ({ text, icon, onClick, isDark }: Props): JSX.Element => {
  const iconSize = text ? "2.5rem" : "4.2rem";

  return (
    <button className={styles.container} onClick={onClick}>
      <IconContext.Provider
        value={{
          className: isDark ? styles.iconDark : styles.iconLight,
          size: iconSize,
        }}
      >
        {icon}
      </IconContext.Provider>
      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
};

export default IcoButton;
