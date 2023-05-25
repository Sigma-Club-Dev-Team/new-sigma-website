import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ExecutivesCard({ image, name, post, space }) {
  return (
    <div>
      <Center py={6}>
        <Box
          className="animate-bottom"
          maxW={"295px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"md"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Box bg={"gray.100"} mb={4} pos={"relative"}>
            <Image
              src={image}
              layout={"fill"}
              width="300px"
              height="200px"
              objectFit="fill"
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
