import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  MoonIcon,
  SunIcon,
  TriangleUpIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import Timer from "./components/Timer";

function App() {
  const { toggleColorMode } = useColorMode();
  const [toggleColor, setToggleColor] = useState(false);

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3b49da 31.73%, rgba(42, 52, 163, 0.49) 72.68%)",
    "linear-gradient(97.85deg, rgba(12, 23, 87, 0.94) 40.22%, rgba(62, 72, 125, 0.49) 68.56%)"
  );
  const cardBorder = useColorModeValue("#1d1d31", "#8e6dd1");

  const handleChangeColor = () => {
    toggleColorMode();
    setToggleColor(!toggleColor);
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

          <Flex
            direction={"row"}
            alignContent={"center"}
            justifyContent={"center"}
            marginTop={16}
          >
            <Button variant="outline">Começar</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
