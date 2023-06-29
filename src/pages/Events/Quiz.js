import { Container } from "@chakra-ui/react";
import QuizImage from "../../assets/QuizImage.jpg";
import { Flex } from "@chakra-ui/react";
import { Text, Box, Image } from "@chakra-ui/react";
import Video from "../../components/Video";

const Quiz = () => {
  return (
    <div>
      <Container maxW="7xl" className="animate-bottom">
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
              Roseline Etuokwu Sigma Secondary School Quiz Competition
            </Text>
            <br />

            <Text fontSize="16px" lineHeight="normal">
              This also known as the Roseline Etuokwu Sigma Secondary School
              Quiz Competition is one of the philanthropic activities of the
              club to bring the club closer to the grassroots.It is the club’s
              believe that the secondary school students would grow to become
              University students.As such, introducing the club to them right
              from their secondary school days would guide them in manners to
              act and way of life to live as a student of higher
              institutions.During this competition, moral and educational
              knowledge are displayed and students are being trained in manners
              to become whole human and stand “for all that is pure”.These will
              believe would keep the students on the right track before entering
              the university.It also serve as a means of orientating students on
              steps to take while making choices as a secondary school student
              aspiring for higher institutions.
              <br />
              <br />
              <p>
                {" "}
                With the inceptions of the competition, over 300 secondary
                schools across the 33 local government of Oyo State have
                participated and witnessed the participation of over 700
                students in this competition. Apart from the participation of
                these students and schools, gift items are also won by different
                schools, students, and teachers for their participation. In the
                last competition, first position won the sum of #250 000 worth
                of price, first runner won #200 000 worth of price and second
                runner up won #150 000 worth of price.
              </p>
            </Text>
          </Box>
        </Flex>
      </Container>

      <div>
        <Video src={"https://www.youtube.com/watch?v=0LQKoj3XXgo"} />
      </div>
    </div>
  );
};

export default Quiz;
