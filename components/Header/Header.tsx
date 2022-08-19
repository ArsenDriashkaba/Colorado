import IcoTextButton from "../IcoTextButton/IcoTextButton";
import Logo from "../Logo/Logo";

import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.mainHeader}>
      <nav>
        <Logo />
        <IcoTextButton
          text={"Sign In"}
          icoPath={"chromatic.png"}
          altIcoText={"Auth ico"}
          onClick={() => console.log("Logging")}
        />
      </nav>
    </header>
  );
};

export default Header;
