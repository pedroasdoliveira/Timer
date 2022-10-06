import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const ResetButton = ({ resetTimer }) => {
  const borderColor = useColorModeValue("#e50a0a", '#7e0e0e');
  const color = useColorModeValue("#e50a0a", '#7e0e0e');
  const borderHover = useColorModeValue("#7e0e0e", '#e50a0a');
  const colorHover = useColorModeValue("#7e0e0e", '#e50a0a');

  return (
    <Button
      variant="outline"
      size="lg"
      borderColor={borderColor}
      color={color}
      _hover={{ borderColor: borderHover, color: colorHover }}
      onClick={resetTimer}
    >
      Cancelar
    </Button>
  );
};

export default ResetButton;
