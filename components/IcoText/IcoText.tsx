import Image from "next/image";

import styles from "./IcoText.module.css";

interface Props {
  text: string;
  icoPath: string;
  altIcoText: string;
}

const IcoText = ({ text, icoPath, altIcoText }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default IcoText;
