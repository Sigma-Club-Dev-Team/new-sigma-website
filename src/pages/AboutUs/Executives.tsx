import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import ExecutivesCard from "./ExecutivesCard";
import {
  DeputyChiefJPG,
  ChiefScribeJPG,
  FDChairJPG,
  SigmaTJPG,
  // InvestmentChairJPG,
  // SecurityChairJPG,
  PublicityChairJPG,
  DeputyChiefScribeJPG,
  DEFAULT,
} from "constants/image_assets";
import { Executive } from "types";

const ExecutiveObj: Executive[] = [
  {
    id: 1,
    name: "Loyalist Babatunde Faith",
    post: "Deputy Chief (Band Committee Chairman)",
    image: DeputyChiefJPG,
  },
  {
    id: 2,
    name: "Loyalist Olaniyan Mohammed",
    post: "Chief Scribe (Secretariat Committee Chairman)",
    image: ChiefScribeJPG,
  },
  {
    id: 3,
    name: "Loyalist Daniel Promise",
    post: "Financial Scribe (Food & Drinks Committee Chairman)",
    image: FDChairJPG,
  },
  {
    id: 4,
    name: "Loyalist Oladimeji",
    post: "Deputy Scribe (Maintenance & Decoration Committee Chairman) ",
    image: DeputyChiefScribeJPG,
  },
  {
    id: 5,
    name: "Loyalist Sulaimon Philipson",
    post: "Publicity Committee Chairman",
    image: PublicityChairJPG,
  },
  {
    id: 6,
    name: "Loyalist Ahmed Abdullahi",
    post: "Sigma Treasurer (Sponsorship & Gate-keeping Committee Chairman)",
    image: SigmaTJPG,
  },
  {
    id: 7,
    name: "Loyalist Olaosebikan Gbolahan",
    post: "Investment and Special Duties Committee Chairman",
    // image: InvestmentChairJPG,
    image: DEFAULT,
  },
  {
    id: 8,
    name: "Loyalist Ojo Jolaoluwa Oluwatobi",
    post: "Security Committee Chairman",
    // image: SecurityChairJPG,
    image: DEFAULT,
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
