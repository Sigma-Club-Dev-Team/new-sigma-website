import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Button,
  Container,
  Flex,
} from "@chakra-ui/react";
import QuizImg from "../../assets/upcoming-quiz.jpg";
import { Blog as BlogModel } from "./types";

export const BlogAuthor = (props: BlogModel) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="bold">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Blog = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Top Stories in Our Blogs</Heading>
      {[1, 2, 3].map(() => (
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="8"
            gap="4"
            marginBottom="4"
            position="relative"
            width={{ base: "100%", sm: "100%" }}
            alignItems="center"
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Image
              borderRadius="lg"
              src={QuizImg}
              alt="some good alt text"
              objectFit="contain"
            />
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Roseline Etuokwu Secondary School Quiz Competition
              </Link>
            </Heading>
            <Text as="p" marginTop="2" color={"gray.700"} fontSize="lg">
              This is a quiz competition that stemed out of the need to improve
              education. It started in 2019 with 10 schools, and then progressed
              to Oyo state and is now organizing a South west level with more
              than 1000+ schools.
            </Text>
            <BlogAuthor
              name="Sigma Club"
              date={new Date("2021-04-06T19:01:27Z")}
            />
          </Box>
        </Box>
      ))}
      <Flex justifyContent={"center"} alignItems={"center"} mt={10}>
        <Button
          bg={"brand.purple"}
          _hover={{bg: "purple"}}
          color={"white"}
          size="lg"
          fontWeight={"bold"}
        >
          View All
        </Button>
      </Flex>
    </Container>
  );
};

export default Blog;
