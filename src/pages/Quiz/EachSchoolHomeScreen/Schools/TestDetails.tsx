import React from "react";
import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { contentData } from "./content";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import AnsweredButtons from "./AnsweredQuestnBtn";
import TopMenu from "./TopMenu"; 

interface PageParams {
  title: string;
  pageId: string;
}

const DetailsPage: React.FC = () => {
  const { pageId } = useParams();
  const pageContent = contentData.find((content) => content.id === pageId);
  const Navigate = useNavigate();

  if (!pageContent) {
    return <div>No data found</div>;
  }

  // Function to handle navigation back
  const goBack = () => {
    Navigate(-1); 
  };

  return (
    <Box px={10} fontFamily={"Poppins"}>
      <TopMenu title={pageContent.title} />

      {/* Backward Icon */}
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Back"
        boxSize={8}
        size={'lg'}
        position="absolute"
        top="20px"
        left="20px"
        bg="transparent"
        onClick={goBack}
      />

      <Flex>
        {/* Left Section */}
        <Box
          width="600px"
          height="300px"
          bg="white"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
          borderRadius="10px"
          display="flex"
          alignItems="center"
          mr={4}
        >
          <Box
            width="200px"
            height="200px"
            borderRadius="50%"
            bg="#ffffff"
            mx={10}
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
          >
            <Text fontSize="3xl" fontWeight="bold" color="#2FD790">
              23/50
            </Text>
          </Box>

          <Flex direction="column" justify="center">
            <Box mb={4} display={"flex"} justifyContent={"space-between"} gap={4}>
              <Text>Test</Text>
              <Text>Round 1</Text>
            </Box>
            <Flex direction="column">
              <Flex justify="space-between" mb={2} gap={4}>
                <Text color={"#757575"}>Questions Attempted</Text>
                <Text fontWeight="bold"> 1</Text>
              </Flex>
              <Flex justify="space-between" mb={2}>
                <Text color={"#757575"}>Correct Answers</Text>
                <Text fontWeight={"bold"}> 2</Text>
              </Flex>
              <Flex justify="space-between" mb={2}>
                <Text color={"#757575"}>Wrong Answers</Text>
                <Text fontWeight="bold"> 3</Text>
              </Flex>
              <Flex justify="space-between" mb={2}>
                <Text color={"#757575"}>Bonus Answers</Text>
                <Text fontWeight={"700"}> 4</Text>
              </Flex>
              <Flex justify="space-between">
                <Text color={"#757575"}>Overall Result</Text>
                <Text fontWeight={"bold"}> 5</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <Box>
          <AnsweredButtons showNavigation={false} />
          <AnsweredButtons showNavigation={false} />
          <AnsweredButtons showNavigation={false} />
          <AnsweredButtons showNavigation={false} />
        
        </Box>
      </Flex>
    </Box>
  );
};

export default DetailsPage;
