import { HoursContextProvider } from "./hoursContext";
import { MinutesContextProvider } from "./minutesContext";
import { SecondsContextProvider } from "./secondsContext";

const Providers = ({ children }) => {
  return (
    <SecondsContextProvider>
      <MinutesContextProvider>
        <HoursContextProvider>{children}</HoursContextProvider>
      </MinutesContextProvider>
    </SecondsContextProvider>
  );
};

export default Providers;
