import { useEffect } from "react";

import IcoButton from "../IcoButton/IcoButton";
import LinkButton from "../LinkButton/LinkButton";
import Logo from "../Logo/Logo";
import { SiLibrariesdotio } from "react-icons/si";
import { RiRefreshFill, RiSaveFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

import { generateColorPalette } from "../../utils/colors";

import { useColorPaletteContext } from "../../state/colorPaletteContext";
import { PALETTE_ACTIONS } from "../../state/types";
import { BUTTON_TYPES, PaletteState } from "../../types";

import styles from "./Menu.module.css";

const Menu = (): JSX.Element => {
  const { state, dispatch } = useColorPaletteContext();

  const setPalette = (palette?: PaletteState) => {
    const generatedPalette: PaletteState = generateColorPalette(palette);

    dispatch({
      type: PALETTE_ACTIONS.SetPalette,
      payload: { palette: generatedPalette },
    });
  };

  const handleGeneratePalette = () => setPalette(state);

  useEffect(setPalette, [dispatch]);

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
