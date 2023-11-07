import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Button, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

/**
 * For the backbutton to work properly, 
 * We need to make use of react-router-dom components such as NavLink or Link for navigation  */
const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Button
      backgroundColor={"transparent"}
      _hover={{ bg: "transparent" }}
      onClick={() => {
        if (location.key !== "default") {
          navigate(-1);
        } else {
          navigate("/");
        }
        
      }}
    >
      <Flex alignItems={"center"}>
        <FiChevronLeft color="#333333" size={"16px"}/>
        <Text fontSize={"18px"} lineHeight={"24px"} color={"#1C1C1CB2"} fontWeight={"600"} textAlign={"center"} verticalAlign={"middle"} as="span">
          Back
        </Text>
      </Flex>
    </Button>
  );
};

export default BackButton;