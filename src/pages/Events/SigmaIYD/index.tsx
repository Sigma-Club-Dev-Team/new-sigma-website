import React from "react";
import { Container } from "@chakra-ui/react";
import { SigmaIYDJPG } from "../../../constants/image_assets";
import { Flex } from "@chakra-ui/react";

import { Text, Box, Image } from "@chakra-ui/react";

const SigmaIYD = () => {
  return (
    <Container maxW="7xl" className="animate-bottom">
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex="4.5" color="white" p={{ lg: "10", md: "3", sm: "4" }}>
          <Image
            mt={6}
            borderRadius="lg"
            width={{ base: "100%", sm: "100%" }}
            src={SigmaIYDJPG}
            alt="Picture during the walk"
          />
        </Box>
        <Box flex="5.5" p={{ lg: "8", md: "4", sm: "4" }}>
          <Text
            mt={6}
            display="block"
            fontSize="30px"
            lineHeight="normal"
            fontWeight="semibold"
          >
            Sigma Club Hosts Walk Against Drug Abuse
          </Text>
          <br />

          <Text fontSize="16px" lineHeight="normal" textAlign="justify">
            In celebration of International Youth Day, Sigma Club organized a
            walk themed "The Digital Detox: Embracing Digital Solutions to
            Combat Drug Abuse." The event commenced at 10 AM from the SUB Car
            Park, with the Sigma Chief alongside enthusiastic Loyal Sigmites and
            a lively band leading the charge.
            <br />
            <br />
           
            <p>
              The participants marched across the university campus, passing
              through key locations such as Jaja Clinic, various halls of
              residence including Bello Hall, Kuti Hall, Zik Hall, Independence
              Hall, Idia Hall, and Queen's Hall, as well as several faculties.
              On the walk, we carried banners and placards, spreading the
              message: “Say No to Drug Abuse!”
            </p>
           
            <br />
            <p>
              The walk was organized in collaboration with the Anti-Drug Misuse
              and Abuse Program(ADMAP), UI Chapter. Fliers containing helplines
              and practical advice for overcoming drug abuse and addiction were
              distributed to the university community. The walk concluded at the
              school’s main gate, leaving a lasting message on all who witnessed
              the event.
            </p>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default SigmaIYD;
