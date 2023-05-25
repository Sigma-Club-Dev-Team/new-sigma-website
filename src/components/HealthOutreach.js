import { Container } from "@chakra-ui/react";
import QuizImage from "../assets/pic3.jpg";
import { Flex } from "@chakra-ui/react";
import Video from "../components/Video";
import { Text, Box, Image } from "@chakra-ui/react";

const Health = () => {
  return (
    <Container maxW="100%" className="animate-bottom">
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex="4.5" color="white" p={{ lg: "10", md: "3", sm: "4" }}>
          <Image
            mt={6}
            borderRadius="lg"
            width={{ base: "100%", sm: "100%" }}
            src={QuizImage}
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
            Over the years now, Sigma Club has inducted several important
            personalities into the Sigma Honorary Roll of Honor. The club
            introduces these important personalities, who are of outstanding
            personalities and have positively impacted the society, into the
            club through the Sigma Guest Luncheon. It is a classy but educative
            gathering of first class personalities of the country. Due to the
            kind of event it is, attendance is only by invitation. It will
            interest you to know that the most recent inductee is the Obi of
            Onitsha, His Royal Majesty, Alfred Nnaemeka Achebe, CFR.
            <br />
            <br />
            <p>
              Among other recipients of this high honour include: Late Alhaji
              Dr. Ado Abdullahi Bayero (CFR), Late Dr. Taslim Elias, QC, (GCON,
              former president of the World Court), Late Dr. Alex Ekwueme (GCON,
              former Vice President of the Federal Republic of Nigeria), Dr.
              Christopher Kolade (CON, Nigeria’s former High Commissioner to the
              United Kingdom), Otunba Olasubomi Balogun (CON, founder FCMB
              Group), Professor Isaac Adewole (FAS, Nigeria’s immediate past
              Minister for Health), Professor Babatunde Gabriel Ogunmola (FAS,
              FAMedS(emeritus), Past President Academy of Science and the
              Chancellor, Lead City University, Ibadan), Chief Afe Babalola
              (SAN, CON), Chief Felix Ohiwerei (OFR, former Chairman of Nigerian
              Breweries), His Royal Highness Alhaji Mohammadu Sanusi II (CON)
              among others.
            </p>
          </Text>
        </Box>
      </Flex>

      <div>
        <Video />
      </div>
    </Container>
  );
};

export default Health;
