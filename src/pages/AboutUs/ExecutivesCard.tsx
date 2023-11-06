import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Executive } from "types";

type ExecutivesCardProps = {
  executive: Executive;
};

export default function ExecutivesCard({
  executive
}: ExecutivesCardProps) {
  const { image, name, post, space } = executive;
  return (
    <div>
      <Center py={1}>
        <Box
          className="animate-bottom"
          width={"280px"}
          height={320}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"md"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Box bg={"gray.100"} mb={4} pos={"relative"}>
            <Image
              src={image}
              fit={"scale-down"}
              width={"100%"}
              height="200px"
            />
          </Box>
          <Stack p={3} mb={4}>
            <Heading
              color={useColorModeValue("purple.600", "white")}
              fontSize="16px"
              fontFamily={"body"}
            >
              {name}
            </Heading>
            <Text color={"gray.500"}>{post}</Text>

            <Text color={"gray.500"}>{space}</Text>
          </Stack>
        </Box>
      </Center>
    </div>
  );
}
