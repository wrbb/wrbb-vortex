import Cookies from "js-cookie";
import { useContext } from "react";
import { ModalContext } from "../contexts/modalcontext";

// If isAuthenticated, do an action, else show password modal
const useAuthenticatedAction = (action: () => void) => {
  const modalContext = useContext(ModalContext);
  const isAuthenticated = Cookies.get("isAuthenticated");

  const handleAction = () => {
    if (isAuthenticated === "true") {
      action();
    } else {
      modalContext?.setOnSubmit(() => action);
      modalContext?.setOpen(true);
    }
  };

  return handleAction;
};

export default useAuthenticatedAction;
