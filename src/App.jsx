import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Howl } from "howler";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import AlertTimer from "./components/Alert";
import ResetButton from "./components/ResetButton";
import StartButton from "./components/StartButton";
import StopButton from "./components/StopButton";
import Timer from "./components/Timer";
import { useHours } from "./context/hoursContext";
import { useMinutes } from "./context/minutesContext";
import { useSeconds } from "./context/secondsContext";
import StartDustAlarm from "./sound/start-dust-alarm.mp3";

function App() {
  const { toggleColorMode } = useColorMode();
  const [toggleColor, setToggleColor] = useState(false);

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3b49da 31.73%, #2a34a37c 72.68%)",
    "linear-gradient(97.85deg, #23338aef 40.22%, #33407c7c 68.56%)"
  );
  const bgColor = useColorModeValue("#23328a59", "#3b48dac6");
  const colorButton = useColorModeValue("#081b34", "#8b9fee");
  const buttonHover = useColorModeValue("#9884f1", "#1c192d");
  const buttonColor = useColorModeValue("#f4f5f9", "#11121b");

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

  const sound = new Howl({
    src: StartDustAlarm,
    loop: true,
    onstop: true,
    volume: 1,
  });

  const handleCloseModal = () => {
    setModalTimer(false);
    sound.stop();
  };

  useEffect(() => {
    if (modalTimer === true) {
      sound.play();
    }
  }, [modalTimer]);

  const handleStartTimer = () => {
    if (seconds > 0 || minutes > 0 || hours > 0) {
      setChooseTime(false);
      setStartTimer(true);
      setStopTimer(false);
    } else {
      if (toggleColor === false) {
        toast.error("Coloque algum valor no Timer!");
      } else {
        toast.error("Coloque algum valor no Timer!", {
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
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

      <Flex w={"80%"} h={"450px"} p={4}>
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
                bg={bgColor}
                borderColor={"transparent"}
                color={colorButton}
                _hover={{ borderColor: buttonHover, color: buttonColor }}
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
      <Toaster position="bottom-right" reverseOrder={false} />

      {modalTimer ? (
        <AlertTimer openModal={modalTimer} closeModal={handleCloseModal} />
      ) : (
        ""
      )}
    </Flex>
  );
}

export default App;
