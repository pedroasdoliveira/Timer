import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
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

  const [startTimer, setStartTimer] = useState(false);

  const handleStart = () => {
    
  };

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
          <Timer />

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
                onClick={handleStart}
              >
                Começar
              </Button>
            </Flex>
          ) : (
            <Flex
              direction={"row"}
              alignContent={"center"}
              justifyContent={"center"}
              marginTop={16}
            >
              <Button variant="outline" size="lg" colorScheme={color}>
                Pausar
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
