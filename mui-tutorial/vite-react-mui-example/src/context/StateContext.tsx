import React, { createContext, useState, ReactNode } from "react";

export interface StateContextProps {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}

export const StateContext = createContext<StateContextProps | undefined>(
  undefined
);

const StateProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState("");

  return (
    <StateContext.Provider value={{ currency, setCurrency }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
