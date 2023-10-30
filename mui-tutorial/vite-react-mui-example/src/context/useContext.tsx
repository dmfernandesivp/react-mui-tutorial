import { useContext } from "react";
import { StateContextProps, StateContext } from "./StateContext";

const useAppState = (): StateContextProps => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppState must be used within a StateProvider");
  }
  return context;
};

export default useAppState;
