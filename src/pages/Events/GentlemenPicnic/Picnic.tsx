import React from "react";
import { Container } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

import { Text, Box, Image } from "@chakra-ui/react";
import {
    Chris,
    Games,
    GameSession,
    GroupPics,
    Gyration2,
    Gyration3,
    Intro2,
    Introduction,
    RandomShot,
    SigmaChiefPNG,
} from "../../../constants/image_assets";

const Health = () => {
  return (
    <Container maxW="7xl" className="animate-bottom">
      <Flex direction={{ base: "column", md: "row" }}>
        <Flex direction={{ base: "column", md: "column" }}>
          <Box p={{ lg: "8", md: "4", sm: "4" }}>
            <Text
              mt={0}
              display="block"
              textAlign={{base: 'left', md: 'center'}}
              fontSize="3xl"
              lineHeight="normal"
              fontWeight="700"
            >
              The Gentlemen's Vintage Picnic: A Tale of Brotherhood and Elegance
            </Text>
            <br />

            <Text fontSize="16px" lineHeight="normal" textAlign="justify">
              <br />
           
              <p>
                One could begin with the bond of brotherhood that hung in the
                air, the very spirit of fraternity. One could begin with the
                calming serenade of music that engulfed the arena. One could
                begin with the carriage, class, and composure of Loyal Sigmites
                as they stepped in hand in hand with their beautiful dates. If
                you liked, you could begin with the spicy chops and drinks that
                flowed in abundance. One could begin with anything and
                everything. But one thing was evident—the bond amongst brothers
                as Loyal Sigmites fraternized with the Sigma Chief.
              </p>
              <Box mb={4}>
                <Box
                  pt={4}
                  mb={0}
                  display={{ sm: "block", md: "flex" }}
                  mx={"auto"}
                >
                  <Box textAlign={"center"} px={4}>
                    <Image
                      mt={4}
                      borderRadius="lg"
                      width={{ sm: "100%", md: "100%" }}
                      src={SigmaChiefPNG}
                      alt="Picture showing one of the participants during medical check"
                      textAlign={"center"}
                    />
                  </Box>

                  <Box textAlign={"center"} px={4}>
                    <Image
                      mt={4}
                      borderRadius="lg"
                      width={{ sm: "100%", md: "100%" }}
                      src={GroupPics}
                      alt="Picture showing one of the participants during medical check"
                      textAlign={"center"}
                    />
                  </Box>
                </Box>
                {/* <Box mb={"6"}>
                  {" "}
                  <Text
                    fontWeight={"400"}
                    textAlign={"center"}
                    fontSize={"12px"}
                  >
                    Medical test going on at the outreach
                  </Text>
                </Box> */}
              </Box>
              <p >
                Golden and purple balloons floated gracefully, catching the
                radiance and glow of the evening sun. The University of Ibadan
                Botanical Gardens was set to witness the star of several
                hangouts held there: The Gentlemen's Vintage Picnic. A
                one-in-a-million kind of event. The venue was meticulously
                decorated to meet the Sigma standard, epitomizing the saying,
                "When it is from Sigma Club, it is the highest level of
                perfection.
              </p>
              <Box
                py={8}
                textAlign={"center"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  mt={4}
                  borderRadius="lg"
                  width={{ sm: "100%", md: "60%" }}
                  src={Games}
                  alt="Picture showing one of the participants during medical check"
                  mx={"auto"}
                />
                {/* <Text fontWeight={"400"} fontSize={"12px"}>
                  Blood sugar test at the health outreach
                </Text> */}
              </Box>
              <br />
              <p>
                Anchored by the Committee Chairman of the hangout, Loyalist
                Ogbu, the event began with introductions as all attendees sat in
                a round format. This ensured everyone had a name and that nobody
                was merely called 'Hey' or greeted with a nod. This was
                particularly beneficial for the Sigma wives, as each Loyal
                Sigmite already knew his brother's name. The otherwise routine
                introduction was spiced up when a Sigma wife, carried away by
                the manner Loyal Sigmites introduced themselves, then introduced
                herself as 'Loyalist...' A sweet comic relief, perhaps, an
                icebreaker.
              </p>
              
                <Box
                  pt={4}
                  mb={0}
                  display={{ sm: "block", md: "flex" }}
                  mx={"auto"}
                >
                  <Box textAlign={"center"} px={4}>
                    <Image
                      mt={4}
                      borderRadius="lg"
                      width={{ sm: "100%", md: "100%" }}
                      src={Intro2}
                      alt="Picture showing one of the participants during medical check"
                      textAlign={"center"}
                    />
                  </Box>

                  <Box textAlign={"center"} px={4}>
                    <Image
                      mt={4}
                      borderRadius="lg"
                      width={{ sm: "100%", md: "100%" }}
                      src={Introduction}
                      alt="Picture showing one of the participants during medical check"
                      textAlign={"center"}
                    />
                  </Box>
                </Box>
              <br />
              <p>
                The music shifted to match the energy and enthusiasm of the
                arena as games commenced. Card games, board games, and
                eventually all-inclusive games like 'Charades' set the tone for
                the evening. One exciting game was 'Passing the Balloon,' where
                a balloon was passed around, and whoever held it when the music
                stopped had to perform a task set by the MC, Loyalist Ogbu.
                Inability to do so meant taking a drink. Several Sigma wives had
                to enlist the help of their dates to serve their 'punishments,'
                quickly turning the whole place groovy.
              </p>
              <Box>
                <Box
                  pt={4}
                  mb={0}
                  display={{ sm: "block", md: "flex" }}
                  mx={"auto"}
                >
                  <Box textAlign={"center"} px={4}>
                    <Image
                      mt={4}
                      borderRadius="lg"
                      width={{ sm: "100%", md: "100%" }}
                      src={Gyration2}
                      alt="Counselling session"
                      textAlign={"center"}
                    />
                  </Box>

                  <Box textAlign={"center"} px={4}>
                    <Image
                      mt={4}
                      borderRadius="lg"
                      width={{ sm: "100%", md: "100%" }}
                      src={Gyration3}
                      alt="Counselling session"
                      textAlign={"center"}
                    />
                  </Box>
                </Box>
                <Box mb={"6"}>
                  {/* {" "}
                  <Text
                    fontWeight={"400"}
                    textAlign={"center"}
                    fontSize={"12px"}
                  >
                    Ongoing therapy/counselling session at the Health outreach
                  </Text> */}
                </Box>
              </Box>
              <br />
              <p>
                The Food and Drinks Committee Chairman, along with his team,
                ensured that no cups or plates were empty, circulating
                constantly to make sure everyone was well taken care of. As it
                often happens when one is lost in merriment, night fell quickly,
                and games were abandoned for hype and gyration. In unison, Loyal
                Sigmites surrounded the Sigma Chief, chanting 'Sigma Chief,
                001!' This practice continued as Loyal Sigmites moved on to
                several committee chairmen and other Loyal Sigmites, all the
                while dancing and singing.
              </p>
              <Box>
                <Box
                  pt={4}
                  mb={0}
                  display={{ sm: "block", md: "flex" }}
                  mx={"auto"}
                >
                  <Box textAlign={"center"} px={4}>
                    <Image
                      mt={4}
                      borderRadius="lg"
                      width={{ sm: "100%", md: "100%" }}
                      src={GameSession}
                      alt="Counselling session"
                      textAlign={"center"}
                    />
                  </Box>

                  <Box textAlign={"center"} px={4}>
                    <Image
                      mt={4}
                      borderRadius="lg"
                      width={{ sm: "100%", md: "100%" }}
                      src={Chris}
                      alt="Counselling session"
                      textAlign={"center"}
                    />
                  </Box>
                </Box>
                <Box mb={"6"}>
                  {" "}
                  {/* <Text
                    fontWeight={"400"}
                    textAlign={"center"}
                    fontSize={"12px"}
                  >
                    Volunteers at the Health Outreach
                  </Text> */}
                </Box>
              </Box>
              <br />
              <p>
                As the night drew on, much to the oblivion of Loyal Sigmites,
                the event drew to a close. It was a remarkable evening filled
                with wonderful fraternity and a bond amongst brothers. The
                Gentlemen's Vintage Picnic will be remembered as a shining
                example of the enduring spirit and elegance of the Sigma Club.
              </p>
              <Box py={8} textAlign={"center"}>
                <Image
                  mt={4}
                  borderRadius="lg"
                  width={{ sm: "100%", md: "60%" }}
                  src={RandomShot}
                  alt="Image showing Dr Ajav Aderonke"
                  mx={"auto"}
                />
                {/* <Text fontWeight={"400"} fontSize={"12px"}>
                  An interview with Dr Ajav Aderonke, director of UHS,Jaja
                  clinic.
                </Text> */}
              </Box>
            
              <br />
            
            
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Health;
