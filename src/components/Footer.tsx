import React, { PropsWithChildren } from "react";
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Heading,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

type SocialButtonProps = {
  label: string;
  href: string;
};

const SocialButton = ({
  children,
  label,
  href,
}: PropsWithChildren<SocialButtonProps>) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      target="_blank"
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

const ListHeader = ({ children }: PropsWithChildren) => {
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
      mt={"14"}
    >
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Heading>Sigma Club</Heading>
            <Text>
              Oldest Students' Organisation in Sub-Saharan Africa. Social and
              Philanthropic club building whole men capable and willing to make
              positive impacts in the nation and in the world.
            </Text>
            <Box>
              <VStack spacing={3} align="stretch">
                <Heading as="h4" size="md">
                  For Enquiries
                </Heading>
                <Text>
                  <Text as={"b"}>Email:</Text>{" "}
                  <ChakraLink
                    href="mailto:sigmaclub1950@gmail.com" target="_blank" rel="noopener noreferrer"
                    textDecoration={"underline"}
                  >
                   sigmaclub1950@gmail.com
                  </ChakraLink>
                </Text>
                <Text>
                  <Text as={"b"}>Phone Number:</Text>{" "}
                  <ChakraLink
                    href="tel: +234 813 469 0893"
                    textDecoration={"underline"}
                  >
                    +234 813 469 0893
                  </ChakraLink>
                </Text>
              </VStack>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Link to={"/"}>Home</Link>
            <Link to={"/about/history"}>About Us</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/events/quiz-competition"}>Events</Link>
            <Link to={"/merch"}>Merch Sales</Link>
            <Link to={"#"}>Donate</Link>
          </Stack>
          <Box>
            <ListHeader>Our Socials</ListHeader>
            <Stack direction={"row"} spacing={6} mb={4} mt={4}>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/_sigmaclub_ui"}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"YouTube"}
                href={"https://www.youtube.com/@SigmaClubUI"}
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://instagram.com/sigmaclub_ui"}
              >
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={"Linkedin"}
                href={
                  "https://www.linkedin.com/company/sigma-club-university-of-ibadan/"
                }
              >
                <FaLinkedin />
              </SocialButton>
              <SocialButton
                label={"Facebook"}
                href={"https://m.facebook.com/sigmaclubui/"}
              >
                <FaFacebook />
              </SocialButton>
            </Stack>

            <Stack align={"flex-start"}>
              <Text fontSize={"sm"} pt={4}>
                © {new Date().getFullYear()} Sigma Club. All rights reserved.
              </Text>
              <Text
                fontSize={"lg"}
                pt={2}
                textAlign="center"
                fontFamily={"body"}
                fontWeight="bold"
              >
                Powered By{" "}
                <NavLink
                  to={"/about/sigma-talents"}
                  style={(isActive) => ({
                    color: isActive ? "purple" : "purple",
                    fontSize: isActive ? "20px" : "20px",
                    textDecoration: isActive ? "underline" : "underline",
                  })}
                >
                  Sigma Talents
                </NavLink>
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
