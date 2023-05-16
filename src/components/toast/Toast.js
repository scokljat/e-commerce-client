import { toast } from "react-hot-toast";

export const showToastMessage = (messageText, type) => {
  if (type === "error")
    toast.error(messageText, {
      style: {
        background: "#FFE9E9",
        color: "#82807f",
      },
    });
  else
    toast.success(messageText, {
      style: {
        background: "#45bd62",
        color: "#fff",
      },
    });
};
