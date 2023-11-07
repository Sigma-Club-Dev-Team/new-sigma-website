import React from "react";
import { Button, Container, Link } from "@chakra-ui/react";
import { SecSchoolQuizGroupJPG } from "../../../../../constants/image_assets";
import { Flex } from "@chakra-ui/react";
import { Text, Box, Image } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "components/Header";
import { FiChevronLeft, FiArrowRight } from "react-icons/fi";
import Footer from "components/Footer";
import ExternalLinks from "constants/external_links";

const Quiz = () => {
  return (
    <div>
      <Header />

      <Container maxW="7xl" className="animate-bottom">
        <Flex justify={"space-between"} marginTop={"32px"}>
          <BackButton />
          <Link
            fontWeight={600}
            fontSize={"20px"}
            lineHeight={"30px"}
            color={"brand.purple"}
            textDecoration={"underline"}
            href="/events/quiz-competition/2024/stages"
          >
            View Competition Stages
          </Link>
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
              src={SecSchoolQuizGroupJPG}
              alt="presentation of prize"
            />
          </Box>
          <Box py={{ lg: "8", md: "4", sm: "4" }}>
            <Text fontSize="16px" lineHeight="24px" textAlign="justify">
              The is also known as the Roseline Etuokwu Sigma Secondary School
              Quiz Competition is one of the philanthropic activities of the
              club to bring the club closer to the grassroots. It is the club’s
              believe that the secondary school students would grow to become
              University students. As such, introducing the club to them right
              from their secondary school days would guide them in manners to
              act and way of life to live as a student of higher institutions.
              During this competition, moral and educational knowledge are
              displayed and students are being trained in manners to become
              whole human and stand “for all that is pure”. This we believe
              would keep the students on the right track before entering the
              university.
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
              <br />
              <p>
                {" "}
                <Text as="i" fontWeight={600}>
                  Prices to be won
                  <br />
                  Overall winner - N5,000,000; Overall 1st Runner Up -
                  N3,000,000;
                  <br />
                  Overall 2nd Runner up - N2,000,000 State Champions - N150,000;
                  <br />
                  Regional Champions - N500,000 Including various Electronic
                  appliances, notebooks, textbooks and gadgets to students.
                </Text>
              </p>
            </Text>
          </Box>
        </Flex>

        <Link href={ExternalLinks.SigmaRegGoogleForm}>
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
        </Link>
      </Container>

      <Footer />
    </div>
  );
};

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Button
      leftIcon={<FiChevronLeft color="#333333" />}
      padding={"0"}
      margin={"0"}
      backgroundColor={"transparent"}
      _hover={{bg: "transparent"}}
      onClick={() => {
        if (location.key !== "default") {
          navigate(-1);
        }
        navigate("/");
      }}
    >
      <Text fontSize={"16px"} lineHeight={"24px"} color={"#1C1C1CB2"}>
        Back
      </Text>
    </Button>
  );
};

export default Quiz;
