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
import { GuestLuncheon } from "constants/image_assets";
import { isAfter, isBefore, isWithinInterval } from "date-fns";
import React from "react";
import { UpcomingEvent } from "types";

const upcomingEvent: UpcomingEvent = {
  title: "Sigma Guest Luncheon",
  description:
    "Sigma Club celebrates excellence and honor as we induct the distinguished Sir Kesington Adebukunola Adebutu (OON, CON, CFR, KJW, FISM, FNIJ, FAmedS, Odole-Oodua of the Source) into the Sigma Roll of Honour at our Sigma Guest Luncheon " +

"\n\n🗓️ October 25, 2023. " +

"\n📍 The Civic Centre Ozumba Mbadiwe Road, Victoria Island, Lagos."+

 "\n\n Strictly by Invitation \n ...for all that is pure 💜💛",
  image: GuestLuncheon,
  startDate: new Date("2023-10-25")
};

// const customDateFormat = "do 'of' MMMM";

const getStatus = () => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  upcomingEvent.startDate.setHours(0, 0, 0, 0);
  upcomingEvent.endDate?.setHours(0, 0, 0, 0);
  
  if (isBefore(today, upcomingEvent.startDate)) {
    return "Upcoming";
  }

  if (
    upcomingEvent.endDate &&
    isWithinInterval(today, {
      start: upcomingEvent.startDate,
      end: upcomingEvent.endDate,
    })
  ) {
    return "Ongoing"
  }

  if (isAfter(today, upcomingEvent.endDate ?? upcomingEvent.startDate)) {
    return "Recent";
  }

  return "Upcoming"
}

export default function UpcomingEvents() {


  return (
    <Container mt={20} maxW={"full"} p={{ base: '3', md: '6', lg: '9' }} bg={"brand.purple"} color={"white"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>{getStatus()} Event</Heading>
          <Heading pt={8} as="h3" pb={6} size={"lg"}>
            {upcomingEvent.title}
          </Heading>

          <Text fontSize={20}>
            <p style={{whiteSpace: "pre-line"}}>{upcomingEvent.description}</p>
          </Text>
          <Stack
            direction={useBreakpointValue({ base: "column", sm: "row" })}
            spacing="5px"
            justifyContent={"space-between"}
            paddingTop={5}
          >
            {/* <Box>
              <Text fontSize={20} fontWeight={600}>
                Date: {format(upcomingEvent.startDate, customDateFormat)}{" "}
                {upcomingEvent.endDate &&
                  " - " + format(upcomingEvent.endDate, customDateFormat)}
              </Text>
            </Box>   */}
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
