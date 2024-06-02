import React from 'react';
import { Box, Flex, Image, Text, Link as ChakraLink, Heading, Stack, Button, Icon } from '@chakra-ui/react';
import { ChevronLeft } from 'lucide-react';
import { CoverImage } from 'components/myImage';
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    category: "©️THE LAW PRESS ORGANISATION, 2024.",
    imageUrl: './assets/images/jpgs/health.jp',
    title: 'NEWS: Roseline Etuokwu Sigma National Secondary Schools Quiz Competition Reaches Thrilling Final Stage',
    description: 'From the state heats to the regional showdowns, and now to the national final, each stage has been a showcase of knowledge, collaboration... ',
    link: 'https://thelawpress.wordpress.com/2024/05/12/roseline-etuokwu-sigma-national-secondary-school-quiz-competition-reaches-thrilling-final-stage/'
  },
  {
    id: 2,
    category: "Channels Television",
    logoUrl: './assets/images/channels-logo.png',
    imageUrl: './assets/images/jpgs/health.jp',
    title: 'Sigma Club Congratulates Honourary Sigmite Sir Kessignton Adebutu',
    description: 'The Sigma Chief congratulates Honorary Sigmite, Adebutu Kesington on his well deserved ascension to the position of the President of the association of Lagos. His accomplishment has been an inspiration to all. Your win is a victory for all those  who believe and practice the Sigma principles of discipline, philanthropy and social impact. Accept our congratulations on this outstanding achievement. We wish you strength and success as you embark on this new chapter of service.',
    link: 'https://example.com/post2'
  },
  {
    id: 3,
    category: "Sigma Club",
    logoUrl: './assets/images/sigma-logo.png',
    imageUrl: './assets/images/jpgs/health.jp',
    title: 'NEWS:Finalists Emerge from Roseline Etuokwu Sigma Quiz Competition',
    description: 'From the state heats to the regional showdowns, and now to the national final, each stage has been a showcase of knowledge, collaboration... ',
    link: 'https://example.com/post3'
  }
  // Add more posts as needed
];

function ViewAllPosts() {

  return (
    <Box padding={{base: "2rem", md: "5rem"}}>
      <Box mb={"2rem"}>
        <Link to={"/"}>
          <Button variant="link" leftIcon={<Icon as={ChevronLeft} w={4} h={4} />} fontSize="1rem" fontWeight="400">
            Back
          </Button>
        </Link>
      </Box>

      <Stack spacing="2rem" alignItems={"center"}>
        {posts.map(post => (
          <Box key={post.id} width={{base: "100%", lg: "50%", md: "806px",}}>
            <Flex alignItems="center" mb="1rem">
              <Text fontSize="1rem" fontWeight="500" display="flex" alignItems="center">
                {post.logoUrl && <Image src={post.logoUrl} alt={`${post.category} Logo`} boxSize="1.5rem" ml="0.5rem" />}
                {post.category}
              </Text>
            </Flex>
            <Box position="relative" borderRadius={".5rem"} overflow={"hidden"} maxW={"860px"} maxH="348px" w="100%" h="auto" aspectRatio={"806/348"} mb="1rem">
              <CoverImage src='./assets/images/jpgs/health.jpg' alt='Post Image' position='center' />
            </Box>
            {/* <Image src={post.imageUrl} alt={post.title} maxW="806px" maxH="348px" w="100%" h="auto" mb="1rem" /> */}
            <Heading as="h2" fontSize="18px" fontWeight="700" mb="0.5rem">{post.title}</Heading>
            <Text fontSize=".875rem" fontWeight="400" mb="1rem">{post.description}</Text>
            <ChakraLink href={post.link} color="blue.400" fontSize=".875rem" fontWeight="400" isExternal>
              Read more
            </ChakraLink>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default ViewAllPosts;
