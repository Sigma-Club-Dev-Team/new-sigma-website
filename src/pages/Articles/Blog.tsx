import React from "react";
import { Container } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArticleArray } from "../../constants/articles";

const Blog = () => {
  return (
    <>
      <Header />
      <Container maxW="8xl" m="auto" p={{ base: "0", md: "5", lg: "7" }}>
        {ArticleArray.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Container>

      <Footer />
    </>
  );
};

export default Blog;
