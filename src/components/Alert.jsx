import {
  AlertDialog, AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useColorModeValue
} from "@chakra-ui/react";
import { useRef } from "react";

const AlertTimer = ({openModal, closeModal}) => {
  const cancelRef = useRef();

  const background = useColorModeValue(
    "#3b49da90",
    "#33407c30"
  )

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      isCentered
      leastDestructiveRef={cancelRef}
      onClose={closeModal}
      isOpen={openModal}
    >
      <AlertDialogOverlay opacity={"60%"} />
      <AlertDialogContent
        bg={background}
      >
        <AlertDialogHeader textAlign={"center"}>
          Acabou o tempo!
        </AlertDialogHeader>
        <AlertDialogFooter display={"flex"} justifyContent={"center"}>
          <Button bg={"transparent"} ref={cancelRef} onClick={closeModal}>
            Fechar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertTimer;
