import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function App() {
  const { toggleColorMode } = useColorMode();
  const [ toggleColor, setToggleColor ] = useState(false);

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(12, 23, 87, 0.94) 20.22%, rgba(26, 37, 91, 0.49) 100%)"
  );

  const [count, setCount] = useState(0);

  const handleChangeColor = () => {
    toggleColorMode();
    setToggleColor(!toggleColor);
  }

  return (
    <Flex
      as="main"
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100vw"}
      minH={"100vh"}
      bg={background}
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
        justifyContent={"center"}
        w={"65%"}
        h={"450px"}
        border={"1px solid #000"}
        p={4}
      >
        <Flex
          direction={"row"}
        >
          
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
