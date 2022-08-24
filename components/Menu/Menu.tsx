import IcoButton from "../IcoButton/IcoButton";
import Logo from "../Logo/Logo";
import { SiLibrariesdotio } from "react-icons/si";
import { RiRefreshFill, RiSaveFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

import styles from "./Menu.module.css";

const Menu = (): JSX.Element => {
  return (
    <nav className={styles.container}>
      <Logo />

      <ul className={styles.menuWrapper}>
        <li>
          <IcoButton text="Library" icon={<SiLibrariesdotio />} isDark={true} />
        </li>

        <li>
          <ul>
            <li>
              <IcoButton
                text="Generate"
                icon={<RiRefreshFill />}
                isDark={true}
              />
            </li>
            <li>
              <IcoButton text="Save" icon={<RiSaveFill />} isDark={true} />
            </li>
          </ul>
        </li>

        <li>
          <IcoButton text="Sign In" icon={<FaUser />} isDark={true} />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
