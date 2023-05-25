import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import HonSigmiteCard from "./HonSigmiteCard";
import HonSigmiteImg from "../assets/honorarySigmites.jpg";

const HonSigmiteObj = [
  {
    image: HonSigmiteImg,
    name: "Honorary Sigmite Sanusi Lamido Sanusi",
    description:
      "Former Central Bank Of Nigeria Governor and emir of the ancient city state of Kano.",
  },
  {
    image: HonSigmiteImg,
    name: "Honorary Sigmite Sanusi Lamido Sanusi",
    description:
      "Former Central Bank Of Nigeria Governor and emir of the ancient city state of Kano.",
  },
  {
    image: HonSigmiteImg,
    name: "Honorary Sigmite Sanusi Lamido Sanusi",
    description:
      "Former Central Bank Of Nigeria Governor and emir of the ancient city state of Kano.",
  },
  {
    image: HonSigmiteImg,
    name: "Honorary Sigmite Sanusi Lamido Sanusi",
    description:
      "Former Central Bank Of Nigeria Governor and emir of the ancient city state of Kano.",
  },
  {
    image: HonSigmiteImg,
    name: "Honorary Sigmite Sanusi Lamido Sanusi",
    description:
      "Former Central Bank Of Nigeria Governor and emir of the ancient city state of Kano.",
  },
];

export default function HonourarySigmites() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Our Honorary Sigmites
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Below are some notable members of the society with great
          accomplishments that have become part of what we stand for
        </Text>
      </Stack>

      <Container maxW={"8xl"} my={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {HonSigmiteObj.map(({ image, name, description }) => (
            <HonSigmiteCard
              image={image}
              name={name}
              description={description}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
