import { createContext, ReactNode, useContext } from "react";
import { useState } from "react";

type ModalContextValueType = {
  isOpen: boolean;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  openModal: (content: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValueType | null>(null);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");

  const openModal = (content: string) => {
    setContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const value = {
    isOpen,
    content,
    setContent,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

export { ModalProvider, useModalContext };
