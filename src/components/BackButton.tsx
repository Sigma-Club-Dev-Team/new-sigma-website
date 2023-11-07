import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Button
      leftIcon={<FiChevronLeft color="#333333" />}
      padding={"0"}
      margin={"0"}
      backgroundColor={"transparent"}
      _hover={{ bg: "transparent" }}
      onClick={() => {
        if (location.key !== "default") {
          navigate(-1);
        }
        navigate("/");
      }}
    >
      <Text fontSize={"16px"} lineHeight={"24px"} color={"#1C1C1CB2"}>
        Back
      </Text>
    </Button>
  );
};

export default BackButton;