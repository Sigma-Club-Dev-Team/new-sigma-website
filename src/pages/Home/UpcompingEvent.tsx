import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  Link,
  Box,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { SigmaScholarship } from "constants/image_assets";
import React from "react";

export default function UpcomingEvents() {
  return (
    <Container mt={20} maxW={"full"} p={12} bg={"brand.purple"} color={"white"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Sigma Scholarship Scheme</Heading>
          {/* <Text
            color={"white"}
            fontWeight={600}
            fontSize={20}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Sigma Scholarship Scheme
          </Text> */}
          <Text fontSize={16}>
            <p>content...</p>
          </Text>
          <Stack
            direction={useBreakpointValue({ base: "column", sm: "row" })}
            spacing="5px"
            justifyContent={"space-between"}
            paddingTop={5}
          >
            <Box>
              <Text fontSize={18}>Date: 24th of June - 14th of July</Text>
            </Box>
            {/* <Box>
              <Text fontSize={18}>Venue: Various Locations</Text>
            </Box> */}
          </Stack>
          <HStack spacing="5px" justifyContent={"space-between"} paddingTop={2}>
            <Link fontSize={16} href="#">
              <Button
                bg="brand.gold"
                color={"white"}
                _hover={{ bg: "brand.gold", color: "white" }}
                fontWeight={"bold"}
              >
                Apply Now
              </Button>
            </Link>
          </HStack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={SigmaScholarship}
            fit={"contain"}
            maxH={"600px"}
            w={"full"}
            overflow={"hidden"}
            borderRadius={15}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
