import React, { useState } from "react";
import { OldChiefsOBJ } from "./RollOfHonourData/OldChiefsData"; // Imported object array
import {
  Container,
  Center,
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Th,
  TableContainer,
  Tr,
  Td,
} from "@chakra-ui/react";
import AlumniTypeDropDown from "./AlumniTypeDropDown";

const OldChiefs = () => {
  const [selectedYear, setSelectedYear] = useState(""); // State for selected year in the dropdown
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [oldChiefs, setOldChiefs] = useState(OldChiefsOBJ); // State for old chiefs, initialized with the object array

  // Filter old chiefs based on selected year
  const handleYearFilter = (year: string) => {
    setSelectedYear(year);
    if (year === "") {
      // If "All Years" is selected, show all old chiefs
      setOldChiefs(OldChiefsOBJ);
    } else {
      const filteredChiefs = OldChiefsOBJ.filter((chief) => {
        return year === "" || chief.sigmaYear === year;
      });

      setOldChiefs(filteredChiefs);
    }
  };

  // Filter old chiefs based on search query
  const handleSearch = (query:string) => {
    setSearchQuery(query);
    const filteredChiefs = OldChiefsOBJ.filter((chief) =>
      chief.name.toLowerCase().includes(query.toLowerCase())
    );
    setOldChiefs(filteredChiefs);
  };

  return (
    <div>
      <div>
        {/* Drop-down for selecting year */}
        <Center mt={5}>
          <Box>
            <Flex display="flex" my={3} justify="center">
              <AlumniTypeDropDown label={'Old Chiefs'}/>

              <Menu>
                <MenuButton
                  as={Button}
                  bg={"purple"}
                  _hover={{bg: "brand.purple"}}
                  color={"white"}
                  rightIcon={<ChevronDownIcon />}
                >
                  {selectedYear ? selectedYear : "Filter by Year"}
                </MenuButton>
                <MenuList maxH="200px" overflow="auto">
                  <MenuItem onClick={() => handleYearFilter("")}>
                    All Years
                  </MenuItem>
                  {/* Render options based on available years */}
                  {OldChiefsOBJ.map((data) => (
                    <MenuItem
                      key={data.id}
                      onClick={() => handleYearFilter(data.sigmaYear)}
                    >
                      {data.sigmaYear}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <InputGroup width={{ base: "150px", md: "300px" }} mx={2}>
                <Input
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="gray.500" />
                </InputRightElement>
              </InputGroup>
            </Flex>
          </Box>
        </Center>
      </div>

      <Container maxW={{ base: "100%", md: "70%" }} my={6} py={2}>
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <Thead w={100}>
              <Th textAlign="left" color="black" fontWeight="bold">
                S/N
              </Th>
              <Th textAlign="left" color="black" fontWeight="bold">
                Old Chiefs
              </Th>
              <Th textAlign="center" color="black" fontWeight="bold">
                Sigma Year
              </Th>
            </Thead>
            <Tbody>
              {oldChiefs.length > 0 ? (
                oldChiefs.map(({ name, sigmaYear, id }) => (
                  <Tr key={id}>
                    <Td width="50px" textAlign="left" py={3} px={6}>
                      {id}
                    </Td>
                    <Td width="600px" textAlign="left" py={3} px={6}>
                      {name}
                    </Td>
                    <Td width="400px" textAlign="center" py={3}>
                      {sigmaYear}
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan={3} textAlign="center">
                    Query not found!
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default OldChiefs;
