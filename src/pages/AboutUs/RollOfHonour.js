import { Center } from "@chakra-ui/react";
import { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import OldChiefs from "../../components/RollOfHonour/OldChiefs";
import OldSigmites from "../../components/RollOfHonour/OldSigmites";

const ComponentRenderer = () => {
  const [selectedOption, setSelectedOption] = useState("OldChiefs");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <Center mt={30}>
      <Box>
        <Flex display="flex" my={3} justify="center">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="outline"
              mx={2}
            >
              {selectedOption === "OldChiefs" ? "Old Chiefs" : "Old Sigmites"}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleOptionSelect("OldChiefs")}>
                Old Chiefs
              </MenuItem>
              <MenuItem onClick={() => handleOptionSelect("Old Sigmites")}>
                'Old Sigmites
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="outline"
              mx={2}
            >
              Sigma Year
            </MenuButton>
            <MenuList>
              <MenuItem>1999</MenuItem>
              <MenuItem>1999</MenuItem>
              <MenuItem>1999</MenuItem>
              <MenuItem>1999</MenuItem>
              <MenuItem>1999</MenuItem>
              <MenuItem>1999</MenuItem>
              <MenuItem>1999</MenuItem>
            </MenuList>
          </Menu>

          <InputGroup width={{ base: "150px", md: "300px" }} mx={2}>
            <Input placeholder="search by name" />
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputRightElement>
          </InputGroup>
        </Flex>

        {selectedOption === "OldChiefs" && (
          <Box>
            <OldChiefs />
          </Box>
        )}

        {selectedOption === "Old Sigmites" && (
          <Box>
            <OldSigmites />
          </Box>
        )}
      </Box>
    </Center>
  );
};

export default ComponentRenderer;
