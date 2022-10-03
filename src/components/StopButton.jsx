import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const StopButton = ({pauseTimer}) => {
  const color = useColorModeValue("whiteAlpha", "facebook");

  return (
    <Button variant="outline" size="lg" colorScheme={color} onClick={pauseTimer}>
      Pausar
    </Button>
  );
};

export default StopButton;
