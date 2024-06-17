import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Link as ChakraLink,
  Heading,
  Stack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { LuChevronLeft } from "react-icons/lu";
import { CoverImage, ContainImage } from "components/myImage";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import MediaPosts from "constants/media-posts";

function ViewAllPosts() {
  return (
    <Box padding={{ base: "2rem", md: "5rem" }}>
      <Box mb={"2rem"}>
        <Link to={"/"}>
          <Button
            variant="link"
            leftIcon={<Icon as={LuChevronLeft} w={4} h={4} />}
            fontSize="1rem"
            fontWeight="400"
          >
            Back
          </Button>
        </Link>
      </Box>

      <Stack spacing="2rem" alignItems={"center"}>
        {MediaPosts.map((post, index) => (
          <Box key={index} width={{ base: "100%", lg: "50%", md: "806px" }}>
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
              maxW={"860px"}
              maxH="348px"
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
              <Text fontSize=".875rem" fontWeight="400" mb="1rem">
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
      </Stack>
    </Box>
  );
}

export default ViewAllPosts;
