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
  DeputyChiefScribeJPG
} from "constants/image_assets";
import { Executive } from "types";

const ExecutiveObj: Executive[] = [
  {
    id: 1,
    name: "Loyalist Rasheed Habeeb",
    post: "Deputy Chief (Band Committee Chairman)",
    image: DeputyChiefJPG,
  },
  {
    id: 2,
    name: "Loyalist Babatola Benjamin",
    post: "Chief Scribe (Secretariat Committee Chairman)",
    image: ChiefScribeJPG,
  },
  {
    id: 3,
    name: "Loyalist Eniola Moses",
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
    post: "Publicity Committee ",
    image: PublicityChairJPG,
    space: "Chairman",
  },
  {
    id: 6,
    name: "Loyalist Onifari Emmanuel",
    post: "Sigma Treasurer (Sponsorship & Gate-keeping Committee Chairman)",
    image: SigmaTJPG,
  },
  {
    id: 7,
    name: "Loyalist Olugbenro Fredrick",
    post: "Investment and Special Duties Committee Chairman",
    image: InvestmentChairJPG,
  },
  {
    id: 8,
    name: "Loyalist Akparanta Simeon",
    post: "Security Committee",
    image: SecurityChairJPG,
    space: "Chairman",
  },
];

export default function Executives() {
  return (
    <Container p={2} maxW={"7xl"}>
      <Heading fontSize="30px" fontWeight={"bold"}>
        The Executives
      </Heading>

      <Container my={1} maxW={"100%"}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {ExecutiveObj.map((executive) => (
            <ExecutivesCard executive={executive} />
          ))}
        </Flex>
      </Container>
    </Container>
  );
}
