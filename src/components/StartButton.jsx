import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const StartButton = ({ startTimer }) => {
  const borderColor = useColorModeValue("#30eae1", "#058b92");
  const color = useColorModeValue("#124f5b", '#76E4F7');
  const borderHover = useColorModeValue('#234E52', '#4FD1C5');
  const colorHover = useColorModeValue('#9DECF9', '#00A3C4');

  return (
    <Button
      variant="outline"
      borderColor={borderColor}
      color={color}
      size="lg"
      _hover={{borderColor: borderHover, color: colorHover}}
      onClick={startTimer}
    >
      Iniciar
    </Button>
  );
};

export default StartButton;
