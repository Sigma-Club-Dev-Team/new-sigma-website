import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link as ChakraTextLink,
  Popover,
  PopoverTrigger,
  useDisclosure,
  Image,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import sigmalogo from "../assets/sigma-logo-purple.png";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Container maxW="7xl">
      <Box>
        <Flex
          bg={"white"}
          color={"gray.600"}
          py={{ base: 4 }}
          align={"center"}
          justify={"space-between"}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Link to="/">
              <Image src={sigmalogo} w={140} alt="Sigma logo" />
            </Link>

            <Flex
              display={{ base: "none", md: "flex" }}
              flex={{ base: 1 }}
              justify={"center"}
            >
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
          >
            <Button
              display={{ base: "inline-flex" }}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={"purple"}
              _hover={"brand.purple"}
            >
              Donation
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Container>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} align={"center"} spacing={8}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href}
                fontSize={"sm"}
                fontWeight={600}
                color={"blue.700"}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={ChakraTextLink}
        href={href}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"gray.600"}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "About Us",
    href: "/about/history",
  },
  {
    label: "Articles",
    href: "#",
  },
  {
    label: "Events",
    href: "/events/quiz-competition",
  },
  {
    label: "Purchase Merch",
    href: "#",
  },
];
