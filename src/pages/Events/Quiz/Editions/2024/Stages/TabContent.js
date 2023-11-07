import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

function TabContent({ title, content, buttonText, tableData }) {
  return (
    <div>
      <Text py={4}>{content}</Text>
      <Box
        bg="#8F19E7"
        width="full"
        color="white"
        cursor="pointer"
        rounded="md"
        padding="10px"
        my={2}
        dangerouslySetInnerHTML={{ __html: buttonText }}
      />
      <Text fontWeight="500">{title}</Text>
      <Text pb={20} pt={2}>
        {" "}
        To be determined
      </Text>
      {/* Comment out Table data
      <div style={{  overflowX: "auto" }}>
        <Table variant="striped" minWidth="600px" my={3}>
          <Thead>
            <Tr>
              <Th textAlign="center">School Name & Address</Th>
              <Th textAlign="center">Student Name</Th>
              <Th textAlign="center">Region</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <Td key={cellIndex} width="30%" textAlign="left">
                  <div dangerouslySetInnerHTML={{ __html: cell }} />
                </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
      */}
      <Link href="https://www.ola.com">
        <Button
          rightIcon={<FaArrowRight />}
          fontWeight={600}
          color={"white"}
          bg={"brand.purple"}
          _hover={{ bgColor: "brand.purple" }}
          variant="solid"
        >
          Register your school
        </Button>
      </Link>
    </div>
  );
}

export default TabContent;
