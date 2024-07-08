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
           
            display="block"
            fontSize="24"
            lineHeight="normal"
            fontWeight="semibold"
          >
            Who is the Sigma Chief
          </Text>
          <br />

          <Text fontSize="16px" lineHeight="7">
            He is a final-year student at the Faculty of Law, University of
            Ibadan, with a strong passion for leadership, public relations, and
            philanthropy.
            <br />
            <br />
            He has held various leadership positions on campus, including Public
            Relations Officer for the Faculty of Law and the University of
            Ibadan Student's Union, as well as Majority Leader of the Lord
            Tedder Representative Council.
            <br />
            <br />
            Beyond campus, he currently serves as the Director of Contact,
            Mobilization and Campus Intervention for NANS Oyo.
            <br />
            <br />
            As a PR expert, he runs a successful PR agency and is the founder of
            the renowned Fount Media, leveraging his expertise in public
            relations, and marketing to deliver strategic solutions for clients.
            <br />
            <br />
            With a proven track record of success, he has received numerous
            leadership awards for his outstanding contributions and dedication
            to public service and humanity in general. This is even as he
            remains committed to making a positive impact in his society and the
            world at large through his laudable philanthropic efforts.
            <br />
            <br />
            <Text fontSize="16" fontWeight={500}>
            The Sigma Chief, who embodies the Sigma ideals and tradition, is a respected philanthropist and socialite.
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
