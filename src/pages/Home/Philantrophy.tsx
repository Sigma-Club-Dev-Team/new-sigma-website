import React from "react";
import { Stack, Container, Box, Flex, Text, Heading } from "@chakra-ui/react";
import PhilantrophyCard from "./PhilantrophyCard";
import { PhilantrophyActivity } from "types";
import { ImageAssets } from "constants/image_assets";

const PhilantrophyObj: PhilantrophyActivity[] = [
  {
    image: ImageAssets.SecSchoolQuizWinnerJPG,
    name: "Roseline Etuokwu Sigma Secondary School Quiz Competition",
    description:
      "The Sigma club organizes a wide range quiz competition for secondary schools",
    link: "events/quiz-competition",
  },
  {
    image: ImageAssets.SigmaHealthOutreachJPG,
    name: "Sigma Health Outreach.",
    description:
      "The health outreach was aimed at promoting good health practices among the student body. It provided an opportunity for students to get free medical checkups, health screenings, scaling and polishing and access to health education resources. Our objectives for the Health Outreach event were clear. We aimed to offer scaling and polishing services to enhance oral hygiene; provide free HIV and syphilis screening to promote sexual health awareness; conduct mental health assistance and conduct vital signs checks to identify potential health concerns and offer guidance.",
    link: "events/health-outreach",
  },
  {
    image: ImageAssets.SigmaLogoJPG,
    name: "Sigma Scholarship Scheme",
    description:
      "This scheme awards Undergraduate and Post-graduate scholarships to deserving indigent students to enable them complete their education.",
    link: "events/scholarship",
  },
];

export default function Philantrophy() {
  return (
    <Box>
      <Container maxW={"6xl"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            pt={{ base: 10, md: 20, xl: 40 }}
          >
            <Box>
              <Heading
                color={"black"}
                mb={5}
                fontSize={{ base: "2xl", md: "4xl" }}
              >
                Our Philanthropic Activities
              </Heading>
              <Text fontSize={"16"} color={"brand.text_black"}>
                One of our core traditions/belief in Sigma Club is Philanthropy.
                Here are some of our humanitarian activities both within the
                University campus and beyond.
              </Text>
            </Box>
          </Stack>
        </Stack>

        <Container maxW={"full"} my={4}>
          <Flex flexWrap="wrap" gridGap={6} justify="left">
            {PhilantrophyObj.map((philantrophyActivity) => (
              <PhilantrophyCard philantrophyActivity={philantrophyActivity} />
            ))}
          </Flex>
        </Container>
      </Container>
    </Box>
  );
}
