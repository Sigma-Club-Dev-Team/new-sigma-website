import { Container } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {ArticleArray} from '../../constants/articles';

const Blog = () => {
  return (
    <>
      <Header />
      <Container maxW="8xl" m="auto" p={10}>
        {ArticleArray.map((article) => (
          <ArticleCard
            article={article}
          />
        ))}
      </Container>

      <Footer />
    </>
  );
};

export default Blog;
