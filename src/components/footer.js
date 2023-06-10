import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
  VStack,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Heading>Sigma Club</Heading>
            <Text>
              Oldest club in Sub-Saharan Africa. Social and Philanthropic club
              building whole men capable and willing to make positive impacts in
              the nation and in the world.
            </Text>
            <Box>
              <VStack spacing={3} align="stretch">
                <Heading as="h4" size="md">
                  For Enquiries
                </Heading>
                <Text>
                  <Text as={"b"}>Email:</Text> Sigmaclub1950@gmail.com
                </Text>
                <Text>
                  <Text as={"b"}>Phone Number:</Text> +234 818 254 3200
                </Text>
              </VStack>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Events</Link>
            <Link href={"#"}>Merch Sales</Link>
            <Link href={"#"}>Donate</Link>
          </Stack>
          <Box>
            <ListHeader>Our Socials</ListHeader>
            <Stack direction={"row"} spacing={6} mb={4} mt={4}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Linkedin"} href={"#"}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Subscribe to our Newsletter</ListHeader>
              <Stack direction={"row"}>
                <Input
                  placeholder={"Your email address"}
                  bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                />
                <IconButton
                  bg={"brand.purple"}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "brand.purple",
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>

              <Text fontSize={"sm"} pt={4}>
                © 2023 Sigma Club. All rights reserved.
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
