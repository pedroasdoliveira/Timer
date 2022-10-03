import { Button, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const StartButton = ({startTimer}) => {
    const color = useColorModeValue("whiteAlpha", "facebook");

  return (
    <Button variant="outline" size="lg" colorScheme={color} onClick={startTimer}>
        Iniciar
    </Button>
  )
}

export default StartButton