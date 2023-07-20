import {
  Avatar,
  Flex,
  Heading,
  Box,
  Card,
  CardHeader,
  Text,
  CardBody,
  CardFooter,
  Stack,
  VisuallyHidden,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={10}
      h={10}
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

const Talents = ({
  Headshot,
  name,
  skill,
  intro,
  LinkedIn,
  Email,
  Twitter,
  Instagram,
}) => {
  return (
    <Card width="350px" variant="filled" shadow="md">
      <CardHeader>
        <Flex spacing="8">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={name} src={Headshot} size="lg" objectFit="cover" />

            <Box>
              <Heading size="sm">Loyalist {name}</Heading>
              <Text>{skill}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text textAlign="justify">{intro}</Text>
      </CardBody>

      <CardFooter
        justify="space-around"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Box>
          <Stack direction={"row"} spacing={6} mb={4} mt={4}>
            {LinkedIn !== "#" && (
              <SocialButton label={"Linkedin"} href={LinkedIn}>
                <FaLinkedin />
              </SocialButton>
            )}
            {Email !== "#" && (
              <SocialButton label={"Email"} href={`mailto:${Email}`}>
                <FaEnvelope />
              </SocialButton>
            )}
            {Instagram !== "#" && (
              <SocialButton label={"Instagram"} href={Instagram}>
                <FaInstagram />
              </SocialButton>
            )}
            {Twitter !== "#" && (
              <SocialButton label={"Twitter"} href={Twitter}>
                <FaTwitter />
              </SocialButton>
            )}
          </Stack>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default Talents;
