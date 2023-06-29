import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import HonSigmiteCard from "./HonSigmiteCard";
import React from "react";
import { HonourarySigmite } from "./types";
import { ImageAssets } from "constants/image_assets";

const HonSigmiteObj: HonourarySigmite[] = [
  {
    image: ImageAssets.HsLamidoSanusiJPG,
    name: "Honorary Sigmite Sanusi Lamido Sanusi",
    description:
      "Former Central Bank Of Nigeria Governor and emir of the ancient city state of Kano.",
  },
  {
    image: ImageAssets.HsWaleBabalakin,
    name: "Honorary Sigmite Bolanle Olawale Babalakin (OFR, SAN)",
    description:
      "A Businessman, lawyer and philanthropist, and the Chairman of The Bi-Courtney Group of companies.",
  },
  {
    image: ImageAssets.HsFemiAdeshina,
    name: "Honorary Sigmite Femi Adesina (OON)",
    description:
      "A Nigerian journalist who served as the Special Adviser, Media and Publicity to the former President of the Federal Republic of Nigeria, Muhammadu Buhari.",
  },
  {
    image: ImageAssets.HsObiOnitsha,
    name: "Honorary Sigmite Igwe Nnaemeka Alfred Ugochukwu Achebe CFR, mni (Obi of Onitcha)",
    description:
      "Chancellor of Ahmadu Bello University, and Chairman of the board of Directors of Unilever Nigeria.",
  },
  {
    image: ImageAssets.HsGabrielOgunmola,
    name: "Honorary Sigmite, Professor Gabriel Ogunmola",
    description:
      "A Nigerian Professor of Chemistry and Chancellor of Lead City University, Ibadan.",
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

      <Container maxW={"7xl"} my={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {HonSigmiteObj.map((honSigmite) => (
            <HonSigmiteCard honSigmite={honSigmite} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
