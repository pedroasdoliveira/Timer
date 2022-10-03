import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const ResetButton = ({resetTimer}) => {
  const color = useColorModeValue("whiteAlpha", "facebook");

  return (
    <Button variant="outline" size="lg" colorScheme={color} onClick={resetTimer}>
      Cancelar
    </Button>
  );
};

export default ResetButton;
