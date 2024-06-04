import React,  { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  VStack,
  Text,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaLock } from 'react-icons/fa';

import { Link } from "react-router-dom";
import {
    ViewIcon,
    ViewOffIcon,
   
  } from "@chakra-ui/icons";

import { SigmaLogo } from "../../constants/image_assets";

const LoginPage: React.FC = () => {

   
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };
    

  return (
    <Flex
      width="95vw"
      height="95vh"
      alignItems="center"
      justifyContent="center"
      bg="white"
      fontFamily={"Poppins"}
    >
      <Box
        width={{base: '100%', md: '60%', lg: '45rem'}}
        height="43.75rem"
        padding="2rem"
        borderRadius="1.875rem"
        boxShadow="lg"
        bg="#EDEDED"
      >
        <Box py={4}>
          <Image src={SigmaLogo} />
        </Box>
        <VStack align="stretch">
          <Box py={4}>
            <Heading fontSize={"24px"} textAlign="left" color="#8F19E7">
              Log in
            </Heading>
            <Text color={"#333333"} fontSize={"1rem"}>
              Provide your information in 10 minutes
            </Text>
          </Box>

          <Box py={6} mb={6}>
           

          <FormControl data-aos="fade-up" data-aos-duration="2000">
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  borderColor="#808080"
                  borderRadius="12px"
                  color="white"
                  fontSize={"16px"}
                  placeholder="Type here"
                  fontFamily="Poppins"
                />
               
              </InputGroup>
            </FormControl>


            <FormControl
              mt={4}
              mb="3"
            >
             <FormLabel display="flex" alignItems="center">
              Password <FaLock style={{ marginLeft: '8px' }} />
            </FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  borderColor="#808080"
                  fontSize={"16px"}
                  placeholder="Type here"
                  borderRadius="12px"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleTogglePassword}
                    _hover={{ bg: "inherit" }}
                    _active={{ bg: "inherit" }}
                    
                  >
                    {showPassword ? <ViewOffIcon  /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>


          </Box>
          <Button
            width={{base: '80%', md: '60%', lg: '35rem'}}
            height="3.75rem"
            position="relative"
            left="50%"
            transform="translateX(-50%)"
            borderRadius=".625rem"
            opacity={0.8}
            bg="#8F19E7"
            color="white"
            _hover={{ opacity: 1 }}
          >
            Log In
          </Button>
        </VStack>

        <Box
          display={"flex"}
          mx={"auto"}
          justifyContent={"center"}
          mt={20}
          gap={4}
        >
          <Text>Don't have an account ?</Text>

          <Link to="/sign-up" color="#8F19E7">
            <Text color="#8F19E7" textDecoration={"underline"}> Sign up</Text>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
