import { Box, Flex, Link, Text , Image} from "@chakra-ui/react";
import CTAButton from "components/CTAButton";
// import ExternalLinks from "constants/external_links";
import React from "react";
// import { Link as RRLink } from "react-router-dom";
// import { appColors } from "theme";

import { Quiz2025 } from "../../constants/image_assets";

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
            2025 Roseline Etuokwu quiz competition
          </Text>

          <Text
            fontWeight={500}
            fontSize={"18px"}
            lineHeight={"27px"}
            color={"#1C1C1CB2"}
            marginTop={"20px"}
          >
            Sigma Club is organising the 2025 Roseline Etuokwu national quiz
            competition for secondary schools across all states in Nigeria with
            focus on fields of Mathematics, English Language, and General
            Knowledge with 20 MILLION NAIRA worth of prizes and consolation prizes
            for winners at each stage; state, regional and national
            <br />
            <br />
            Registration is completely FREE and every school should provide two
            students (Male and female to ensure gender equality except in cases
            of single sex schools)
          </Text>
          


          {/* <Link
              color={appColors.brand.purple}
              textDecoration={"underline"}
              to="/events/quiz-competition/2024"
              as={RRLink}
            >
              View more Details
            </Link> */}
         
           <Box my={6}>
           <Link href='https://quiz.sigmaclubui.ng/' >
              <CTAButton>REGISTER NOW</CTAButton>
            </Link>
           </Box>
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
            src={Quiz2025}
            borderRadius="lg"
            width={{ base: "100%", md: "100%" }} // Adjust width for responsiveness
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SigmaWalk;
