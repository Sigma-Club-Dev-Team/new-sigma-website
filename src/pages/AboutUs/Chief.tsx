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
          px={{ lg: "8", md: "3", sm: "2" }}
        >
          <Text py={3} fontWeight={500} fontSize={25} color="black">
            The Sigma Chief
          </Text>
          <Image
            mt={3.5}
            borderRadius="lg"
            width={{ lg: "95%", md: "80%", sm: "100%" }}
            src={SigmaChiefJPG}
            alt="presentation of prize"
          />
        </Box>
        <Box
          flex="6"
          py={{ base: "7", lg: "6", md: "4", sm: "4" }}
          px={{ lg: "6", md: "2", sm: "0" }}
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
            He is a final year student of the Faculty of Law in the University
            of Ibadan. He runs a PR agency, OMA brand and subsidiaries. He is
            also an ambassador for various brands like; MyStash, Ohealth,
            SwiftMoney and Mayor Merchant Synergy Enterprise.
            <br />
            <Text fontSize="16" fontWeight={500}>
            He is the embodiment of the Sigma Ideals and tradition as he is a philanthropist and socialite.
            </Text>
            <Text fontSize="20" fontWeight={600} py={8}>
              "The Sigma Chief is The Sigma Club"
            </Text>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Scholarship;
