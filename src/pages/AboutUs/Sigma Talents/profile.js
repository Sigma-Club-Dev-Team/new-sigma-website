import React from "react";
import { Container, Flex, Heading, Text, Box } from "@chakra-ui/react";

import Profilecard from "./profilecard";
import {
  TomiwaHeadshot,
  TimothyHeadshot,
  AfiaHeadshot,
  akorede,
  oyerohabib,
} from "constants/image_assets";

const ProfileOBJ = [
  {
    id: 1,
    Headshot: akorede,
    name: "Adeyanju Akorede",
    skill: "Backend Developer",
    intro:
      "People, Technology, Financial Analysis and LIteracy, Entrepreneurship. In no particular order, those are the pillars upon which I am building my life and career",
    LinkedIn: "https://www.linkedin.com/in/adeyanju-akorede-588014222/",
    Email: "adeyanju.akorede1@gmail.com",
    Twitter: "#",
    Instagram: "#",
  },
  {
    id: 2,
    name: "Oyero Habibulah",
    Headshot: oyerohabib,
    skill: "Software Engineer",
    intro:
      "Habib is a seasoned software engineer with a passion for bringing creative ideas to life. With over 5 years of experience in web development, he brings a unique blend of technical know-how and project management skills to the table.",
    LinkedIn: "https://www.linkedin.com/in/oyerohabib/",
    Email: "oyerhabib@yahoo.com",
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
    Email: "ilegbusitimothy@gmail.com",
    Twitter: "https://twitter.com/warlordbolade",
    Instagram: "#",
  },
  {
    id: 5,
    Headshot: AfiaHeadshot,
    name: "Afia Victor",
    skill: "Growth Strategist",
    intro:
      "Victor Afia is a growth marketing professional who specializes in building and optimizing growth funnels for SaaS and EdTech startups. He acquires and retains customers for brands through content marketing strategies and data-driven marketing.",
    LinkedIn: "https://www.linkedin.com/in/victor-afia-7112b81ab/",
    Email: "victorafia13@gmail.com",
    Twitter: "#",
    Instagram: "#",
  },
];

export default function profile() {
  return (
    <Container p={2} maxW={"7xl"} mb={12} className="animate-bottom">
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
