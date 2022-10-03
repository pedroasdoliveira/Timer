import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalTimer from "./components/Modal";
import ResetButton from "./components/ResetButton";
import StartButton from "./components/StartButton";
import StopButton from "./components/StopButton";
import Timer from "./components/Timer";
import { useHours } from "./context/hoursContext";
import { useMinutes } from "./context/minutesContext";
import { useSeconds } from "./context/secondsContext";

function App() {
  const { toggleColorMode } = useColorMode();
  const [toggleColor, setToggleColor] = useState(false);

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3b49da 31.73%, rgba(42, 52, 163, 0.49) 72.68%)",
    "linear-gradient(97.85deg, rgba(12, 23, 87, 0.94) 40.22%, rgba(62, 72, 125, 0.49) 68.56%)"
  );
  const cardBorder = useColorModeValue("#1d1d31", "#8e6dd1");
  const color = useColorModeValue("whiteAlpha", "facebook");

  const handleChangeColor = () => {
    toggleColorMode();
    setToggleColor(!toggleColor);
  };

  const { seconds, setSeconds } = useSeconds();
  const { minutes, setMinutes } = useMinutes();
  const { hours, setHours } = useHours();

  const [chooseTime, setChooseTime] = useState(true);
  const [startTimer, setStartTimer] = useState(false);
  const [stopTimer, setStopTimer] = useState(null);
  const [modalTimer, setModalTimer] = useState(false);

  const handleCloseModal = () => {
    setModalTimer(false);
  }

  const handleStartTimer = () => {
    if (seconds > 0 || minutes > 0 || hours > 0) {
      setChooseTime(false);
      setStartTimer(true);
      setStopTimer(false);
    } else {
      alert("Coloque algum valor no cronometro!");
    }
  };

  const handleStopTimer = () => {
    setStopTimer(!stopTimer);
  };

  const handleResetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setChooseTime(true);
    setStopTimer(null);
    setStartTimer(false);
  };

  const hoursTime = () => {
    if (hours > 0) {
      setSeconds(59);
      setMinutes(59);
      setHours(hours - 1);
    }
  };

  const minutesTime = () => {
    if (minutes > 0) {
      setSeconds(59);
      setMinutes(minutes - 1);

      if (minutes === 0) {
        hoursTime();
      }
    } else if (minutes === 0 && hours > 0) {
      hoursTime();
    }
  };

  const timerWatch = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);

      if (seconds === 0) {
        minutesTime();
      }
    } else if ((seconds === 0 && minutes > 0) || hours > 0) {
      minutesTime();
    } else {
      setChooseTime(true);
      setStartTimer(false);
      setSeconds(0);
      setMinutes(0);
      setModalTimer(true);
    }
  };

  useEffect(() => {
    if (startTimer === true && stopTimer === false) {
      const time = setInterval(() => {
        timerWatch();
      }, 1000);
      return () => clearInterval(time);
    }
  });

  return (
    <Flex
      as="main"
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100vw"}
      minH={"100vh"}
      bg={background}
      cursor={"default"}
    >
      <Box
        as="i"
        position={"absolute"}
        top={6}
        right={12}
        cursor={"pointer"}
        onClick={handleChangeColor}
      >
        {toggleColor ? <SunIcon /> : <MoonIcon />}
      </Box>

      <Flex
        w={"80%"}
        h={"450px"}
        border={`1px solid ${cardBorder}`}
        borderRadius={15}
        p={4}
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          w={"100%"}
          h={"100%"}
        >
          <Timer chooseTime={chooseTime} />

          {!startTimer ? (
            <Flex
              direction={"row"}
              alignContent={"center"}
              justifyContent={"center"}
              marginTop={16}
            >
              <Button
                variant="outline"
                size="lg"
                colorScheme={color}
                onClick={handleStartTimer}
              >
                Começar
              </Button>
            </Flex>
          ) : (
            <Flex
              direction={"row"}
              alignContent={"center"}
              justifyContent={"center"}
              gap={12}
              marginTop={16}
            >
              {!stopTimer ? (
                <StopButton pauseTimer={handleStopTimer} />
              ) : (
                <StartButton startTimer={handleStopTimer} />
              )}

              <ResetButton resetTimer={handleResetTimer} />
            </Flex>
          )}
        </Flex>
      </Flex>

      {modalTimer ? <ModalTimer openModal={modalTimer} closeModal={handleCloseModal} /> : ""}
    </Flex>
  );
}

export default App;
