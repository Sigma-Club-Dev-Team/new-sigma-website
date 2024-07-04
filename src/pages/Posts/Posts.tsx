import React from "react";
import {
  SimpleGrid,
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { CoverImage, ContainImage } from "components/myImage";
import ReactPlayer from "react-player";
import MediaPosts from "constants/media-posts";
import Header from "components/Header";
import Footer from "components/Footer";

function ViewAllPosts() {
  return (
    <>
      <Header />
      <Box padding={{ base: "2rem", md: "3rem" }}>
        <SimpleGrid minChildWidth="380px" spacing="40px">
          {MediaPosts.map((post, index) => (
            <Box key={index} width="100%">
              <Flex alignItems="center" mb="1rem">
                <Text
                  fontSize="1rem"
                  fontWeight="500"
                  display="flex"
                  gap={".5rem"}
                  alignItems="center"
                >
                  {post.logoUrl && (
                    <Image
                      src={post.logoUrl}
                      alt={`${post.source} Logo`}
                      boxSize="1.5rem"
                      ml="0.5rem"
                    />
                  )}
                  {post.source}
                </Text>
              </Flex>
              <Box
                position="relative"
                borderRadius={".5rem"}
                overflow={"hidden"}
                w="100%"
                h="auto"
                aspectRatio={"806/348"}
                mb="1rem"
              >
                {post.imageUrl ? (
                  <CoverImage
                    src={post.imageUrl}
                    alt="Post Image"
                    position="center"
                  />
                ) : (
                  <ReactPlayer
                    url={post.videoUrl}
                    controls
                    playIcon={
                      <ContainImage
                        src={"./assets/images/pngs/logo.png"}
                        alt="Play Icon"
                      />
                    }
                  />
                )}
              </Box>
              {post.title ? (
                <Heading as="h2" fontSize="18px" fontWeight="700" mb="0.5rem">
                  {post.title}
                </Heading>
              ) : null}
              {post.description ? (
                <Text
                  fontSize=".875rem"
                  fontWeight="400"
                  mb="1rem"
                  textAlign="justify"
                >
                  {post.description}
                </Text>
              ) : null}
              {post.link ? (
                <ChakraLink
                  href={post.link}
                  color="blue.400"
                  fontSize=".875rem"
                  fontWeight="400"
                  isExternal
                >
                  Read more
                </ChakraLink>
              ) : null}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}

export default ViewAllPosts;
