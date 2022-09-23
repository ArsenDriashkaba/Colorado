import { PALETTE_ACTION_ERROR } from "../../constants/paletteActionNotifications";
import { NOTIFICATION_TYPES } from "../../types";
import toastNotification from "./toastNotifications";

export const handleErrorNotification = (): void =>
  toastNotification(NOTIFICATION_TYPES.Error, PALETTE_ACTION_ERROR);
