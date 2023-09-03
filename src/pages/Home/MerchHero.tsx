import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MerchImg from "../../assets/merchandise.jpg";

export default function MerchHero() {
  return (
    <Flex
      w={"full"}
      h={"60vh"}
      backgroundImage={MerchImg}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600)"}
      >
        <Stack maxW={"4xl"} align={"center"} spacing={6}>
          <Heading color={"white"} as="h2" size="xl" textAlign={"center"}>
            Get Quality Wears from Our Merchandise store
          </Heading>
          <Text
            color={"white"}
            textAlign={"center"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "lg", md: "xl" })}
          >
            The best wears (hats, polos, shirts, trousers, caps, hats and other
            wears) are available for you. Trust us to look good by purchasing
            wears from our store
          </Text>

          <Stack direction={"row"}>
            <Link to={"/merch"}>
              <Button
                bg={"brand.purple"}
                rounded={"md"}
                color={"white"}
                _hover={{ bg: "brand.purple" }}
              >
                Purchase Merch
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
