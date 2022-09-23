import IcoButton from "../IcoButton/IcoButton";
import LinkButton from "../LinkButton/LinkButton";
import Logo from "../Logo/Logo";
import PalettePopup from "../PalettePopup/PalettePopup";

import { SiLibrariesdotio } from "react-icons/si";
import { RiRefreshFill, RiSaveFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

import { BUTTON_TYPES } from "../../types";
import useGenerateColorPalette from "../../hooks/useGenerateColorPalette";

import styles from "./Menu.module.css";

const Menu = (): JSX.Element => {
  const { handleGeneratePalette } = useGenerateColorPalette();
  return (
    <nav className={styles.container}>
      <Logo />

      <ul className={styles.menuWrapper}>
        <li>
          <LinkButton
            text={"Library"}
            icon={<SiLibrariesdotio />}
            isDark={true}
            href={"/library"}
            type={BUTTON_TYPES.IconButton}
          />
        </li>

        <li>
          <ul>
            <li>
              <IcoButton
                text="Generate"
                icon={<RiRefreshFill />}
                isDark={true}
                onClick={handleGeneratePalette}
              />
            </li>
            <li>
              <PalettePopup
                trigger={
                  <IcoButton text="Save" icon={<RiSaveFill />} isDark={true} />
                }
              />
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
