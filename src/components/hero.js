import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"85.65vh"}
      backgroundImage={heroBg}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Heading
            as="h1"
            fontSize={useBreakpointValue({ base: "80px", md: "128px" })}
            color={"brand.purple"}
          >
            Sigma Club
          </Heading>
          <Heading as="h2" size="2xl" color="white">
            University of Ibadan
          </Heading>
          <Text
            color={"white"}
            lineHeight={1.2}
            align={"center"}
            fontSize="18px"
          >
            Oldest club in Sub-Saharan Africa. Social and Philanthropic club
            building whole men capable and willing to make positive impacts in
            the nation and in the world.
          </Text>
          <Stack direction={"row"} gap={4}>
            <Button
              bg={"brand.gold"}
              _hover={"brand.gold"}
              rounded={"md"}
              color={"white"}
            >
              KNOW ABOUT US
            </Button>
            <Button
              bg={"brand.purple"}
              _hover={"brand.purple"}
              rounded={"md"}
              color={"white"}
            >
              DONATE
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
