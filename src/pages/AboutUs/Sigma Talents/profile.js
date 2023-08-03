import React from "react";
import { Container, Flex, Heading, Text, Box } from "@chakra-ui/react";

import Profilecard from "./profilecard";
import {
  TomiwaHeadshot,
  TimothyHeadshot,
  AfiaHeadshot,
  akorede,
  oyerohabib,
  sigmachief,
} from "constants/image_assets";

const ProfileOBJ = [
  {
    id: 1,
    Headshot: sigmachief,
    name: "Sigma Chief",
    skill: "Software tester",
    intro:
      "He is a Quality Assurance Software Tester with over four years of expertise manually and assists in discovering relevant content and visual issues, participates in numerous test cases, and contributes to Tester Work with published software testing publications.",
    LinkedIn:
      "https://www.linkedin.com/in/moses-%E1%BA%B9ni%E1%BB%8Dl%C3%A1-88758517a",
    Email: "jenyoeniola@gmail.com",
    Link: "https://testerwork.com/author/ana/",
    Twitter: "#",
    Instagram: "#",
  },
  {
    id: 2,
    Headshot: akorede,
    name: "Loyalist Adeyanju Akorede",
    skill: "Backend Developer",
    intro:
      "People, Technology, Financial Analysis and LIteracy, Entrepreneurship. In no particular order, those are the pillars upon which I am building my life and career",
    LinkedIn: "https://www.linkedin.com/in/adeyanju-akorede-588014222/",
    Email: "adeyanju.akorede1@gmail.com",
    Twitter: "#",
    Link: "#",
    Instagram: "#",
  },
  {
    id: 3,
    name: "Loyalist Oyero Habibulah",
    Headshot: oyerohabib,
    skill: "Software Engineer",
    intro:
      "Habib is a seasoned software engineer with a passion for bringing creative ideas to life. With over 5 years of experience in web development, he brings a unique blend of technical know-how and project management skills to the table.",
    LinkedIn: "https://www.linkedin.com/in/oyerohabib/",
    Email: "oyerhabib@yahoo.com",
    Link: "https://oyerohabib.com/",
    Twitter: "#",
    Instagram: "#",
  },
  {
    id: 4,
    Headshot: TomiwaHeadshot,
    name: "Loyalist Olasupo Tomiwa",
    skill: "Front-End Developer",
    intro:
      "I develop and design visual elements and interactive features using modern technologies, which enable users to have a seamless user experience.",
    LinkedIn: "https://www.linkedin.com/in/tomiwa-olasupo-821abb1aa",
    Email: "tomiwaolasupo@gmail.com",
    Twitter: "https://twitter.com/Tomiwaolasupo_",
    Instagram: "https://instagram.com/tomiwa_olasupo?igshid=OTk0YzhjMDVlZA==",
    Link: "#",
  },
  {
    id: 5,
    Headshot: TimothyHeadshot,
    name: "Loyalist Ilegbusi Timothy",
    skill: "Product Designer",
    intro:
      " 400 level law student of the University of Ibadan. I am a product designer (UI/UX) and I love to cook up innovative ideas to solve human problems through technology.",
    LinkedIn: "https://www.linkedin.com/in/timothy-ilegbusi-669004237",
    Email: "ilegbusitimothy@gmail.com",
    Twitter: "https://twitter.com/warlordbolade",
    Link: "#",
    Instagram: "#",
  },
  {
    id: 6,
    Headshot: AfiaHeadshot,
    name: "Loyalist Afia Victor",
    skill: "Growth Strategist",
    intro:
      "Victor Afia is a growth marketing professional who specializes in building and optimizing growth funnels for SaaS and EdTech startups. He acquires and retains customers for brands through content marketing strategies and data-driven marketing.",
    LinkedIn: "https://www.linkedin.com/in/victor-afia-7112b81ab/",
    Email: "victorafia13@gmail.com",
    Twitter: "#",
    Link: "#",
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

        <Text fontSize={"md"} my={4}>
          Sigma Talents are Loyal Sigmites with diverse skills and innate
          abilities who are commited to the growth of the club.
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
              Link,
            }) => (
              <Profilecard
                Headshot={Headshot}
                name={name}
                skill={skill}
                intro={intro}
                Email={Email}
                Link={Link}
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
