import React from "react";
import { Container } from "@chakra-ui/react";

import { SigmaChiefJPG } from "constants/image_assets";
import { Flex } from "@chakra-ui/react";

import { Text, Box, Image } from "@chakra-ui/react";

const Scholarship = () => {
  return (
    <Container maxW="7xl" className="animate-bottom" mb={20} px={10}>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box
          flex="4"
          color="white"
          py={{ lg: "4", md: "3", sm: "4" }}
          px={{ lg: "8", md: "3", sm: "4" }}
        >
          <Text py={3} fontWeight={500} fontSize={25} color="black">
            The Sigma Chief
          </Text>
          <Image
            mt={3.5}
            borderRadius="lg"
            width={{ lg: "95%", md: "80%", sm: "90%" }}
            src={SigmaChiefJPG}
            alt="presentation of prize"
          />
        </Box>
        <Box
          flex="6"
          py={{ base: "7", lg: "6", md: "4", sm: "4" }}
          px={{ lg: "6", md: "2", sm: "1" }}
        >
          <Text
            mt={{ lg: "40", md: "35%", sm: "5%" }}
            display="block"
            fontSize="24"
            lineHeight="normal"
            fontWeight="semibold"
          >
            Who is the Sigma Chief
          </Text>
          <br />

          <Text fontSize="16px" lineHeight="7">
            He is a final year student of the Department of Linguistics and
            African Languages, Faculty of Arts. He assists in discovering
            relevant content and visual issues, participates in numerous test
            cases, and contributes to Tester Work with published software
            testing publications.
            <br />
            <Text fontSize="20" fontWeight={500} py={10}>
              "The Sigma Chief is the Embodiment of Sigma Traditions"
            </Text>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Scholarship;
