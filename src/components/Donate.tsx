import React from "react";
import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const DoanteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        display={{ base: "inline-flex" }}
        fontSize={"md"}
        fontWeight={600}
        color={"white"}
        bg={"brand.purple"}
        _hover={{bg: "brand.purple"}}
        onClick={onOpen}
      >
        Donation
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading as="h1" size="xl">
              Donate to Charity
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="xl" fontWeight={"bold"}>
              Sigma Club Account Details
            </Text>{" "}
            <br />
            <Text fontSize="lg">Account Number: 0018214279</Text> <br />
            <Text fontSize="lg">Bank Name: Access Bank </Text> <br />
            <Text fontSize="lg">Account Name: SIGMA CLUB UI</Text> <br />
          </ModalBody>

          <ModalFooter>
            <Button
              bg={"brand.purple"}
              color={"white"}
              _hover={{ bg: "brand.purple", color: "white" }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DoanteModal;
