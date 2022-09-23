import { toast, ToastOptions } from "react-toastify";

import { NOTIFICATION_TYPES } from "../../types";

const toastNotification = (type: NOTIFICATION_TYPES, text: string): void => {
  const config: ToastOptions = {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  switch (type) {
    case NOTIFICATION_TYPES.Info:
      toast.info(text, config);
      return;
    case NOTIFICATION_TYPES.Success:
      toast.success(text, config);
      return;
    case NOTIFICATION_TYPES.Warning:
      toast.warn(text, config);
      return;
    case NOTIFICATION_TYPES.Error:
      toast.error(text, config);
      return;
    default:
      toast(text, config);
      return;
  }
};

export default toastNotification;
