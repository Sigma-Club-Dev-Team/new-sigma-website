import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, useParams } from "react-router-dom";
import { contentData } from "./content";
import Sidebar from "pages/Quiz/Sidebar";
import HeaderSection from "./TopMenu";
import QuestionsBTN from "./QuestionsButtons";
import AnsweredButtons from "./AnsweredQuestnBtn";
import ScoreBoard from "./ScoreBoard";

interface PageParams {
  pageId: string;
}

const TemplatePage: React.FC = () => {
  const { pageId } = useParams();
  const pageContent = contentData.find((content) => content.id === pageId);
 
  if (!pageContent) {
    return <div>No data found</div>;
  }

  const formattedTitle = pageContent.title.replace(/\s+/g, '-').toLowerCase();

  return (
    <Flex>
      <Sidebar />
      <Box py={6} minW={"80%"} px={2} marginLeft={"20%"}>
        <HeaderSection title={pageContent.title} />

        <Box px={8} fontFamily={'Poppins'}>
          <Box py={4}>
            <Text fontWeight={"500"} color={"#333333"} fontSize={"14px"}>
              Questions
            </Text>
            <QuestionsBTN />
          </Box>

          <Flex justify={"space-between"} my={4}>
            <Box fontWeight={"600"} color={"#FF0000"} fontSize={"16px"}>
              Answered by School Two
            </Box>
            <Box color={"#33333399"} textDecoration={"underline"}>
              Manage questions
            </Box>
          </Flex>

          <Flex justify={"space-between"} my={4} flexWrap={'wrap'}>
            <Button>Right</Button>
            <Button>Bonus</Button>
            <Button>Wrong</Button>
          </Flex>

          <Box mt={6}>
            <Text fontWeight={"500"} color={"#333333"}>
              Answered Questions
            </Text>
            <Flex mt={4} justify={"space-between"}>
              <AnsweredButtons />
              <Button rightIcon={<ChevronRightIcon />} as={Link} to={`/roseline-etuokwu/schools/${pageContent.id}/test-details`}>
                View Details
              </Button>
            </Flex>
          </Box>
        </Box>
        <ScoreBoard />
      </Box>
    </Flex>
  );
};

export default TemplatePage;
