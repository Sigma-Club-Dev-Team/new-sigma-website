import React from "react";
import { Container, Flex, Heading, Text, Box } from "@chakra-ui/react";

import Profilecard from "./profilecard";
import { TomiwaHeadshot, TimothyHeadshot, AfiaHeadshot } from "constants/image_assets";

const ProfileOBJ = [
  {
    id: 1,
    name: "Adeyanju Akorede",
    skill: "Backend Developer",
    intro: "Committe Chairman wey no dey pamper",
    LinkedIn: "#",
    Email: "#",
    Twitter: "#",
    Instagram: "#",
  },
  {
    id: 2,
    name: "Oyero Habibulah",
    skill: "Backend Developer",
    intro: "uerhiugheugheoiufhiuheiu",
    LinkedIn: "#",
    Email: "#",
    Twitter: "#",
    Instagram: "#",
  },
  {
    id: 3,
    Headshot: TomiwaHeadshot,
    name: "Olasupo Tomiwa",
    skill: "Front-End Developer",
    intro:
      "I develop and design visual elements and interactive features using modern technologies, which enable users to have a seamless user experience.",
    LinkedIn: "https://www.linkedin.com/in/tomiwa-olasupo-821abb1aa",
    Email: "tomiwaolasupo@gmail.com",
    Twitter: "https://twitter.com/Tomiwaolasupo_",
    Instagram: "https://instagram.com/tomiwa_olasupo?igshid=OTk0YzhjMDVlZA==",
  },
  {
    id: 4,
    Headshot: TimothyHeadshot,
    name: "Ilegbusi Timothy",
    skill: "Product Designer",
    intro:
      " 400 level law student of the University of Ibadan. I am a product designer (UI/UX) and I love to cook up innovative ideas to solve human problems through technology.",
    LinkedIn: "https://www.linkedin.com/in/timothy-ilegbusi-669004237",
    Email: "me@youremail.com",
    Twitter: "https://twitter.com/warlordbolade?t=Klzi76yitacdBcDaQhnz_Q&s=08",
    Instagram: "#",
  },
  {
    id: 5,
    Headshot: AfiaHeadshot,
    name: "Afia Victor",
    skill: "Product Designer",
    intro: "",
    LinkedIn: "#",
    Email: "#",
    Twitter: "#",
    Instagram: "#",
  },
];

export default function profile() {
  return (
    <Container p={2} maxW={"7xl"} className="animate-bottom">
      <Box ml="4" p="5">
        <Heading fontSize="25px" fontWeight={"bold"}>
          Sigma Talents
        </Heading>

        <Text my={4}>
          Sigma Talents are Loyal Sigmites with diverse skills and innate
          abilities who are commited to the growth of the club
        </Text>
      </Box>
      <Container my={1} maxW={"100%"}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {ProfileOBJ.map(
            ({
              Headshot,
              name,
              skill,
              intro,
              LinkedIn,
              Email,
              Twitter,
              Instagram,
            }) => (
              <Profilecard
                Headshot={Headshot}
                name={name}
                skill={skill}
                intro={intro}
                Email={Email}
                LinkedIn={LinkedIn}
                Twitter={Twitter}
                Instagram={Instagram}
              />
            )
          )}
        </Flex>
      </Container>
    </Container>
  );
}
