import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import CTAButton from "components/CTAButton";
// import ExternalLinks from "constants/external_links";
import React from "react";
// import { Link as RRLink } from "react-router-dom";
// import { appColors } from "theme";

// import { Quiz2025 } from "../../constants/image_assets";
import { Admission2025 } from "../../constants/image_assets";

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
          <Text fontSize={"40px"} lineHeight={"60px"}>
            Sigma Admission Interview 2025
          </Text>

          <Text
            fontWeight={500}
            fontSize={"16px"}
            lineHeight={"27px"}
            color={"#1C1C1CB2"}
            marginTop={"20px"}
          >
            2024/2025 SIGMA ADMISSION INTERVIEW
            <br />
            <br />
            The Purple Tie Beckons.
            <br />
            <br />
            Sigma Club, the University of Ibadan&apos;s premier
            socio-philanthropic student organization, once again opens its gates
            to men who dare to be more than ordinary.
            <br />
            The Sigma Admission Interview is upon us. This moment is not merely
            an academic or social milestone — it is a solemn invitation into a
            legacy. A legacy of purpose-driven service, intellectual
            distinction, and uncompromising virtue.
            <br />
            <Link href="/blogs/7" fontStyle={"italic"}>
              Know More
            </Link>
          </Text>

          <Box my={6}>
            <Link href="https://forms.gle/YyUe3SWdqaM2ukTZ6">
              <CTAButton>REGISTER NOW</CTAButton>
            </Link>
          </Box>
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
            src={Admission2025}
            borderRadius="lg"
            width={{ base: "100%", md: "100%" }} // Adjust width for responsiveness
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SigmaWalk;
