import toast from "react-hot-toast";

const useToast = () => {
  function toastSuccess(message: string) {
    toast.success(`${message}!`, {
      icon: "👏",
      duration: 3000,
      position: "top-center",
      style: {
        border: "1px solid green",
        padding: "12px",
        color: "white",
        background: "green",
      },
      iconTheme: {
        primary: "white",
        secondary: "white",
      },
    });
  }

  function toastError(message: string) {
    toast.error(`${message}!`, {
      icon: "❌",
      duration: 3000,
      position: "top-center",
      style: {
        border: "1px solid red",
        padding: "12px",
        color: "white",
        background: "red",
      },
      iconTheme: {
        primary: "white",
        secondary: "white",
      },
    });
  }

  function toastInfo(message: string) {
    toast(`${message}`, {
      //   icon: "ℹ️",
      duration: 3000,
      position: "top-center",
    });
  }

  return { toastError, toastSuccess, toastInfo };
};

export { useToast };