import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import Post from './Post';
import { Link } from "react-router-dom"
import MediaPosts from 'constants/media-posts';

export default function OurPosts() {
  return (
    <Box p={{ base: '2rem 1rem 0', md: '2rem 2rem 0', lg: '2rem 6rem 0' }} display="flex" flexDirection="column" gap="1.5rem">
      <Flex flexDirection="column" gap="1rem">
        <Heading as="h3" fontSize="2.5rem" lineHeight="2.5rem" fontWeight="600">Our Posts</Heading>
        <Text fontSize="1rem" fontWeight="400">View our posts and progress on some of our events and distinguished members.</Text>
      </Flex>

      <Flex
        overflowX="auto"
        pb="2rem"
        gap="3rem"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
        {MediaPosts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Flex>
      
      <Flex justifyContent="space-between" alignItems="center">
        <Box />
        <Link to={"/posts"}>
          <Button colorScheme="blue">VIEW ALL</Button>
        </Link>
      </Flex>
    </Box>
  );
}