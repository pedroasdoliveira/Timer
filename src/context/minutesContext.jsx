import { createContext, useState, useContext } from "react";

const MinutesContext = createContext();

export const MinutesContextProvider = ({ children }) => {
    const [minutes, setMinutes] = useState(0);

  return (
    <MinutesContext.Provider value={{ minutes, setMinutes }}>
      {children}
    </MinutesContext.Provider>
  );
};

export const useMinutes = () => {
  const Minutes = useContext(MinutesContext);

  return Minutes;
};
