import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { HonourarySigmite } from "../../types";

type HonSigmiteCardProps = {
  honSigmite: HonourarySigmite;
};

export default function HonSigmiteCard({ honSigmite }: HonSigmiteCardProps) {
  const { image, name, description } = honSigmite;
  return (
    <Center py={6}>
      <Box
        maxW={400}
        height={453}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"md"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box bg={"gray.100"} mb={4} pos={"relative"}>
          <Image src={image} fit={"fill"} height={249}/>
        </Box>
        <Stack p={3} mb={4} align={"end"}>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {name}
          </Heading>
          <Text color={"gray.500"}>{description}</Text>
        </Stack>
      </Box>
    </Center>
  );
}
