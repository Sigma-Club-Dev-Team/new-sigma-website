import { Box, Flex, Link, Text } from "@chakra-ui/react";
import CTAButton from "components/CTAButton";
// import ExternalLinks from "constants/external_links";
import React from "react";
// import { appColors } from "theme";

const QuizCompetitionCard = () => {
  return (
      <Box
        width={"100%"}
        shadow={"10px 10px 20px 5px #00000040"}
        padding={"75px 50px"}
      >
        <Flex flexDirection={"column"} color={"#1C1C1C"} fontWeight={600}>
          <Text fontSize={"40px"} lineHeight={"60px"}>
            2023 Sigma Admission Interview
          </Text>

          <Text
            fontWeight={500}
            fontSize={"18px"}
            lineHeight={"27px"}
            color={"#1C1C1CB2"}
            marginTop={"20px"}
          >
            This is to inform all male undergraduate students of university of University of Ibadan that Sigma Club admission is currently ongoing. <br/> <br/> Kindly fill in your application now.
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
              <Flex gap={"100px"}>
                <Text>Deadline: Friday, 18th November, 2023.</Text>
{/*                 <Text>Venue: Various Locations</Text> */}
              </Flex>
{/*               <Link
                color={appColors.brand.purple}
                textDecoration={"underline"}
                href="/events/quiz-competition/2024"
              >
                View more Details
              </Link> */}
            </Flex>
            <Link href="https://docs.google.com/forms/d/1a0MB5AdFWWp8AfjL_aKq8sZVizLjxOMV6JSsc7Hk9xw" isExternal>
              <CTAButton>REGISTER NOW</CTAButton>
            </Link>
          </Flex>
        </Flex>
      </Box>
  );
};

export default QuizCompetitionCard;
