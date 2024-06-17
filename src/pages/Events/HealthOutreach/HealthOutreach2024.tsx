import React from "react";
import { Container } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

import Video from "../../../components/Video";
import { Text, Box, Image } from "@chakra-ui/react";
import {
  Participants,
  Participants2,
  BloodTest,
  CounsellingSession,
  CounsellingSession2,
  GroupPicture,
  JajaDirector,
  OSGani,
  RegisteringAttendees,
  SigmaChief,
  Volunteers,
  Volunteers2,
} from "../../../constants/image_assets";
import SideBar from "./RightBar";

const Health = () => {
  return (
    <Container maxW="7xl" className="animate-bottom">
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex={{ base: "none", md: 7.5 }}>
          <Flex direction={{ base: "column", md: "column" }}>
            <Box p={{ lg: "8", md: "4", sm: "4" }}>
              <Text
                mt={0}
                display="block"
                textAlign={"center"}
                fontSize="3xl"
                lineHeight="normal"
                fontWeight="700"
              >
                Sigma Health Outreach
              </Text>
              <br />

              <Text fontSize="16px" lineHeight="normal" textAlign="justify">
                <br />
                <br />
                <p>
                  For the second time in a long time,the University of Ibadan
                  Student Union Building (S.U.B) car park served a purpose other
                  than transportation. On the 20th of April,2024, the University
                  of Ibadan community witnessed another Health Outreach from the
                  most prestigious Sigma Club,UI. The program was designed to
                  bring free medical care to members of the University community
                  many of whom were oblivious of their health status. The
                  outreach was carried out in a central location so all could
                  access it easily. It was important especially for people who
                  usually had no time for these checks or had no means and
                  access to quality and periodic medical check up.
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
                        src={Participants2}
                        alt="Picture showing one of the participants during medical check"
                        textAlign={"center"}
                      />
                    </Box>

                    <Box textAlign={"center"} px={4}>
                      <Image
                        mt={4}
                        borderRadius="lg"
                        width={{ sm: "100%", md: "100%" }}
                        src={Participants}
                        alt="Picture showing one of the participants during medical check"
                        textAlign={"center"}
                      />
                    </Box>
                  </Box>
                  <Box mb={"6"}>
                    {" "}
                    <Text
                      fontWeight={"400"}
                      textAlign={"center"}
                      fontSize={"12px"}
                    >
                      Medical test going on at the outreach
                    </Text>
                  </Box>
                </Box>
                <p>
                  On the early hours of the D-Day, canopies were already erected
                  with seats arranged to create a comfortable atmosphere for
                  attendees, volunteers and members of the club as they waited
                  their turn for the various medical checks available.
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
                    src={BloodTest}
                    alt="Picture showing one of the participants during medical check"
                    mx={"auto"}
                  />
                  <Text fontWeight={"400"} fontSize={"12px"}>
                    Blood sugar test at the health outreach
                  </Text>
                </Box>
                <br />
                <p>
                  Upon arrival,each person after an online registration was
                  given a slip which would contain personal details such as
                  age,sex,weight,height,body mass index (BMI) . As they moved
                  from stand to stand the results from each test was recorded on
                  the sheets. The stands were arranged to carry out checks on
                  blood pressure,blood glucose levels,dental health and several
                  other routine checks.
                </p>
                <Box py={8} textAlign={"center"}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ sm: "100%", md: "60%" }}
                    src={RegisteringAttendees}
                    alt="Picture showing Loyal Sigmites registering attendees"
                    mx={"auto"}
                  />
                  <Text fontWeight={"400"} fontSize={"12px"}>
                    Loyal Sigmites registering attendees
                  </Text>
                </Box>
                <br />
                <p>
                  In light of the little attention paid to mental health,the
                  Sigma Health Outreach made sure to include a special stand for
                  mental health awareness, therapy and counseling from mental
                  health experts and Asido Campus Network. The mental health
                  check recorded stunning number of attendance which was quite
                  surprising considering the supposed mental stability within
                  the University community. In an interview with Kehinde, a part
                  3 student of the Physics department,he expressed gratitude and
                  his happiness in the Mental health check. In his words 'It
                  felt really good to talk to someone about nothing and
                  everything at the same time, to be honest, it was a huge
                  relief'
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
                        src={CounsellingSession}
                        alt="Counselling session"
                        textAlign={"center"}
                      />
                    </Box>

                    <Box textAlign={"center"} px={4}>
                      <Image
                        mt={4}
                        borderRadius="lg"
                        width={{ sm: "100%", md: "100%" }}
                        src={CounsellingSession2}
                        alt="Counselling session"
                        textAlign={"center"}
                      />
                    </Box>
                  </Box>
                  <Box mb={"6"}>
                    {" "}
                    <Text
                      fontWeight={"400"}
                      textAlign={"center"}
                      fontSize={"12px"}
                    >
                      Ongoing therapy/counselling session at the Health outreach
                    </Text>
                  </Box>
                </Box>
                <br />
                <p>
                  To make the outreach a possibility, qualified medical experts,
                  staff of the University Health Services (U H.S) Jaja clinic,
                  Asido Campus Network and volunteers were engaged to carry out
                  the tests and counselling. Particularly noteworthy was the HIV
                  test which was carried out behind a screened canopy in order
                  to maintain anonymity of the participants.
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
                        src={Volunteers}
                        alt="Counselling session"
                        textAlign={"center"}
                      />
                    </Box>

                    <Box textAlign={"center"} px={4}>
                      <Image
                        mt={4}
                        borderRadius="lg"
                        width={{ sm: "100%", md: "100%" }}
                        src={Volunteers2}
                        alt="Counselling session"
                        textAlign={"center"}
                      />
                    </Box>
                  </Box>
                  <Box mb={"6"}>
                    {" "}
                    <Text
                      fontWeight={"400"}
                      textAlign={"center"}
                      fontSize={"12px"}
                    >
                      Volunteers at the Health Outreach
                    </Text>
                  </Box>
                </Box>
                <br />
                <p>
                  Whilst interviewing Dr Ajav Aderonke,the Director of Health
                  Services, University of Ibadan,she spoke of the importance of
                  regular and periodic medical check up and how it helped to
                  maintain an healthy lifestyle. In the same vein she commended
                  Sigma Club for making such possible especially for those who
                  could not afford or access it. She further reiterated that the
                  club had a good relationship with the University Health
                  Services over the years hereby making the Outreach of mutual
                  benefit.
                </p>
                <Box py={8} textAlign={"center"}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ sm: "100%", md: "60%" }}
                    src={JajaDirector}
                    alt="Image showing Dr Ajav Aderonke"
                    mx={"auto"}
                  />
                  <Text fontWeight={"400"} fontSize={"12px"}>
                    An interview with Dr Ajav Aderonke, director of UHS,Jaja
                    clinic.
                  </Text>
                </Box>
                <br />
                <p>
                  The Sigma Chief in his interview emphasized the need for
                  philanthropic engagements and awareness in the sphere of
                  health care as several people had little or no means to access
                  medical care. He stated the Sigma Club would continue to keep
                  the interest of the society in its fore and the in coming
                  years the Health Outreach would include more sophisticated
                  tests and care.
                </p>
                <br />
                <Box py={8} textAlign={"center"}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ sm: "100%", md: "60%" }}
                    src={SigmaChief}
                    alt="SIGMA CHIEF IN AN INTERVIEW SESSION WITH NEWSMEN FROM NTA IBADAN."
                    mx={"auto"}
                  />
                  <Text fontWeight={"400"} fontSize={"12px"}>
                    Sigma Chief in an interview session with newsmen from NTA
                    Ibadan.
                  </Text>
                </Box>
                <p>
                  As the event proceeded,Loyal Sigmites were present at halls of
                  residence and nearby faculties to invite passers-by and
                  residents of halls to participate in the program. Faces were
                  lit with smiles at the kind gestures especially at the Faculty
                  of Arts where students just concluded exams. Oyewale Agboola,
                  a student from the Faculty of Agriculture was glad. 'I
                  definitely need therapy after these exams' he said.
                </p>
                <Box py={8} textAlign={"center"}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ sm: "100%", md: "60%" }}
                    src={OSGani}
                    alt="One of the beneficiary of the health outreach"
                    mx={"auto"}
                  />
                  <Text fontWeight={"400"} fontSize={"12px"}>
                    Sigma Chief in discuss with Old Sigmite Dr Gani Adeniran at
                    the outreach
                  </Text>
                </Box>
                <br />
                <Box py={8} textAlign={"center"}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ sm: "100%", md: "60%" }}
                    src={GroupPicture}
                    alt="Group picture"
                    mx={"auto"}
                  />
                  <Text fontWeight={"400"} fontSize={"12px"}>
                    Sigma Chief, Old Sigmite Gani Adediran and Loyal Sigmites in
                    attendance.
                  </Text>
                </Box>
                <br />
                <p>
                  As the day drew to an end after check ups were conducted for
                  well over 250 members of the University community,
                  participants began to thin, but one thing they all had in
                  common was smiles of gratitude and appreciation to the club.
                </p>
              </Text>
            </Box>
          </Flex>

          <div>
            <Video
              src={
                "https://www.youtube.com/embed/nKw-6viPeJs?si=dW4ywD7-of982iXT"
              }
            />
          </div>
        </Box>

        <Box
          flex={{ base: "none", md: 2.5 }}
          mt={4}
          p={{ lg: "10", md: "3", sm: "4" }}
          fontWeight="500"
        >
          <SideBar />
        </Box>
      </Flex>
    </Container>
  );
};

export default Health;
