import React from 'react';
import { Box, Flex, Image, Text, Link as ChakraLink, Heading, Stack, Button, Icon } from '@chakra-ui/react';
import { ChevronLeft } from 'lucide-react';
import { CoverImage, ContainImage } from 'components/myImage';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';

const posts = [
  {
    category: "©️THE LAW PRESS ORGANISATION, 2024.",
    imageUrl: './assets/images/pngs/resss2022.png',
    title: 'NEWS: Roseline Etuokwu Sigma National Secondary Schools Quiz Competition Reaches Thrilling Final Stage',
    description: 'From the state heats to the regional showdowns, and now to the national final, each stage has been a showcase of knowledge, collaboration... ',
    link: 'https://thelawpress.wordpress.com/2024/05/12/roseline-etuokwu-sigma-national-secondary-school-quiz-competition-reaches-thrilling-final-stage/'
  },
  {
    category: "Channels Television",
    logoUrl: './assets/images/pngs/channelLogo.png',
    videoUrl: 'https://www.youtube.com/watch?v=fc2-N8w2g6M'
  },
  {
    category: "Sigma Club",
    logoUrl: './assets/images/pngs/logo.png',
    imageUrl: './assets/images/pngs/kesington.png',
    title: 'Sigma Club Congratulates Honourary Sigmite Sir Kessignton Adebutu',
    description: 'The Sigma Chief congratulates Honorary Sigmite, Adebutu Kesington on his well deserved ascension to the position of the President of the association of Lagos. His accomplishment has been an inspiration to all. Your win is a victory for all those  who believe and practice the Sigma principles of discipline, philanthropy and social impact. Accept our congratulations on this outstanding achievement. We wish you strength and success as you embark on this new chapter of service.',
  },
  {
    category: "Sigma Club",
    logoUrl: './assets/images/pngs/logo.png',
    imageUrl: './assets/images/pngs/isaac.png',
    title: 'Sigma Club Congratulates Honourary Sigmite Prof. Isaac Folorunsho Adewale',
    description: 'On behalf of Sigma Club, the Sigma Chief congratulates Honourary Sigmite, Prof. Isaac Folorunso Adewole on his well deserved retirement after years of meritorious service to the country and humanity. His accomplishments are sources of  inspiration and testament to the core Sigma values of integrity, discipline and philanthropy. Accept our congratulations on your retirement. We pray God grants you strength and good health on this new chapter of your life.',
  },
  {
    category: "©THE DAILY TRIBUNE NEWSPAPER",
    imageUrl: './assets/images/pngs/resss2022.png',
    title: 'NEWS:Finalists Emerge from Roseline Etuokwu Sigma Quiz Competition',
    description: 'From the state heats to the regional showdowns, and now to the national final, each stage has been a showcase of knowledge, collaboration... ',
    link: 'https://thelawpress.wordpress.com/2024/05/12/roseline-etuokwu-sigma-national-secondary-school-quiz-competition-reaches-thrilling-final-stage/'
  },
  {
    category: "Sigma Club",
    logoUrl: './assets/images/pngs/logo.png',
    videoUrl: 'https://www.youtube.com/watch?v=0kChM02MPOU',
    description: "What inspired the initiative of the Roseline Etuokwu Sigma National Secondary School Quiz Competition❓Listen to the Sigma Chief as he explains how the idea of the Quiz Competition came to be . See the rest of the Sigma Chief's Interview at the Morning Show on Arise TV",
    link: 'https://www.youtube.com/watch?v=0kChM02MPOU'
  },
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
        {posts.map((post, index) => (
          <Box key={index} width={{base: "100%", lg: "50%", md: "806px",}}>
            <Flex alignItems="center" mb="1rem">
              <Text fontSize="1rem" fontWeight="500" display="flex" gap={".5rem"} alignItems="center">
                {post.logoUrl && <Image src={post.logoUrl} alt={`${post.category} Logo`} boxSize="1.5rem" ml="0.5rem" />}
                {post.category}
              </Text>
            </Flex>
            <Box position="relative" borderRadius={".5rem"} overflow={"hidden"} maxW={"860px"} maxH="348px" w="100%" h="auto" aspectRatio={"806/348"} mb="1rem">
              {post.imageUrl ? <CoverImage src={post.imageUrl} alt='Post Image' position='center' /> : (
                <ReactPlayer url={'https://www.youtube.com/watch?v=fc2-N8w2g6M'} controls playIcon={<ContainImage src={'./assets/images/pngs/logo.png'} alt='Play Icon' />} />
              )}
            </Box>
            {/* <Image src={post.imageUrl} alt={post.title} maxW="806px" maxH="348px" w="100%" h="auto" mb="1rem" /> */}
            {post.title ? <Heading as="h2" fontSize="18px" fontWeight="700" mb="0.5rem">{post.title}</Heading> : null}
            {post.description ? <Text fontSize=".875rem" fontWeight="400" mb="1rem">{post.description}</Text> : null}
            {post.link ? <ChakraLink href={post.link} color="blue.400" fontSize=".875rem" fontWeight="400" isExternal>
              Read more
            </ChakraLink> : null}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default ViewAllPosts;
