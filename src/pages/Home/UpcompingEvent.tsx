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
import SigmaPl from "../../assets/images/events/11thPublicLecture.jpg";
import { isAfter, isBefore, isWithinInterval } from "date-fns";
import React from "react";
import { UpcomingEvent } from "types";

const upcomingEvent: UpcomingEvent = {
  title: "Sigma 11th Public Lecture.",
  description:
    "On July 3, 2025, the University of Ibadan’s Alumni Multipurpose Hall buzzed with energy and ideas as the Sigma Club hosted its 11th Public Lecture. This August event, a cornerstone of the club’s legacy, brought together students, alumni, and distinguished guests to discuss solutions to Nigeria’s pressing challenges. Held in honor of Old Chief Dr. Adesola Adeduntan, former CEO of First Bank Nigeria, the lecture hosted Dr. Karl Toriola, CEO of MTN Nigeria, as the guest speaker. The theme, “Leveraging Technology and Digital Education for Mass Employment, Wealth Creation, and Poverty Alleviation,” struck a chord with everyone present, sparking conversations about Nigeria’s future." +

"\n\n🗓️ July 03, 2025. " +

"\n📍 Alumni Multipurpose Hall, University of Ibadan."+

 "",
  image: SigmaPl,
  startDate: new Date("2025-07-03")
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
