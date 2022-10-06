import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const StopButton = ({ pauseTimer }) => {
  const bgButton = useColorModeValue("#f6ae55e1", "#dd6c20e5");
  const color = useColorModeValue("#f6ae55e1", "#dd6c20e5");
  const buttonHover = useColorModeValue('#dd6c20', '#f6ae55');
  const buttonColor = useColorModeValue('#dd6c20', '#f6ae55');

  return (
    <Button
      variant="outline"
      size="lg"
      borderColor={bgButton}
      color={color}
      _hover={{ borderColor: buttonHover, color: buttonColor }}
      onClick={pauseTimer}
    >
      Pausar
    </Button>
  );
};

export default StopButton;
