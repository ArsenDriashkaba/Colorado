import Link from "next/link";

import styles from "./Logo.module.css";

const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <a>
        <h1 className={styles.wrapper}>
          <span className={styles.c}>C</span>
          <span className={styles.o}>O</span>
          <span className={styles.l}>L</span>
          <span className={styles.o2}>O</span>
          <span className={styles.r}>R</span>
          <span className={styles.rest}>ado</span>
        </h1>
      </a>
    </Link>
  );
};

export default Logo;
