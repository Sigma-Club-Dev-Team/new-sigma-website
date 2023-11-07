import React, { useState } from "react";
import { Container, Heading, Text, Box, Flex, Divider } from "@chakra-ui/react";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import TabContent from "./TabContent"; 
import stagesData from "./StagesData"; 
import BackButton from "components/BackButton";


function StageTab({ index, selectedTab, handleTabChange, label }) {
  const isActive = selectedTab === index;
  const tabStyles = {
    backgroundColor: isActive ? "#8F19E7" : "#8f19e71a",
    color: isActive ? "white" : "black",
    borderRadius: "10px",
    marginLeft: "5px",
    marginRight: "5px",
  };

  return (
    <Tab onClick={() => handleTabChange(index)} style={tabStyles}>
      {label}
    </Tab>
  );
}

const StagesContainer = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Container maxW="7xl" className="animate-bottom">
      {/* // We hide the section for previous editions till those contents are ready */}
      <Flex
        flexDirection={{
          base: "column",
          // md: "row"
        }}
      >
        <Box flex={{ base: "none", md: 7 }}>
          <BackButton />

          <Heading py={4} fontSize="24px">
            Competition Stages
          </Heading>

          <Tabs isFitted variant="enclosed">
            <TabList>
              {stagesData.map((stage, index) => (
                <StageTab
                  key={index}
                  index={index}
                  selectedTab={selectedTab}
                  handleTabChange={handleTabChange}
                  label={stage.title}
                />
              ))}
            </TabList>
            <TabPanels>
              {stagesData.map((stage, index) => (
                <TabPanel key={index}>
                  {selectedTab === index && (
                    <TabContent
                      title={stage.champions}
                      content={stage.content}
                      buttonText={stage.buttonText}
                      tableData={stage.tableData}
                    />
                  )}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>

        {/* // We hide the section for previous editions till those contents are ready */}
        <Divider
          my={4}
          bg="#1C1C1CB2"
          height="100vh"
          mr={2}
          px={0}
          borderWidth="2px"
          orientation="vertical"
          display={{ base: "none", md: "block" }}
          visibility={"hidden"}
        />

        <Box
          flex={{ base: "none", md: 3 }}
          my={5}
          pl={2}
          fontWeight="500"
          visibility={"hidden"}
        >
          <Text>Previous version of the competition</Text>

          <Box py={4}>
            <Text>
              2023 South-West region secondary schools quiz competition
            </Text>
            <Text textDecoration="underline" textAlign="right" color="#8F19E7">
              View
            </Text>
          </Box>

          <Box py={4}>
            <Text>
              2023 South-West region secondary schools quiz competition
            </Text>
            <Text textDecoration="underline" textAlign="right" color="#8F19E7">
              View
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default StagesContainer;
