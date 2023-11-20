import React from "react";
import {
  Button,
  Container,
  Link as ChakraLink,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { Link as RRLink } from "react-router-dom";
import { SecSchoolQuizGroupJPG } from "../../../../../constants/image_assets";
import { Flex } from "@chakra-ui/react";
import { Text, Box, Image } from "@chakra-ui/react";
import Header from "components/Header";
import Footer from "components/Footer";
import { FiArrowRight } from "react-icons/fi";
import ExternalLinks from "constants/external_links";
import BackButton from "components/BackButton";

const Quiz = () => {
  return (
    <div>
      <Header />

      <Container maxW="7xl" className="animate-bottom">
        <Flex justify={"space-between"} marginTop={"32px"}>
          <BackButton />
          <ChakraLink
            fontWeight={600}
            fontSize={"20px"}
            lineHeight={"30px"}
            color={"brand.purple"}
            textDecoration={"underline"}
            to="/events/quiz-competition/2024/stages"
            as={RRLink}
          >
            View Competition Stages
          </ChakraLink>
        </Flex>
        <Text
          mt={15}
          display="block"
          fontSize={"24px"}
          lineHeight={"36px"}
          fontWeight={600}
          color={"#171717"}
        >
          2024 Roseline Etuokwu Quiz Competition Competition
        </Text>
        <Flex direction={{ base: "column" }}>
          <Box color="white">
            <Image
              mt={"18px"}
              borderRadius="15px"
              width={{ base: "100%", sm: "100%" }}
              maxHeight={"lg"}
              src={SecSchoolQuizGroupJPG}
              alt="presentation of prize"
            />
          </Box>
          <Box py={{ lg: "8", md: "4", sm: "4" }}>
            <Text fontSize="16px" lineHeight="24px" textAlign="justify">
              The Roseline Etuokwu Sigma Secondary School Quiz Competition is
              one of the philanthropic activities of the club to bring the club
              closer to the grassroots. It is the club’s believe that the
              secondary school students would grow to become University
              students. As such, introducing the club to them right from their
              secondary school days would guide them in manners to act and way
              of life to live as a student of higher institutions. During this
              competition, moral and educational knowledge are displayed and
              students are being trained in manners to become whole human and
              stand “for all that is pure”. This we believe would keep the
              students on the right track before entering the university.
              <br />
              <br />
              <p>
                {" "}
                From the inception of the competition, over 1,300 secondary
                schools across the 6 States of the SouthWest Region of Nigeria
                have participated and witnessed the participation of over 2,600
                students in this competition. Apart from the participation of
                these students and schools, gift items are also won by different
                schools, students, and teachers for their participation.
              </p>
              <br />
              <p>
                {" "}
                For the 2024 edition Sigma Club is the quiz competition for all
                available secondary schools across all states in Nigeria. The
                areas of concentration are Mathematics, English Language, and
                General Knowledge.
              </p>
              <br />
              <br />
              <p>
                {" "}
                <Text as="i" fontWeight={600}>
                  STAGES OF THE COMPETITION
                  <OrderedList>
                    <ListItem>
                      First or State stage : A winner will emerge from each of
                      the 37 states (including FCT)
                    </ListItem>
                    <ListItem>
                      Second or Regional stage : State winners in each region
                      will meet to determine the regional winner.
                    </ListItem>
                    <ListItem>
                      Final or National stage : The six regional winners will
                      meet in Ibadan on the Children's day (May 27, 2024).
                    </ListItem>
                    <ListItem> State winners : N100,000 each (x 37).</ListItem>
                  </OrderedList>
                </Text>
              </p>
              <br />
              <br />
              <p>
                {" "}
                <Text as="i" fontWeight={600}>
                  Prices to be won
                  <OrderedList>
                    <ListItem>State winners : N100,000 each (x 37).</ListItem>
                    <ListItem>Regional winners : N250,000 each (x 6)</ListItem>
                    <ListItem>
                      National 6th Position : N100,000 (Consolation Price)
                    </ListItem>
                    <ListItem>
                      National 5th Position : N100,000 (Consolation Price)
                    </ListItem>
                    <ListItem>
                      National 4th Position : N100,000 (Consolation Price)
                    </ListItem>
                    <ListItem>National 3rd Position : N500,000</ListItem>
                    <ListItem>National 2nd Position : N750,000</ListItem>
                    <ListItem>
                      National 1st Position : (champion) N1,000,000
                    </ListItem>
                  </OrderedList>
                </Text>
              </p>
            </Text>
          </Box>
        </Flex>

        <ChakraLink href={ExternalLinks.SigmaRegGoogleForm}>
          <Button
            display={{ base: "inline-flex" }}
            fontSize={"18px"}
            lineHeight={"27px"}
            fontWeight={500}
            color={"white"}
            bg={"brand.purple"}
            gap={"8px"}
            alignItems={"center"}
            padding={"15px"}
            _hover={{ bg: "brand.purple" }}
          >
            <Text>Register Your School</Text>
            <FiArrowRight />
          </Button>
        </ChakraLink>
      </Container>

      <Footer />
    </div>
  );
};

export default Quiz;
