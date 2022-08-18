import Image from "next/image";

import styles from "./IcoTextButton.module.css";

interface Props {
  text: string;
  icoPath: string;
  altIcoText: string;
}

const IcoTextButton = ({ text, icoPath, altIcoText }: Props): JSX.Element => {
  return (
    <button className={styles.container}>
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
