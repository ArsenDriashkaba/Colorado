import IcoButton from "../IcoButton/IcoButton";
import Logo from "../Logo/Logo";
import { FaUser } from "react-icons/fa";

import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.mainHeader}>
      <nav>
        <Logo />
        <IcoButton
          text={"Sign In"}
          icon={<FaUser />}
          onClick={() => console.log("Logging")}
        />
      </nav>
    </header>
  );
};

export default Header;
