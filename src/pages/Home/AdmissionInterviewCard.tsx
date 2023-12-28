import { Box, Flex, Link, Text } from "@chakra-ui/react";
import CTAButton from "components/CTAButton";
import React from "react";

const AdmissionInterviewCard = () => {
  return (
    <Box
      width={"100%"}
      shadow={"10px 10px 20px 5px #00000040"}
      padding={"75px 50px"}
      display={"none"}
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
          This is to inform all male undergraduate students of the
          The University of Ibadan that Sigma Club admission is currently ongoing.{" "}
          <br /> <br /> Kindly fill in your application now.
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
              <Text>Deadline: 20th November, 2023.</Text>
            </Flex>
          </Flex>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScBMrttVAebCDwPZkyLZSQIXlZh58eh9ISFikIu8Y2tOkMwOA/viewform?usp=sharing"
            isExternal
          >
            <CTAButton>REGISTER NOW</CTAButton>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdmissionInterviewCard;
