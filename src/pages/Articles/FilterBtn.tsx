import React from "react";
import { Button, Container } from "@chakra-ui/react";

const FilterBtn = () => {
  return (
    <Container maxW="container.xlg" my={10}>
      <Button borderRadius="full" colorScheme="purple" p={5} m={3}>
        News on Sigma Scholarship
      </Button>

      <Button borderRadius="full" colorScheme="purple" p={5} m={3}>
        Transistion of Technology into Web3
      </Button>

      <Button borderRadius="full" colorScheme="purple" p={5} m={3}>
        News on Sigma Quiz Competition
      </Button>
    </Container>
  );
};
export default FilterBtn;
