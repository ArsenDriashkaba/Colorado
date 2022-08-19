import Image from "next/image";
import { MouseEventHandler } from "react";

import styles from "./IcoTextButton.module.css";

interface Props {
  text: string;
  icoPath: string;
  altIcoText: string;
  onClick: MouseEventHandler;
}

const IcoTextButton = ({
  text,
  icoPath,
  altIcoText,
  onClick,
}: Props): JSX.Element => {
  return (
    <button className={styles.container} onClick={onClick}>
      <div className={styles.imageContainer}>
        <Image
          src={`/static/icons/${icoPath}`}
          alt={altIcoText}
          layout="responsive"
          width={64}
          height={64}
        />
      </div>
      {text}
    </button>
  );
};

export default IcoTextButton;
