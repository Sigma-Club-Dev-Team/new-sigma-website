import { Heading, Text, Image, Box, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ArticleArray } from "../../constants/articles";
import FilterBtn from "./filterbtn";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Blogdetails = () => {
  const { id } = useParams();
  console.log(id);
  const { image, title, article, Date, Time } = ArticleArray.find(
    (article) => article.id === parseInt(id)
  );

  return (
    <>
      <Header />
      <Flex m="auto" p={10} flexDirection={{ base: "column", md: "row" }}>
        <Box flex={10}>
          <Flex pb={5}>
            <Text px={3} color="purple" fontSize="sm">
              Sigma club
            </Text>
            <Text px={3} fontSize="sm">
              {" "}
              Last updated {Time}
            </Text>
            <Text px={3} fontSize="sm">
              {Date}
            </Text>
          </Flex>
          <Heading size="md" mt={1} mb={10}>
            {title}
          </Heading>
          <Image
            objectFit="cover"
            maxW="100%"
            src={image}
            alt="article-img"
            rounded="md"
          />

          <Text py="2">{article}</Text>

          <FilterBtn />
        </Box>

        <Box flex={0}></Box>
      </Flex>
      <Footer />
    </>
  );
};
export default Blogdetails;
