import { createContext, useContext, useState } from "react";

const SecondsContext = createContext();

export const SecondsContextProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(0);

  return (
    <SecondsContext.Provider value={{ seconds, setSeconds }}>
      {children}
    </SecondsContext.Provider>
  );
};

export const useSeconds = () => {
  const Seconds = useContext(SecondsContext);

  return Seconds;
};
