import { useEffect, Dispatch, SetStateAction } from "react";

interface useToastType {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

function useToast({ state, setState }: useToastType) {
  useEffect(() => {
    if (state) {
      setTimeout(() => {
        setState(false);
      }, 1500);
    }
  }, [state, setState]);
}

export default useToast;
