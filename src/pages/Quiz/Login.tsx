import React from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { SigmaLogo } from "../../constants/image_assets";

const LoginPage: React.FC = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="white"
      fontFamily={"Poppins"}
    >
      <Box
        width="50rem"
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
            <Heading size="xl" textAlign="left" color="#8F19E7">
              Log in
            </Heading>
            <Text color={"#333333"} fontSize={"1rem"}>
              Provide your information in 10 minutes
            </Text>
          </Box>

          <Box py={6} mb={6}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
          </Box>
          <Button
            width="37.0625rem"
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

          <Link to="/" color="#8F19E7">
            <Text color="#8F19E7"> Sign up</Text>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
