import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import ExecutivesCard from "./ExecutivesCard";
import {
  DeputyChiefJPG,
  ChiefScribeJPG,
  FDChairJPG,
  SigmaTJPG,
  InvestmentChairJPG,
  SecurityChairJPG,
  PublicityChairJPG,
  DeputyChiefScribeJPG,
  // DEFAULT,
} from "constants/image_assets";
import { Executive } from "types";

const ExecutiveObj: Executive[] = [
  {
    id: 1,
    name: "Loyalist Olalekan Michael",
    post: "Deputy Chief (Band Committee Chairman)",
    image: DeputyChiefJPG,
  },
  {
    id: 2,
    name: "Loyalist Oladimeji Muheez",
    post: "Chief Scribe (Secretariat Committee Chairman)",
    image: ChiefScribeJPG,
  },
  {
    id: 3,
    name: "Loyalist Ayodeji Timothy",
    post: "Financial Scribe (Food & Drinks Committee Chairman)",
    image: FDChairJPG,
  },
  {
    id: 4,
    name: "Loyalist Ogbonna Prince",
    post: "Deputy Scribe (Maintenance & Decoration Committee Chairman) ",
    image: DeputyChiefScribeJPG,
  },
  {
    id: 5,
    name: "Loyalist Fadipe Charles",
    post: "Publicity Committee Chairman",
    image: PublicityChairJPG,
  },
  {
    id: 6,
    name: "Loyalist Abdulazeez Yusuf",
    post: "Sigma Treasurer (Sponsorship & Gate-keeping Committee Chairman)",
    image: SigmaTJPG,
  },
  {
    id: 7,
    name: "Loyalist Adeoye Obafemi",
    post: "Investment and Special Duties Committee Chairman",
    image: InvestmentChairJPG,
  },
  {
    id: 8,
    name: "Loyalist Akparanta Simeon",
    post: "Security Committee Chairman",
    image: SecurityChairJPG,
  },
];

export default function Executives() {
  return (
    <Container maxW={"7xl"}>
      <Container my={"25px"} maxW={"100%"}>
        <Heading fontSize="30px" fontWeight={"bold"} marginBottom={"25px"}>
          The Executives
        </Heading>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {ExecutiveObj.map((executive) => (
            <ExecutivesCard executive={executive} />
          ))}
        </Flex>
      </Container>
    </Container>
  );
}
