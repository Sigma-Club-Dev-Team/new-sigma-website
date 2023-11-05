import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useDisclosure,
  Image,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import DonateModal from "./Donate";
import { SigmaLogoJPG } from "constants/image_assets";

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
              <Image src={SigmaLogoJPG} w={120} h={100} alt="Sigma logo" />
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
            <DonateModal />
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
              <NavLink to={navItem.href}>
                <Text fontSize={"md"}>{navItem.label}</Text>
              </NavLink>
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

type MobileNavItemProps = {
  label: string;
  href: string;
};
const MobileNavItem = ({ label, href }: MobileNavItemProps) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={NavLink}
        to={href}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text>{label}</Text>
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
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Events",
    href: "/events/quiz-competition",
  },
  {
    label: "Purchase Merch",
    href: "/merch",
  },
];
