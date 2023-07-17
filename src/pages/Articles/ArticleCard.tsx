import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Container,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Article } from "types";

type BlogProps = {
  article: Article;
};

const Blog = ({ article }: BlogProps) => {
  const { image, title, content, id, date } = article;
  return (
    <Container maxW="full" m="auto">
      <Card
        direction={{ base: "column", md: "row" }}
        overflow="hidden"
        shadow="md"
        bg={"rgba(143, 25, 231, 0.07)"}
        mb={9}
        rounded="xl"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", md: "300px" }}
          src={image}
          alt="article-img"
          rounded="xl"
        />

        <Stack>
          <CardBody>
            <Flex pb={5}>
              <Text px={3} color="purple" fontSize="sm">
                Sigma club
              </Text>
              <Text px={3} fontSize="sm">
                {" "}
                Last updated {date.toLocaleDateString()}
              </Text>
            </Flex>

            <Heading size="md">{title}</Heading>

            <Text py="2" className="article">
              {content}
            </Text>
          </CardBody>

          <CardFooter>
            <Box ml="auto">
              <Link to={`/blogs/${id}`}>
                <Button
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.purple"}
                  _hover={{ bgColor: "brand.purple" }}
                >
                  Read More
                </Button>
              </Link>
            </Box>
          </CardFooter>
        </Stack>
      </Card>
    </Container>
  );
};
export default Blog;
