import React, { useState } from "react";
import { OldSigmitesOBJ } from "./RollOfHonourData/OldSigmitesData";
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
import { Link as RRLink } from "react-router-dom";

const OldSigmites = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [oldSigmites, setOldSigmites] = useState(OldSigmitesOBJ.slice(0, 100));
  const [showAll, setShowAll] = useState(false);

  const handleYearFilter = (year: string) => {
    setSelectedYear(year);
    // Filter old sigmites based on selected year
    const filteredSigmites = OldSigmitesOBJ.filter((sigmite) => {
      return year === "" || sigmite.sigmaYear === year;
    });

    if (year === "") {
      setOldSigmites(OldSigmitesOBJ.slice(0, 100));
    } else {
      setOldSigmites(filteredSigmites.slice(0, 100));
    }
    setShowAll(false);
  };

  // Filter old sigmites based on search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filteredSigmites = query
      ? OldSigmitesOBJ.filter((sigmite) =>
          sigmite.name.toLowerCase().includes(query.toLowerCase())
        )
      : OldSigmitesOBJ.slice(0, 100);

    setOldSigmites(filteredSigmites);
    setShowAll(false);
  };

  //Fetch all Old Sigmites
  const fetchAllItems = () => {
    setOldSigmites(OldSigmitesOBJ);
    setShowAll(true);
  };

  //Fetch reouccuring years once into the dropdown menu to filter by year
  const UniqueYears = Array.from(
    new Set(OldSigmitesOBJ.map((sigmite) => sigmite.sigmaYear))
  );

  return (
    <div>
      <Center mt={5}>
        <Box>
          <Flex display="flex" my={3} justify="center">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="outline"
                mx={2}
              >
                Old Sigmites
              </MenuButton>
              <MenuList>
                <RRLink to={"/about/roll-of-honour"}>
                  <MenuItem>Old Chiefs</MenuItem>
                </RRLink>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                bg={"purple"}
                _hover={{ bg: "brand.purple" }}
                color={"white"}
                rightIcon={<ChevronDownIcon />}
              >
                {selectedYear ? selectedYear : "Filter by Year"}
              </MenuButton>
              <MenuList maxH="200px" overflow="auto">
                <MenuItem onClick={() => handleYearFilter("")}>
                  All Years
                </MenuItem>
                {UniqueYears.map((year) => (
                  <MenuItem key={year} onClick={() => handleYearFilter(year)}>
                    {year}
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

      <Container maxW={{ base: "100%", md: "70%" }} my={6} py={2}>
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <Thead w={100}>
              <Th textAlign="left" color="black" fontWeight="bold">
                S/N
              </Th>
              <Th textAlign="left" color="black" fontWeight="bold">
                Old Sigmites
              </Th>
              <Th textAlign="center" color="black" fontWeight="bold">
                Sigma Year
              </Th>
            </Thead>
            <Tbody>
              {oldSigmites.length > 0 ? (
                oldSigmites.map(({ name, sigmaYear, id }) => (
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

        {!showAll && oldSigmites.length < OldSigmitesOBJ.length && (
          <Center mt={4}>
            <Button
              bg={"purple"}
              _hover={{ bg: "brand.purple" }}
              color={"white"}
              onClick={fetchAllItems}
            >
              Display All Old Sigmites
            </Button>
          </Center>
        )}
      </Container>
    </div>
  );
};

export default OldSigmites;
