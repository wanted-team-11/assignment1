import reactDom from "react-dom";
import { ReactNode } from "react";

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById("modal");
  if (!el) return null;
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
