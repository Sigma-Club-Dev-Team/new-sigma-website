import { Stack, Container, Box, Flex, Text, Heading } from "@chakra-ui/react";
import PhilantrophyCard from "./PhilantrophyCard";
import quizCompetition from "../../assets/quizCompetition.jpg";

const PhilantrophyObj = [
  {
    image: quizCompetition,
    name: "Roseline Etuokwu Sigma Secondary School Quiz Competition",
    description:
      "The Sigma club is organizing a wide range quiz competition for secondary schools",
  },
  {
    image: quizCompetition,
    name: "Roseline Etuokwu Sigma Secondary School Quiz Competition",
    description:
      "The Sigma club is organizing a wide range quiz competition for secondary schools",
  },
  {
    image: quizCompetition,
    name: "Roseline Etuokwu Sigma Secondary School Quiz Competition",
    description:
      "The Sigma club is organizing a wide range quiz competition for secondary schools",
  },
  {
    image: quizCompetition,
    name: "Roseline Etuokwu Sigma Secondary School Quiz Competition",
    description:
      "The Sigma club is organizing a wide range quiz competition for secondary schools",
  },
  {
    image: quizCompetition,
    name: "Roseline Etuokwu Sigma Secondary School Quiz Competition",
    description:
      "The Sigma club is organizing a wide range quiz competition for secondary schools",
  },
];

export default function Philantrophy() {
  return (
    <Box>
      <Container maxW={"6xl"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            pt={{ base: 10, md: 20, xl: 40 }}
          >
            <Box>
              <Heading
                color={"black"}
                mb={5}
                fontSize={{ base: "2xl", md: "4xl" }}
              >
                Our Philanthropic Activities
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} color={"black"}>
                One of our core traditions/belief in Sigma Club is Philanthropy.
                Here are some of our humanitarian activities both within the
                University campus and beyond.
              </Text>
            </Box>
          </Stack>
        </Stack>

        <Container maxW={"full"} my={4}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            {PhilantrophyObj.map(({ image, name, description }) => (
              <PhilantrophyCard
                image={image}
                name={name}
                description={description}
              />
            ))}
          </Flex>
        </Container>
      </Container>
    </Box>
  );
}
