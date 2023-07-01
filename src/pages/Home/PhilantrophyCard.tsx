import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { PhilantrophyActivity } from "types";

type PhilantrophyCardProps = {
  philantrophyActivity: PhilantrophyActivity;
};

export default function PhilantrophyCard({
  philantrophyActivity,
}: PhilantrophyCardProps) {
  const { image, name, description, link } = philantrophyActivity;

  return (
    <Center py={6}>
      <Box
        maxW={{ base: "100%", sm: "345px" }}
        w={"full"}
        h={437}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"md"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box bg={"gray.100"} mb={2} pos={"relative"}>
          <Image src={image} fit={"fill"} height={279} w={"100%"} />
        </Box>
        <Stack p={3} mb={4}>
          <Heading
            color={useColorModeValue("brand.purple", "white")}
            fontSize={"16"}
            fontFamily={"body"}
          >
            {name}
          </Heading>
          <Text color={"brand.text_black"} noOfLines={3}>
            {description}
          </Text>
          <Link
            alignSelf={"end"}
            color={"#03B9E1"}
            textDecoration={"underline"}
            href={link}
          >
            See more
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}
