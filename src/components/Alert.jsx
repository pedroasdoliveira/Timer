import {
    AlertDialog, AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button
} from "@chakra-ui/react";
import { useRef } from "react";

const AlertTimer = ({openModal, closeModal}) => {
  const cancelRef = useRef();

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      isCentered
      leastDestructiveRef={cancelRef}
      onClose={closeModal}
      isOpen={openModal}
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader textAlign={"center"}>
          Acabou o tempo!
        </AlertDialogHeader>
        <AlertDialogCloseButton onClick={closeModal} />
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={closeModal}>
            Fechar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertTimer;
