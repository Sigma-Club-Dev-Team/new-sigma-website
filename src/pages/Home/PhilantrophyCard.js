import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function PhilantrophyCard({ image, name, description }) {
  return (
    <Center py={6}>
      <Box
        maxW={{ base: "100%", sm: "345px" }}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"md"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box bg={"gray.100"} mb={2} pos={"relative"}>
          <Image src={image} layout={"fill"} />
        </Box>
        <Stack p={3} mb={4}>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"xl"}
            fontFamily={"body"}
          >
            {name}
          </Heading>
          <Text color={"gray.700"}>{description}</Text>
        </Stack>
      </Box>
    </Center>
  );
}
