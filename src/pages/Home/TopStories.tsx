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
import { Link as RRLink } from "react-router-dom";
import { Article } from "../../types";
import { ArticleArray } from "../../constants/articles";

type BlogAuthorProps = {
  blog: Article;
};

export const BlogAuthor = ({ blog }: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="bold">{blog.authorName}</Text>
      <Text>—</Text>
      <Text>{blog.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Blog = () => {
  return (
    <Container maxW={"8xl"} p="12">
      <Heading as="h2">Top Stories in Our Blogs</Heading>
      {ArticleArray.slice(0, 3).map((article) => {
        return (
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
                src={article.image}
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
                  {article.title}
                </Link>
              </Heading>
              <Text as="p" marginTop="2" color={"gray.700"} fontSize="lg">
                {article.abridgedContent}
              </Text>
              <BlogAuthor blog={article} />
            </Box>
          </Box>
        );
      })}
      <Flex justifyContent={"center"} alignItems={"center"} mt={10}>
        <RRLink to={"/blog"}>
          <Button
            bg={"brand.purple"}
            _hover={{ bg: "purple" }}
            color={"white"}
            size="lg"
            fontWeight={"bold"}
          >
            View All
          </Button>
        </RRLink>
      </Flex>
    </Container>
  );
};

export default Blog;
