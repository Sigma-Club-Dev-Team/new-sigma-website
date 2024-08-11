import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import CTAButton from "components/CTAButton";
import React from "react";
import { Walk } from "../../constants/image_assets";

const AdmissionInterviewCard = () => {
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
      <Flex maxW={{base: '100%', md: '80%'}}  flexDirection={{ base: "column", md: "row" }}>
      <Flex 
        flexDirection={"column"} 
        color={"#1C1C1C"} 
        fontWeight={600} 
        flex={1}
       
        textAlign='left' // Center text on mobile, align left on desktop
      >
        <Text fontSize={"40px"} lineHeight={"60px"}>
          Sigma Club presents Walk Against Drug Abuse💊
        </Text>

        <Text
          fontWeight={500}
          fontSize={"18px"}
          lineHeight={"27px"}
          color={"#1C1C1CB2"}
          marginTop={"20px"}
          textAlign='left'
        >
          As we mark the international youth day, it is important to stand
          against one of the greatest vices of the youth; Drug Abuse.
        </Text>

        <Text fontSize={"16px"} lineHeight="24px" py={2}  textAlign='left'>
          Date: Monday, August 12th, 2024
          <br /> ⏰Time: 10 AM
          <br /> 📍Start Point: SUB Car Park, UI.
        </Text>

        <Text
          fontWeight={500}
          fontSize={"18px"}
          lineHeight={"27px"}
          color={"#1C1C1CB2"}
          marginTop={"10px"}
        >
          To be part of a walk, join the group
        </Text>

        <Link
          href="https://bit.ly/SigWADA"
          isExternal
          mt={{ base: "20px" }} // Push button to the bottom on desktop
        >
          <CTAButton>Join Now</CTAButton>
        </Link>
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
          src={Walk}
          borderRadius="lg"
          width={{ base: "100%", md: "100%" }} // Adjust width for responsiveness
        />
      </Flex>
      </Flex>
    </Box>
  );
};

export default AdmissionInterviewCard;
