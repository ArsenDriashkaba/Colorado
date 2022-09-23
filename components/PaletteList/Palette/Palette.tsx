import { Dispatch, SetStateAction } from "react";

import IcoButton from "../../IcoButton/IcoButton";
import PaletteColorList from "../PaletteColorList/PaletteColorList";

import { RiDeleteBinFill } from "react-icons/ri";

import { NOTIFICATION_TYPES, PaletteState } from "../../../types";

import axiosClient from "../../../utils/axiosClient";
import { PALETTES } from "../../../constants/apiEndpoints";
import toastNotification from "../../../utils/helpers/toastNotifications";
import { handleErrorNotification } from "../../../utils/helpers/paletteActionNotifications";

import { PALETTE_DELETED_SUCCESSFULLY } from "../../../constants/paletteActionNotifications";

import styles from "./Palette.module.css";

interface Props {
  paletteData: PaletteState;
  deleter: (_id: string) => void;
}

const Palette = ({ paletteData, deleter }: Props): JSX.Element => {
  const { _id, name, colorVariants } = paletteData;

  const deletePalette = (_id: string): void => deleter(_id);

  const handleDeletePalette = async () => {
    try {
      const reqUrl = `${PALETTES}/${_id}`;
      const response = await axiosClient.delete(reqUrl);

      if (!response.data || !_id) {
        handleErrorNotification();

        return;
      }

      deletePalette(_id);

      toastNotification(
        NOTIFICATION_TYPES.Success,
        PALETTE_DELETED_SUCCESSFULLY
      );
    } catch (err) {
      console.log(err);
      handleErrorNotification();
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>{name}</h2>
        <IcoButton
          icon={<RiDeleteBinFill />}
          isDark={true}
          onClick={handleDeletePalette}
        />
      </div>
      <PaletteColorList paletteColors={colorVariants} />
    </div>
  );
};

export default Palette;
