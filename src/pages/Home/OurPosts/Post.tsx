import React from 'react'
import { CoverImage } from 'components/myImage'
import { LuChevronsRight } from "react-icons/lu";
import { Box, Button, Icon, Text } from '@chakra-ui/react'


export default function Post() {
  return (
    <Box
      width={{ base: '100%', md: '22rem', lg: '29.875rem' }}
      minWidth={{ base: '100%', md: '22rem', lg: '29rem' }}
      borderRadius=".5rem"
      boxShadow="7px 7px 20px 0px #00000040"
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <Box position="relative" height={{ base: '14rem', md: '17rem' }}>
        <CoverImage src='./assets/images/jpgs/health.jpg' alt='Post Image' position='center' />
      </Box>
      <Box p="1rem" display="flex" flexDirection="column" gap=".75rem">
        <Text noOfLines={2} fontSize="1.125rem" lineHeight="1.6875rem" fontWeight="600">UCJ- Sigma Club quiz competition enters final stages by Akanni Oluwasegun.</Text>
        <Box>
          <Button variant="link" rightIcon={<Icon as={LuChevronsRight} w={4} h={4} />} fontSize="1rem" fontWeight="400">
            View
          </Button>
        </Box>
      </Box>
    </Box>
  );
}