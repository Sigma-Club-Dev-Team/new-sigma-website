import { Container } from "@chakra-ui/react";
import QuizImage from "../assets/pic1.jpg";
import { Flex } from "@chakra-ui/react";
import Video from "../components/Video";
import { Text, Box, Image } from "@chakra-ui/react";

const Scholarship = () => {
  return (
    <Container maxW="100%" className="animate-bottom">
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex="4.5" color="white" p={{ lg: "10", md: "3", sm: "4" }}>
          <Image
            mt={6}
            borderRadius="lg"
            width={{ base: "100%", sm: "100%" }}
            src={QuizImage}
            alt="presentation of prize"
          />
        </Box>
        <Box flex="5.5" p={{ lg: "8", md: "4", sm: "4" }}>
          <Text
            mt={6}
            display="block"
            fontSize="xlg"
            lineHeight="normal"
            fontWeight="semibold"
          >
            Sigma Scholarship Scheme
          </Text>
          <br />

          <Text fontSize="16px" lineHeight="normal">
            This scheme awards Undergraduate and Post-graduate scholarships to
            deserving indigent students to enable them complete their education.
            Over 7 decades of the clubs existence, it has awarded several
            scholarships to over 100 students of University of Ibadan including
            both undergraduate and post-graduate students. This opportunity
            avail them to complete their studies with ease and without pressure.
            Testimonies from these scholarship scheme has proven that it has
            help many students to who are on the verge of dropping out of the
            school to complete their education and has serve some students as a
            source of encouragement to be a better person in the society and as
            they grow up, come back to give to the society and help more people.
            <br />
            <br />
            <p>
              However, the scholarship was institutionalized in 2018. It was
              rebranded in 2018 where it was established under the Sigma
              Foundation. The scholarship since the institutionalization in 2018
              has however being awarding 10 students each every year with the
              sum of #100 000 each for their benefits. As of the moment, the
              over 40 students are currently beneficiaries of this scholarship
              scheme.
            </p>
          </Text>
        </Box>
      </Flex>

      <div>
        <Video />
      </div>
    </Container>
  );
};

export default Scholarship;
