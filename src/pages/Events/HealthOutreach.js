import { Container } from "@chakra-ui/react";
import health from "../../assets/health.jpg";
import { Flex } from "@chakra-ui/react";
import Video from "../../components/Video";
import { Text, Box, Image } from "@chakra-ui/react";

const Health = () => {
  return (
    <Container maxW="7xl" className="animate-bottom">
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex="4.5" color="white" p={{ lg: "10", md: "3", sm: "4" }}>
          <Image
            mt={6}
            borderRadius="lg"
            width={{ base: "100%", sm: "100%" }}
            src={health}
            alt="presentation of prize"
          />
        </Box>
        <Box flex="5.5" p={{ lg: "8", md: "4", sm: "4" }}>
          <Text
            mt={6}
            display="block"
            fontSize="xlg"
            lineHeight="normal"
            fontWeight="semibold"
          >
            Sigma Guest Luncheon
          </Text>
          <br />

          <Text fontSize="16px" lineHeight="normal">
            As part of the activities of the Club for this Sigma year, we
            organized the SIGMA HEALTH OUTREACH. The health outreach was aimed
            at promoting good health practices among the student body. It
            provided an opportunity for students to get free medical checkups,
            health screenings, scaling and polishing and access to health
            education resources.
            <br />
            <br />
            <p>
              Our objectives for the Health Outreach event were clear. We aimed
              to offer scaling and polishing services to enhance oral hygiene;
              provide free HIV and syphilis screening to promote sexual health
              awareness; conduct mental health assistance and conduct vital
              signs checks to identify potential health concerns and offer
              guidance.
            </p>
            <p>
              We worked alongside Unibadan Association of Dental Students. Their
              expertise in oral healthcare was instrumental in offering scaling
              and polishing services to our participants. They also offered
              trainings on healthy oral health hygiene. Another of our esteemed
              partners was ASIDO, an organization specializing in mental health
              support. Recognizing the importance of mental well-being, we aimed
              to provide holistic care to our participants, addressing both
              their physical and emotional needs.
            </p>
            <br />
            <p>
              Additionally, we partnered with iCARE, an organization focused on
              HIV screening and education. Their invaluable support enabled us
              to provide free and confidential HIV screening to all
              participants. The impact of the Health Outreach event cannot be
              understated. Over 300 students within the university community,
              benefited from the free services provided. The positive feedback
              and engagement we received from the community served as a
              testament to the importance of such initiatives in addressing the
              health needs of our student population.
            </p>
            <br />
            <p>
              We are inspired by the impact we have made and the lives we have
              touched through this Health Outreach. Moving forward, we will
              continue to dedicate ourselves to giving back to the community.
            </p>
          </Text>
        </Box>
      </Flex>

      <div>
        <Video src={"https://www.youtube.com/shorts/Hzb47AEIMkM"} />
      </div>
    </Container>
  );
};

export default Health;
