import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  VStack,
  HStack,
  IconButton,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  FaEdit,
  FaPercent,
  FaList,
  FaQuestion,
  FaUserCog,
  FaUser,
  FaGraduationCap,
  FaPlus,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  

  return (
    <Box
      width={{ base: "full", md: "15.8125rem" }}
      bg="#EDEDED"
      color="white"
      height="100vh"
      py={10}
      fontFamily={"Poppins"}
      overflowY={"scroll"}
    >
      <VStack spacing={6} align="stretch">
        <HStack cursor="pointer" spacing={4} px={8}>
          <FaGraduationCap color="#333333" size="1.5rem" />
          <Text fontSize="xl" fontWeight="bold" color="#333333">
            Schools
          </Text>
        </HStack>

        <VStack align="stretch" spacing={4}>
          {[
            "Ambassadors",
            "School Two",
            "School Three",
            "School Four",
            "School Five",
            "School Six",
          ].map((school) => (
            <HStack
              cursor="pointer"
              key={school}
              spacing={4}
              bg={"#Ffffff"}
              px={8}
              py={2}
              _hover={{ shadow: "md" }}
            >
              <Text color="#333333">{school}</Text>
            </HStack>
          ))}
        </VStack>
        <Box textAlign={"center"}>
          <Button
            leftIcon={
              <Box
                as={FaEdit}
                bg="white"
                borderRadius=".3125rem"
                p={1}
                color="#8F19E7"
              />
            }
            rightIcon={
              <Box
                as={FaPlus}
                bg="white"
                borderRadius=".3125rem"
                p={1}
                color="#8F19E7"
              />
            }
            bg={"#8F19E7"}
            variant="solid"
            width="9.8125rem"
            mx={"auto"}
            color="white"
            _hover={{ shadow: "xlg" }}
            fontWeight={"400"}
            fontSize={"14px"}
          >
            Edit / Add
          </Button>

          <HStack
            cursor="pointer"
            spacing={0}
            textAlign={"center"}
            px={8}
            ml={8}
            mt={2}
            _hover={{ shadow: "md" }}
           
          >
            <IconButton
              aria-label="percent-scores"
              icon={<FaPercent />}
              variant="ghost"
              color="#333333"
              _hover={{ bg: "inherit" }}
            />
            <Text color="#333333">Scores</Text>
          </HStack>
        </Box>

        <VStack align="stretch" spacing={4}>
          <NavLink to="/all-schools" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <HStack
                cursor="pointer"
                spacing={0}
                px={4}
                py={2}
                _hover={{ shadow: "md" }}
                alignItems="center"
                borderLeft="5px solid"
                borderColor={isActive ? "#8F19E7" : "transparent"}
               
              >
                <IconButton
                  aria-label="all-schools"
                  icon={<FaList />}
                  variant="ghost"
                  color="#333333"
                />
                <Text color="#333333">All Schools</Text>
              </HStack>
            )}
          </NavLink>

          <NavLink to="/manage-questions" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <HStack
                cursor="pointer"
                spacing={0}
                px={4}
                py={2}
                _hover={{ shadow: "md" }}
                alignItems="center"
                borderLeft="5px solid"
                borderColor={isActive ? "#8F19E7" : "transparent"}
               
              >
                <IconButton
                  aria-label="manage-questions"
                  icon={<FaQuestion />}
                  variant="ghost"
                  color="#333333"
                />
                <Text color="#333333">Manage Questions</Text>
              </HStack>
            )}
          </NavLink>

          <NavLink to="/account" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <HStack
                cursor="pointer"
                spacing={0}
                px={4}
                py={2}
                _hover={{ shadow: "md" }}
                alignItems="center"
                borderLeft="5px solid"
                borderColor={isActive ? "#8F19E7" : "transparent"}
              
              >
                <IconButton
                  aria-label="account"
                  icon={<FaUser />}
                  variant="ghost"
                  color="#333333"
                />
                <Text color="#333333">Account</Text>
              </HStack>
            )}
          </NavLink>

          <NavLink to="/manage-users" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <HStack
                cursor="pointer"
                spacing={0}
                px={4}
                py={2}
                _hover={{ shadow: "md" }}
                alignItems="center"
                borderLeft="5px solid"
                borderColor={isActive ? "#8F19E7" : "transparent"}
              >
                <IconButton
                  aria-label="manage-users"
                  icon={<FaUserCog />}
                  variant="ghost"
                  color="#333333"
                />
                <Text color="#333333">Manage Users</Text>
              </HStack>
            )}
          </NavLink>

          <NavLink
            to="/roseline-etuokwu/my-account"
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <HStack
                cursor="pointer"
                spacing={0}
                px={4}
                py={2}
                _hover={{ shadow: "md" }}
                alignItems="center"
                borderLeft="5px solid"
                borderColor={isActive ? "#8F19E7" : "transparent"}
                shadow={"lg"}
              >
                <IconButton
                  aria-label="my-account"
                  icon={<FaUser />}
                  variant="ghost"
                  color="#333333"
                />
                <Text color="#333333">My Account</Text>
              </HStack>
            )}
          </NavLink>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;
