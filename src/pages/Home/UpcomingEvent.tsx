import { Box, Flex,  Text, Image } from "@chakra-ui/react";
// import CTAButton from "components/CTAButton";
import React from "react";
import { SigmaEssay } from "../../constants/image_assets";

const SigmaWalk = () => {
  return (
    <Box
      width={"100%"}
      shadow={"10px 10px 20px 5px #00000040"}
      padding={"75px 30px"}
      display={{ base: "block", md: "flex" }} // Adjust display for responsiveness
      flexDirection={{ base: "column", md: "row" }} // Stack on mobile, side by side on desktop
      gap={{ base: "20px", md: "50px" }} // Add spacing between columns
      mx={"auto"}
      alignItems={"center"} // Center content vertically
      justifyContent={"center"} // Center content horizontally
    >
      <Flex
        maxW={{ base: "100%", md: "75%" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          flexDirection={"column"}
          color={"#1C1C1C"}
          fontWeight={600}
          flex={1}
          textAlign="left"
        >
          <Text fontSize={"20px"}>
            Unlock Your Potential at the Benedict Kudayah Sigma Essay
            Competition! Are you a student at the University of Ibadan? Do you
            have ideas on how to create lasting social change in Nigeria? Here's
            your chance to make a difference and win exciting prizes!
          </Text>

          <Text
            fontWeight={500}
            fontSize={"20px"}
            lineHeight={"27px"}
            color={"#1C1C1CB2"}
            marginTop={"20px"}
            textAlign="left"
          >
            Topic: Creating Lasting Social Change: Strategies for Effective
            Socio-Philanthropic Interventions in Nigeria.
          </Text>

          <Text fontSize={"16px"} lineHeight="24px" py={2} textAlign="left">
            Submission Deadline: August 16th - September 16th, 2024. <br />{" "}
            <br />
            Guidelines: <br />
            - Open to all University of Ibadan students. <br />
            - Essays must be 1200-1500 words, PDF format, double-spaced, font
            size 12. <br />
            -Attach your school ID and submit to sigmacompetition2024@gmail.com.
          </Text>

          <Text
            fontWeight={500}
            fontSize={"18px"}
            lineHeight={"27px"}
            color={"#1C1C1CB2"}
            marginTop={"10px"}
          >
            Seize this opportunity to showcase your brilliance and contribute to
            meaningful change! For more details, contact 08163328645
          </Text>

          {/* <Link
            href="https://bit.ly/SigWADA"
            isExternal
            mt={{ base: "20px" }} // Push button to the bottom on desktop
          >
            <CTAButton>Join Now</CTAButton>
          </Link> */}
        </Flex>

        <Flex
          flexDirection={"column"}
          justify={"center"} // Center image vertically within its flexbox
          alignItems={"center"} // Center image horizontally within its flexbox
          mt={{ base: "20px", md: "0" }} // Place the image below the text on mobile devices
          gap={"8px"}
          flex={1}
        >
          <Image
            src={SigmaEssay}
            borderRadius="lg"
            width={{ base: "100%", md: "100%" }} // Adjust width for responsiveness
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SigmaWalk;
