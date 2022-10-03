import { createContext, useContext, useState } from "react";

const HoursContext = createContext();

export const HoursContextProvider = ({ children }) => {
    const [hours, setHours] = useState(0);

  return (
    <HoursContext.Provider value={{ hours, setHours }}>
      {children}
    </HoursContext.Provider>
  );
};

export const useHours = () => {
  const Hours = useContext(HoursContext);

  return Hours;
};
