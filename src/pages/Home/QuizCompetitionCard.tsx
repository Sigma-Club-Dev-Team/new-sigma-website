import { Box, Flex, Link, Text } from "@chakra-ui/react";
import CTAButton from "components/CTAButton";
import ExternalLinks from "constants/external_links";
import React from "react";
import { Link as RRLink } from "react-router-dom";
import { appColors } from "theme";

const QuizCompetitionCard = () => {
  return (
    <Box
      width={"100%"}
      shadow={"10px 10px 20px 5px #00000040"}
      padding={"75px 50px"}
    >
      <Flex flexDirection={"column"} color={"#1C1C1C"} fontWeight={600}>
        <Text fontSize={"40px"} lineHeight={"60px"}>
          2024 Roseline Etuokwu quiz competition
        </Text>

        <Text
          fontWeight={500}
          fontSize={"18px"}
          lineHeight={"27px"}
          color={"#1C1C1CB2"}
          marginTop={"20px"}
        >
          Sigma Club is organising the 2024 Roseline Etuokwu national quiz
          competition for secondary schools across all states in Nigeria with
          focus on fields of Mathematics, English Language, and General
          Knowledge and #8,000,000 worth of prizes with consolation prizes for
          winners at each stage; state, regional and national
          <br />
          <br />
          Registration is completely FREE and every school should provide two
          students (Male and female to ensure gender equality except in cases of
          single sex schools)
        </Text>

        <Flex
          justify={"space-between"}
          marginTop={"40px"}
          flexDirection={{ lg: "row", base: "column" }}
          gap={"8px"}
        >
          <Flex
            flexDirection={"column"}
            gap={"25px"}
            fontSize={"16px"}
            lineHeight="24px"
          >
            {/* <Flex gap={"100px"}>
              <Text>Date: 10th of May - 30th of May</Text>
              <Text>Venue: Various Locations</Text>
            </Flex> */}
            <Link
              color={appColors.brand.purple}
              textDecoration={"underline"}
              to="/events/quiz-competition/2024"
              as={RRLink}
            >
              View more Details
            </Link>
          </Flex>
          <Link href={ExternalLinks.SigmaRegGoogleForm} isExternal={true}>
            <CTAButton>REGISTER NOW</CTAButton>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default QuizCompetitionCard;
