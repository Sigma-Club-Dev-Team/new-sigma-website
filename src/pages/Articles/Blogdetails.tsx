import React from "react";
import { Heading, Text, Image, Box, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ArticleArray } from "../../constants/articles";
import FilterBtn from "./FilterBtn";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Blogdetails = () => {
  const { id } = useParams();
  const article = ArticleArray.find((article) => article.id === id);

  return (
    <>
      <Header />
      {article ? (
        <Flex m="auto" p={10} flexDirection={{ base: "column", md: "row" }}>
          <Box flex={10}>
            <Flex pb={5}>
              <Text px={3} color="purple" fontSize="sm">
                Sigma club
              </Text>
              <Text px={3} fontSize="sm">
                {" "}
                Last updated {article.date.toLocaleString()}
              </Text>
              {/* <Text px={3} fontSize="sm">
                {Date}
              </Text> */}
            </Flex>
            <Heading size="md" mt={1} mb={10}>
              {article.title}
            </Heading>
            <Image
              objectFit="cover"
              maxW="100%"
              src={article.image}
              alt="article-img"
              rounded="md"
            />

            <Text py="6" fontSize={"lg"} whiteSpace={"pre-line"}>{article.content.toString()}</Text>

            <FilterBtn />
          </Box>

          <Box flex={0}></Box>
        </Flex>
      ) : (
        <Box>
          <Text>404 Error</Text>
          <br />
          <Text>Article Not Found</Text>
        </Box>
      )}
      <Footer />
    </>
  );
};
export default Blogdetails;
