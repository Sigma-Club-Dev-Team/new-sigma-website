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
  Button,
} from "@chakra-ui/react";
import { SigmaScholarship } from "constants/image_assets";
import { format } from "date-fns";
import React from "react";
import { UpcomingEvent } from "types";

const upcomingEvent: UpcomingEvent = {
  title: "Sigma Scholarship Scheme",
  description:
    "Sigma Club is here again! At the heart of our club lies a profound commitment to philanthropy, with the Sigma Scholarship serving as a testament to our unwavering dedication to humanitarian endeavors. Seize this unparalleled opportunity to partake in our noble cause by clicking on this link to apply for the Sigma Scholarship.",
  image: SigmaScholarship,
  startDate: new Date("2023-06-24"),
  endDate: new Date("2023-07-14"),
  url: "https://forms.gle/MRgxTsTPCC1SMahd9",
};

const customDateFormat = "do 'of' MMMM";

export default function UpcomingEvents() {
  return (
    <Container mt={20} maxW={"full"} p={12} bg={"brand.purple"} color={"white"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
{/*           <Heading>Upcoming Event</Heading> */}
          <Heading pb={6} size={"lg"}>
            {upcomingEvent.title}
          </Heading>

          <Text fontSize={20}>
            <p>{upcomingEvent.description}</p>
          </Text>
          <Stack
            direction={useBreakpointValue({ base: "column", sm: "row" })}
            spacing="5px"
            justifyContent={"space-between"}
            paddingTop={5}
          >
            <Box>
              <Text fontSize={20} fontWeight={600}>
                Date: {format(upcomingEvent.startDate, customDateFormat)}{" "}
                {upcomingEvent.endDate &&
                  " - " + format(upcomingEvent.endDate, customDateFormat)}
              </Text>
            </Box>
            {upcomingEvent.venue && (
              <Box>
                <Text fontSize={18}>Venue: Various Locations</Text>
              </Box>
            )}
          </Stack>
          {upcomingEvent.url && (
            <HStack
              spacing="5px"
              justifyContent={"space-between"}
              paddingTop={8}
            >
              <Link fontSize={16} target="_blank" href={upcomingEvent.url}>
                <Button
                  bg="brand.gold"
                  color={"white"}
                  _hover={{ bg: "brand.gold", color: "white" }}
                  fontWeight={"bold"}
                >
                  Apply Now
                </Button>
              </Link>
            </HStack>
          )}
        </Stack>
        <Flex>
          <Image
            rounded={"base"}
            alt={"upcoming event image"}
            src={upcomingEvent.image}
            fit={"contain"}
            maxH={"550px"}
            w={"full"}
            overflow={"hidden"}
            borderRadius={25}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
