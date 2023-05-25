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

export const BlogAuthor = (props) => {
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
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  src={QuizImg}
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={
                  ("radial(orange.600 1px, transparent 1px)",
                  "radial(orange.600 1px, transparent 1px)")
                }
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
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
          _hover={"brand.purple"}
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
