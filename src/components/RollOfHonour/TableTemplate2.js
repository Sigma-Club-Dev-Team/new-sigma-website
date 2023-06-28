import { Container } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Th,
  TableContainer,
  Tr,
  Td,
} from "@chakra-ui/react";

export default function TableList({ data }) {
  return (
    <Container maxW={{ base: "100%", md: "70%" }} my={6} py={2}>
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <Thead w={100}>
            <Th textAlign="left" color="black" fontWeight="bold">
              Old Sigmites
            </Th>
            <Th textAlign="center" color="black" fontWeight="bold">
              Sigma Year
            </Th>
          </Thead>
          <Tbody>
            {data.map(({ name, year, id }) => (
              <Tr key={id}>
                <Td width="400px" textAlign="left" py={3} px={6}>
                  {" "}
                  {name}
                </Td>
                <Td width="400px" textAlign="center" py={3}>
                  {year}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
