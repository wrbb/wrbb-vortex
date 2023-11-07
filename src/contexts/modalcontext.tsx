import { createContext } from "react";

interface ModalContextType {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
  setOnSubmit: React.Dispatch<React.SetStateAction<() => void>>;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
