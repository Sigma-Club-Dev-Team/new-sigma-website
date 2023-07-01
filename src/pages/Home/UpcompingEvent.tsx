import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  Link,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SigmaScholarship } from "constants/image_assets";
import React from "react";

export default function UpcomingEvents() {
  return (
    <Container mt={20} maxW={"full"} p={12} bg={"brand.purple"} color={"white"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Upcoming Event</Heading>
          <Text
            color={"white"}
            fontWeight={600}
            fontSize={20}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Sigma Scholarship Scheme
          </Text>
          <Text fontSize={16}>
            <p>
              Sigma Club is organizing another quiz competition for all
              available secondary schools across the six states in the
              south-west region of Nigeria (Lagos, Ogun, Oyo, Osun, Ondo and
              Ekiti States).{" "}
            </p>{" "}
            <br />
            <p>
              There are various prices to be won by the performances of each
              school which includes cash prices and other beneficiaries.
            </p>
          </Text>
          <Stack
            direction={useBreakpointValue({ base: "column", sm: "row" })}
            spacing="5px"
            justifyContent={"space-between"}
            paddingTop={5}
          >
            <Box>
              <Text fontSize={18}>Date: 24th of June - 14th of July</Text>
            </Box>
            {/* <Box>
              <Text fontSize={18}>Venue: Various Locations</Text>
            </Box> */}
          </Stack>
          <HStack spacing="5px" justifyContent={"space-between"} paddingTop={2}>
            <Link color="brand.gold" fontSize={16} href="#">
              View more Details
            </Link>
          </HStack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={SigmaScholarship}
            fit={"contain"}
            maxH={"600px"}
            w={"full"}
            overflow={"hidden"}
            borderRadius={15}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
