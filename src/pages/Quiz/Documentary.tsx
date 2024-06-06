import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Box, Text, Button, Image, Container , Center} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SigmaLogo } from "../../constants/image_assets";

const Documentary: React.FC = () => {
  return (
    <Container maxW={"8xl"}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Image
          src={SigmaLogo}
          maxWidth={{ base: "150px", md: "200px", lg: "300px" }}
          width="100%"
          objectFit="contain"
          alt="Sigma Logo"
        />
        <Link to="/roseline-etuokwu/quiz-competition">
          <Button
            leftIcon={<FaHome />}
            colorScheme="teal"
            variant="outline"
            border={"none"}
          >
            Back to Home
          </Button>
        </Link>
      </Box>
      <Center>
      <Box py={6} px={0} maxW={"918px"} >
        <Swiper
          cssMode={true}
          navigation={false}
          mousewheel={true}
          loop={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
          spaceBetween={30}
          centeredSlides={true}
        >
          <SwiperSlide>
          <div style={{ borderRadius: "15px", overflow: "hidden" }}>
            <iframe
              width="918px"
              height="475px"
              src="https://www.youtube.com/embed/0kChM02MPOU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ border: 0 }}
              
            ></iframe>
            </div>
          </SwiperSlide>
        
        </Swiper>

        <Box py={2}>
          <Text color={"#1C1C1C"} fontSize={"16px"} lineHeight={"24px"}>
            What inspired the initiative of the Roseline Etuokwu Sigma National
            Secondary School Quiz Competition? Listen to the Sigma Chief as he
            explains how the idea of the Quiz Competition came to be. See the
            rest of the Sigma Chief's Interview at the Morning Show on Arise TV{" "}
            <a
              href="https://www.youtube.com/watch?v=0kChM02MPOU"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#03B9E1", textDecoration: "underline" }}
            >
              https://www.youtube.com/watch?v=0kChM02MPOU
            </a>
          </Text>
        </Box>
      </Box>
      </Center>
    </Container>
  );
};

export default Documentary;
