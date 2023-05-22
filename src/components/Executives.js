import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import ExecutivesCard from "./ExecutivesCard";
import image1 from '../assets/deputy_chief.jpeg';
import image2 from '../assets/chief_scribe.jpeg';
import image3 from '../assets/f&d.jpg';
import image4 from '../assets/sigma_t.jpg';
import image5 from '../assets/publicity_chair.JPG';
import image6 from '../assets/sigma_t.jpg';
import image7 from '../assets/investment.JPG';
import image8 from '../assets/security.png';


const ExecutiveObj = [
  
     {
    id: 1,
    name: 'Loyalist Azeez Adewale',
    post: 'Deputy Chief (Band Committe Chairman)',
    image: image1,

  },
  {
    id: 2,
    name: 'Loyalist Babatola Benjamin',
    post: 'Chief Scribe (Secretariat Committe Chairman)',
    image: image2
  },
  {
    id: 3,
    name: 'Loyalist Eniola Moses',
    post: 'Financial Scribe (Food & Drinks Commitee Chairman)',
    image: image3
  },
  {
    id: 4,
    name: 'Loyalist Ogbonna',
    post: 'Deputy Scribe (Maintenance & Decoration Committee Chairman) ',
    image: image4
  },
  {
    id: 5,
    name: 'Loyalist Fijabi Oluwatobi',
    post: 'Publicity Committe ',
    image: image5,
    space: 'Chairman'
  },
  {
    id: 6,
    name: 'Loyalist Onifari Emmanuel',
    post: 'Sigma Treasurer (Sponsorship & Gate-keeping Committe Chairman)',
    image: image6
  },
  {
    id: 7,
    name: 'Loyalist Olugbenro Fredrick',
    post: 'Investment and Special Duties Committe Chairman',
    image: image7
  },
  {
    id: 8,
    name: 'Loyalist Adedokun Ibrahim',
    post: 'Security Committe',                                    
    image: image8,
    space: 'Chairman'
  }
   
];

export default function Executives() {
  return (
    <Box p={2}>

     
        <Heading fontSize='30px' fontWeight={"bold"}
        ml='10'>
         The Executives
        </Heading>
       
     
     
      <Container maxW={"8xl"} my={1}>
        
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {ExecutiveObj.map(({ image, name, post, space }) => (
            <ExecutivesCard
              image={image}
              name={name}
              post={post}
              space={space}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
