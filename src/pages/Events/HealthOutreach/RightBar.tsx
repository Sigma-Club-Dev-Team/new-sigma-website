import React from "react";
import { useLocation } from "react-router-dom";
import { Divider, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const editions = [
  { year: "2023", path: "/events/health-outreach/2023" },
  { year: "2024", path: "/events/health-outreach/2024" },
  
 
];

const SideBar = () => {

  //Grab the path name so as not to include the current page edition in the other editions side bar
  const location = useLocation();
  const currentYear = location.pathname.split("/").pop();

  return (
    <Box display={"flex"}>
      <Divider
        my={10}
        bg="#1C1C1CB2"
        height="200vh"
        mr={2}
        px={0}
        borderWidth="1.5px"
        orientation="vertical"
        display={{ base: "none", md: "block" }}
      />

      <Box
        flex={{ base: "none", md: 2 }}
        mt={4}
        p={{ lg: "4", md: "3", sm: "4" }}
        fontWeight="500"
      >
        <Text fontSize={"xl"}>Other Editions</Text>
        {editions
          .filter(edition => edition.year !== currentYear)
          .map(edition => (
            <Box key={edition.year} py={4}>
              <Text>{edition.year} Sigma Health Outreach</Text>
              <Link to={edition.path}>
                <Text
                  textDecoration="underline"
                  textAlign="right"
                  color="#8F19E7"
                >
                  View
                </Text>
              </Link>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default SideBar;
