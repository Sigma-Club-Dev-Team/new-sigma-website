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
} from "@chakra-ui/react";
import EventImg from "../assets/upcoming-quiz.jpg";

export default function UpcomingEvents() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"white"}
            fontWeight={800}
            fontSize={"sm"}
            bg={"brand.purple"}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Upcoming Event
          </Text>
          <Heading>SouthWest Region Secondary school Quiz competition</Heading>
          <Text color={"gray.700"} fontSize={"lg"}>
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
          <HStack spacing="5px" justifyContent={"space-between"} paddingTop={5}>
            <Box>
              <Text color={"gray.700"} fontSize={"lg"}>
                Date: 10th of May - 30th of May
              </Text>
            </Box>
            <Box>
              <Text color={"gray.700"} fontSize={"lg"}>
                Venue: Various Locations
              </Text>
            </Box>
          </HStack>
          <HStack spacing="5px" justifyContent={"space-between"} paddingTop={5}>
            <Link color="brand.gold" href="#">
              View more Details
            </Link>
          </HStack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={EventImg}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
