import { Container } from "@chakra-ui/react";
import { SigmaChiefCupJPG } from "../../constants/image_assets.ts";
import { Flex } from "@chakra-ui/react";
import Video from "../../components/Video";
import { Text, Box, Image } from "@chakra-ui/react";

const Sport = () => {
  return (
    <Container maxW="7xl" className="animate-bottom">
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex="4.5" color="white" p={{ lg: "10", md: "3", sm: "4" }}>
          <Image
            mt={6}
            borderRadius="lg"
            width={{ base: "100%", sm: "100%" }}
            src={SigmaChiefCupJPG}
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
            Sigma Chief Cup
          </Text>
          <br />

          <Text fontSize="16px" lineHeight="normal" textAlign="justify">
            As part of the innovations and plans of the Sigma Chief, the Sigma
            Chief's Cup was birthed. The competition was for both male and
            female undergraduates of the University of Ibadan, both regular
            students.
            <br />
            The male teams were formed randomly by students comprising 7players
            per team while the female teams were in the Halls of residence
            category - Alexander Brown Hall, Queen Elizabeth Hall, Queen Idia
            Hall and Obafemi Awolowo Hall. Out of 36 male teams that showed
            interest by filling the application form, only 16 were selected
            after much screening, scrutiny and accreditation.
            <br />
            <br />
            <p>
              The competition started on Friday, 28th April with the round of 16
              matches of the male category with the matches being played
              simultaneously both at Zik and Indy Maracanas. 8 teams qualified
              from the Friday matches (though 2 matches were due to walkovers
              due to absence of opponents), and they proceeded to the quarter
              finals of the competition which was played on Saturday morning.
            </p>
            <br />
            <br />
            The female category also had their semi final matches on Saturday
            morning at the Zik Maracana where 2 teams qualified for the final.
            The male category had their quarter final matches in the morning and
            the qualified teams played the semi finals in the evening.
            <br />
            Sunday, which was the final day of the competition witnessed 3
            matches - the female final, friendly match between loyal Sigmites
            and the male final. The female final was keenly contested by the
            ladies from Idia Hall and Awo Hall where Idia Hall emerged winner of
            the female category of the maiden Sigma Chief's
            <br />
            <br />
            The match between loyal Sigmites was also an interesting one as the
            two teams - Team purple and Team gold, entertained the guests and
            spectators with some exciting skills of football though Team Gold
            later won the match by a goal to nil. The final of the male category
            was between Gentlemen's Club and Raid FC. The match was an
            interesting one that was played by skilled and experienced players.
            After the final whistle was blown, the Gentlemen's Club emerged the
            winner having defeated Raid FC by a total of 6goals to 1
            <br />
            <br />
            It was also a sight to behold as people came in droves to see the
            teams slug it against themselves with the population of spectators
            peaking 300. Raffle draws were made and prizes were presented to the
            winners. Afterwards the teams that emerged first position and First
            runner-ups of both categories were presented with certificates of
            sportsmanship and trophies were presented to the winners of both
            categories.
          </Text>
        </Box>
      </Flex>

      <div>
        <Video />
      </div>
    </Container>
  );
};

export default Sport;
