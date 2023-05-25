import { Container } from "@chakra-ui/react";
import QuizImage from "../assets/pic2.jpg";
import { Flex } from "@chakra-ui/react";
import Video from "../components/Video";
import { Text, Box, Image } from "@chakra-ui/react";

const Sport = () => {
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
            Sigma Essay Competition
          </Text>
          <br />

          <Text fontSize="16px" lineHeight="normal">
            The Sigma Essay Competition is now referred to as the Benedict
            Kudayah Sigma Essay Competition. The competition is a philanthropic
            activity of the club where important topics affecting the nation and
            the world at large is drafted to be discussed by vast majority of
            students across the nation while profiling solution to this problem.
            These students would put in their entry through essay write up and
            would be examined whereby 1st, 2nd and 3rd best write ups would be
            awarded prices. In the last entry of this competition, it witnessed
            over 150 entries in and out of the country and awarded #100 000, #50
            000 and #30 000 to the 1st, 2nd and 3rd best write-ups respectively,
            at the ground ceremony
            <br />
            <br />
            <p>
              However the philanthropic activities expands beyond the above
              mentioned activities. The club has also contributed to various
              charitable causes that include; blood donation in the University
              of Ibadan, donation of water tanks to University of Ibadan Hall of
              Residences, marking of zebra crossing on University of Ibadan
              roads, donation to Cocoa dome during the fire outbreak that occur
              in 1985, Oluyole Cheshire home, Ibadan Motherless Babies’ Home,
              Jaja Clinic, University of Ibadan, Leper Settlement at Uzuakoli,
              Alaanu Fund of University College Hospital Ibadan, amongst others.
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

export default Sport;
