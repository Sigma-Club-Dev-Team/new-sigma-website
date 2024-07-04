import React from "react";
import { Container, Flex, Box, Text, Image } from "@chakra-ui/react";
import SideBar from "../SideBar/RightBar";
import {
  CommitteChair,
  Chief,
  FemaleTeam,
  LoyalSigmites,
  MatchOn,
  MatchOnF1,
  OldSig,
  PresentationF,
  Presentation,
  SigmaChiefKick,
  SigmaChiefVoteOfThanks,
  Team,
  UIDirectorOfSport,
  UiDirectorOfSportVoteOfThanks,
} from "../../../constants/image_assets";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
}
const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  src,
  alt,
  caption,
}) => (
  <Box textAlign="center" px={0}>
    <Image
      mt={4}
      borderRadius="lg"
      width={{ sm: "100%", md: "100%" }}
      height={{ sm: "100%", md: "500px" }}
      src={src}
      alt={alt}
      mx={"auto"}
      objectFit={'cover'}
    />
    <Text fontWeight={"600"} fontSize={"12px"} textAlign={"center"}>
      {caption}
    </Text>
  </Box>
);

const ChiefLeagueEditions = [
  { year: "2023", path: "/events/sigma-chief's-league/2023" },
  { year: "2024", path: "/events/sigma-chief's-league/2024" },
];

const ChiefLeague2024 = () => {
  return (
    <Container maxW="7xl" className="animate-bottom">
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex={{ base: "none", md: 7.5 }}>
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
                Celebrating Unity and Excellence: The SIGMA Chief’s League
              </Text>
              <br />

              <Text fontSize="16px" lineHeight="normal" textAlign="justify">
                The University of Ibadan recently witnessed a thrilling showcase
                of athletic prowess and community spirit through the SIGMA
                Chief’s League and SIGMA Chief’s Cup, organized by the
                prestigious SIGMA Club. These tournaments, aimed at entertaining
                and fostering unity and philanthropy among students, spanned
                several weeks and involved both male and female participants,
                becoming a highlight in the university’s calendar.
              </Text>


              <Flex direction={{ base: "column", md: "row" }} gap={4}>
              <ImageWithCaption
                src={LoyalSigmites}
                alt="Cross section of Loyal Sigmites"
                caption="Cross section of Loyal Sigmites"
              />

              <ImageWithCaption
                src={Chief}
                alt="Sigma Chief welcoming the Players"
                caption="Sigma Chief welcoming the Players"
              />
              </Flex>

              <Text fontSize="16px" lineHeight="normal" textAlign="justify" mt={4}>
                The SIGMA Chief's Cup was introduced to innovate and engage the
                student body. This tournament was open to both male and female
                undergraduates from various faculties. The male teams,
                consisting of seven players each, were randomly formed, while
                the female teams represented their respective halls of
                residence: Alexander Brown Hall, Queen Elizabeth Hall, Queen
                Idia Hall, and Obafemi Awolowo Hall. From 36 male teams that
                applied, only 16 were selected after a rigorous screening
                process. The competition kicked off on April 28, 2023, with
                simultaneous matches at the Zik and Indy Maracanas, culminating
                on April 30, 2023, with the Gentlemen's Club emerging victorious
                in the male category and Idia Hall winning the female category.
              </Text>

              <Text fontSize="16px" lineHeight="normal" textAlign="justify" mt={4}>
                Building on the success of the SIGMA Chief’s Cup, the SIGMA Club
                introduced the SIGMA Chief’s League, a bi-gender football
                tournament held from January 22 to February 4, 2024. This
                tournament featured both undergraduate and postgraduate
                students, with matches played at the SUB pitch and Nnamdi
                Azikiwe Hall Maracana pitch. The male category consisted of 16
                teams, while the female category included 12 departmental teams.
                The male teams competed in a knockout format with both first and
                second legs, progressing to the semifinals, a third-place match,
                and the final. The female teams played in a knockout format
                initially, with the six winners advancing to a league stage.
              </Text>
               
              <Flex direction={{ base: "column", md: "row" }} gap={4}>
              <ImageWithCaption
                src={Team}
                alt="A united cross section of the male team, ready to conquer the field together."
                caption="A united cross section of the male team, ready to conquer the field together."
              />

              <ImageWithCaption
                src={FemaleTeam}
                alt="Capturing the essence of unity and determination among the female team."
                caption="Capturing the essence of unity and determination among the female team."
              />
              </Flex>

              <Text fontSize="16px" lineHeight="normal" textAlign="justify" mt={4}>
                The SIGMA Chief's League commenced with a vibrant opening
                ceremony. Spectators settled in while the loyal Sigmites sang
                the Sigma anthem. The event featured inspiring introductory
                speeches from the Deputy Sigma Chief, Loyalist Babatunde
                Akinoluwa, and the Committee Chairman, Loyalist Afolabi Gideon.
                Following these addresses, the Sigma Chief made the ceremonial
                opening kick, formally inaugurating the competition
              </Text>

              <ImageWithCaption
                src={SigmaChiefKick}
                alt="Sigma Chief poised to kick off the match with precision and power."
                caption="Sigma Chief poised to kick off the match with precision and power."
              />

              <Text fontSize="16px" lineHeight="normal" textAlign="justify" mt={4}>
                Loyalist Afolabi Gideon, chairman of SIGMA Chief’s League
                Committee, emphasized the tournament's dual purpose of promoting
                social activities and philanthropy. "The SIGMA Chief’s League is
                a social event organized by SIGMA Club and an act of
                philanthropy. Participants, spectators, and winners will receive
                gifts, reinforcing our club's commitment to social welfare," he
                explained.
              </Text>

              <ImageWithCaption
                src={CommitteChair}
                alt="Sigma Chief's League Committee Chairman, Loyalist Afolabi Gideon while delivering opening speech"
                caption="Sigma Chief's League Committee Chairman, Loyalist Afolabi Gideon while delivering opening speech"
              />

              <Text fontSize="16px" lineHeight="normal" textAlign="justify" mt={4}>
                The competition's knockout stages were filled with excitement
                with matches averaging over 600 spectators. In the male
                category, Soccer For All (SFA) defeated NUESA Clippers 2-0,
                while in the female category, ASSE, the reigning NUESA Dean’s
                Cup champions, triumphed over Sociology 2-1. Another thrilling
                match saw the Statistics female team outscore KHE 4-2 in a
                six-goal thriller.
              </Text>


              <Flex direction={{ base: "column", md: "row" }} gap={4}>
              <ImageWithCaption
                src={MatchOn}
                alt="Male team striving for victory with every kick and shot."
                caption="Male team striving for victory with every kick and shot."
              />

              <ImageWithCaption
                src={MatchOnF1}
                alt="Female team demonstrating grace and grit on the field."
                caption="Female team demonstrating grace and grit on the field."
              />
              </Flex>

              <Text fontSize="16px" lineHeight="normal" textAlign="justify" mt={4}>
                On the grand finale of the SIGMA Chief's League, the Director of
                Sports made the opening kick during the closing ceremony, which
                was succeeded by a novelty match between loyal Sigmites and Old
                Sigmites. The match ended 2-1 in favor of the Loyal Sigmites,
                showcasing the passion and camaraderie that defined the league.
              </Text>


              <Flex direction={{ base: "column", md: "row" }} gap={4}>
              <ImageWithCaption
                src={UIDirectorOfSport}
                alt="UI Director of Sports leading by example with a powerful shot."
                caption="UI Director of Sports leading by example with a powerful shot."
              />

              <ImageWithCaption
                src={OldSig}
                alt="Experience and passion unite: Old Sigmites and Loyal Sigmites playing together."
                caption="Experience and passion unite: Old Sigmites and Loyal Sigmites playing together."
              />
              </Flex>

              <Text fontSize="16px" lineHeight="normal" textAlign="justify" mt={4}>
                The men’s final between SFA and TomTom FC was a dramatic
                encounter, ending in a 3-3 draw that led to penalties. Held on
                February 5, 2024, in front of 1,081 teeming spectators, at the
                SUB pitch, the match was marred by contentious refereeing
                decisions, causing a temporary suspension due to fan protests.
                SFA eventually triumphed 4-2 on penalties, winning the 100,000
                Naira cash prize. In the third-place match, Prime FC secured a
                4-1 victory over Galaticos FC. In the female category, the
                Department of Arts and Social Science Education (ASSE) clinched
                first place, winning a cash prize of 50,000 Naira, while the
                Departments of Statistics and European Studies secured second
                and third places, respectively. The ASSE females solidified
                their dominance by defeating Statistics 2-1 in the final league
                match. Omolola, a standout player, scored both goals for ASSE,
                leading her team to victory and securing the coveted title. With
                13 points from five matches, ASSE emerged as the champions,
                showcasing their prowess and teamwork.
              </Text>


              <Flex direction={{ base: "column", md: "row" }} gap={4}>
              <ImageWithCaption
                src={Presentation}
                alt="Presenting the cash prize to the male winner category."
                caption="Presenting the cash prize and other items to the male winner category."
              />

              <ImageWithCaption
                src={PresentationF}
                alt="Presenting the cash prize to the female winner category."
                caption="Presentation the cash prize and other items to the female winner category."
              />
              </Flex>

              <Text fontSize="16px" lineHeight="normal" textAlign="justify" mt={4}>
                The success of the SIGMA Chief’s League was bolstered by
                generous sponsorship from Unilever. As part of their commitment
                to supporting community initiatives, Unilever provided a range
                of their popular products, including CloseUp toothpaste, body
                lotions, and seasoning cubes, which were distributed to the
                spectators throughout the tournaments. The winners not only
                received significant cash prizes but were also awarded packs of
                Unilever products, adding to the excitement and value of their
                victories. This sponsorship not only enhanced the overall
                experience for participants and spectators but also reinforced
                the community-oriented spirit of SIGMA Club's events.
              </Text>

              <ImageWithCaption
                src={UiDirectorOfSportVoteOfThanks}
                alt="UI Director of Sports "
                caption=" UI Director of Sports admonishing the players to uphold sportsmanship"
              />

              <Text fontSize="16px" lineHeight="normal" textAlign="justify" mt={4}>
                The SIGMA Chief’s League has not only highlighted the football
                talent within the University of Ibadan but also reinforced the
                values of unity, community, and social welfare. As the dust
                settles on these thrilling tournaments, the SIGMA Club remains
                committed to its mission of promoting love and peace through
                sports. Looking forward, anticipation is already building for
                future editions of these competitions. The spirit of the game
                and the values it promotes will continue to thrive at the
                University of Ibadan, ensuring that the legacy of the SIGMA
                Chief’s League endures for years to come.
              </Text>

              <ImageWithCaption
                src={SigmaChiefVoteOfThanks}
                alt="Sigma Chief giving the closing speech"
                caption="   Sigma Chief delivering a heartfelt vote of thanks."
              />
            </Box>
          </Flex>
        </Box>

        <Box
          flex={{ base: "none", md: 2.5 }}
          mt={4}
          p={{ lg: "10", md: "3", sm: "4" }}
          fontWeight="500"
        >
          <SideBar
            editions={ChiefLeagueEditions}
            eventName="Sigma Chief's League"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default ChiefLeague2024;
