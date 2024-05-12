import React from "react";
import { Container, Divider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Video from "../../../components/Video";
import { Text, Box, Image } from "@chakra-ui/react";
import {
  Participants,
  BloodTest,
  CounsellingSession,
  GroupPicture,
  JajaDirector,
  OSGani,
  RegisteringAttendees,
  SigmaChief,
  Volunteers,
} from "../../../constants/image_assets";

const Health = () => {
  return (
    <Container maxW="7xl" className="animate-bottom">
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex={{ base: "none", md: 8 }}>
          <Flex direction={{ base: "column", md: "column" }}>
            <Box p={{ lg: "8", md: "4", sm: "4" }}>
              <Text
                mt={0}
                display="block"
                fontSize="xlg"
                lineHeight="normal"
                fontWeight="semibold"
              >
                Sigma Health Outreach
              </Text>
              <br />

              <Text fontSize="16px" lineHeight="normal" textAlign="justify">
                For the second time in a long time,the University of Ibadan
                Student Union Building (S.U.B) car park served a purpose other
                than transportation.
                <br />
                <p>
                  20th of April,2024,the University of Ibadan community
                  witnessed another Health Outreach from the most prestigious
                  Sigma Club,UI. The program was designed to bring free medical
                  care to members of the University community many of whom were
                  oblivious of their health status. The outreach was carried out
                  in a central location so all could access it easily. It was
                  important especially for people who usually had no time for
                  these checks or had no means and access to quality and
                  periodic medical check up.
                </p>
                <Box py={4} mb={6}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ base: "100%", sm: "100%" }}
                    src={Participants}
                    alt="Picture showing one of the participants during medical check"
                  />
                  <figcaption>
                    MEDICAL TESTS GOING ON AT THE OUTREACH .
                  </figcaption>
                </Box>
                <p>
                  On the early hours of the D-Day, canopies were already erected
                  with seats arranged to create a comfortable atmosphere for
                  attendees, volunteers and members of the club as they waited
                  their turn for the various medical checks available.
                </p>
                <Box py={8}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ base: "100%", sm: "100%" }}
                    src={BloodTest}
                    alt="Picture showing one of the participants during medical check"
                  />
                   <figcaption>
                   Blood sugar test at the health outreach 
                  </figcaption>
                </Box>
                <br />
                <p>
                  Upon arrival,each person after an online registration was
                  given a slip which would contain personal details such as
                  age,sex,weight,height,body mass index (BMI) . As they moved
                  from stand to stand the results from each test was recorded on
                  the sheets.
                </p>
                <p>
                  The stands were arranged to carry out checks on blood
                  pressure,blood glucose levels,dental health and several other
                  routine checks.
                </p>
                <Box py={8}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ base: "100%", sm: "100%" }}
                    src={RegisteringAttendees}
                    alt="Picture showing Loyal Sigmites registering attendees"
                  />
                   <figcaption>
                  Loyal Sigmites registering attendees
                  </figcaption>
                </Box>
                <br />
                <p>
                  In light of the little attention paid to mental health,the
                  Sigma Health Outreach made sure to include a special stand for
                  mental health awareness, therapy and counseling from mental
                  health experts and Asido Campus Network. The mental health
                  check recorded stunning number of attendance which was quite
                  surprising considering the supposed mental stability within
                  the University community. In an interview with Kehinde,a part
                  3 student of the Physics department,he expressed gratitude and
                  his happiness in the Mental health check. In his words 'It
                  felt really good to talk to someone about nothing and
                  everything at the same time,to be honest,it was a huge relief'
                </p>
                <Box py={8}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ base: "100%", sm: "100%" }}
                    src={CounsellingSession}
                    alt=" "
                  />
                   <figcaption>
                   Ongoing therapy/counselling session at the Health outreach
                  </figcaption>
                </Box>
                <br />
                <p>
                  To make the outreach a possibility,qualified medical
                  experts,staff of the University Health Services (U H.S) Jaja
                  clinic,Asido Campus Network and volunteers were engaged to
                  carry out the tests and counselling.
                </p>
                <Box py={8}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ base: "100%", sm: "100%" }}
                    src={Volunteers}
                    alt="picture showing the volunteers at the health outreach"
                  />
                   <figcaption>
                   VOLUNTEERS AT THE HEALTH OUTEACH
                  </figcaption>
                </Box>
                <br />
                <p>
                  Particularly noteworthy was the HIV test which was carried out
                  behind a screened canopy in order to maintain anonymity of the
                  participants.
                </p>
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
                <Box py={8}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ base: "100%", sm: "100%" }}
                    src={JajaDirector}
                    alt="Image showing Dr Ajav Aderonke"
                  />
                    <figcaption>
                    An interview with Dr Ajav Aderonke, director of UHS,Jaja clinic.
                  </figcaption>
                </Box>
                <br />
                <Box py={8}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ base: "100%", sm: "100%" }}
                    src={SigmaChief}
                    alt="SIGMA CHIEF IN AN INTERVIEW SESSION WITH NEWSMEN FROM NTA IBADAN."
                  />
                   <figcaption>
                   SIGMA CHIEF IN AN INTERVIEW SESSION WITH NEWSMEN FROM NTA IBADAN.
                  </figcaption>
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
                <Box py={8}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ base: "100%", sm: "100%" }}
                    src={OSGani}
                    alt="One of the beneficiary of the health outreach"
                  />
                   <figcaption>
                   Sigma Chief in discuss with Old Sigmite Dr Gani Adeniran at the outreach
                  </figcaption>
                </Box>
                <br />
                <p>
                  As the event proceeded,Loyal Sigmites were present at halls of
                  residence and nearby faculties to invite passers-by and
                  residents of halls to participate in the program. Faces were
                  lit with smiles at the kind gestures especially at the Faculty
                  of Arts where students just concluded exams. Oyewale Agboola,a
                  student from the Faculty of Agriculture was glad. 'I
                  definitely need therapy after these exams' he said.
                </p>
                <Box py={8}>
                  <Image
                    mt={4}
                    borderRadius="lg"
                    width={{ base: "100%", sm: "100%" }}
                    src={GroupPicture}
                    alt="Group picture"
                  />
                   <figcaption>
                   SIGMA CHIEF,OLD SIGMITE GANI ADEDIRAN AND LOYAL SIGMITES IN ATTENDANCE 
                  </figcaption>
                </Box>
                <br />
                <p>
                  As the day drew to an end after check ups were conducted for
                  well over 250 members of the University community,
                  participants began to thin,but one thing they all had in
                  common was smiles of gratitude and appreciation to the club.
                </p>
              </Text>
            </Box>
          </Flex>

          <div>
            <Video src={"https://www.youtube.com/shorts/Hzb47AEIMkM"} />
          </div>
        </Box>

        <Divider
          my={10}
          bg="#1C1C1CB2"
          height="200vh"
          mr={2}
          px={0}
          borderWidth="1px"
          orientation="vertical"
          display={{ base: "none", md: "block" }}
        />

        <Box
          flex={{ base: "none", md: 2 }}
          mt={4}
          p={{ lg: "10", md: "3", sm: "4" }}
          fontWeight="500"
        >
          <Text>Previous edition of the Health Outreach</Text>

          <Box py={4}>
            <Text>2023 Sigma Health Outreach</Text>
            <Link to="/events/health-outreach/2023">
              <Text
                textDecoration="underline"
                textAlign="right"
                color="#8F19E7"
              >
                View
              </Text>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Health;
