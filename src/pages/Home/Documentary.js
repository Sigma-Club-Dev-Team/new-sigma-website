import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Container, Heading, Box } from "@chakra-ui/react";

export default function Documentary() {
  return (
    <Container maxW={"full"} py={12} bg={"white"}>
      <Container maxW={"8xl"}>
        <Heading>Documentaries</Heading>
        <Box py={12} px={6}>
          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            loop={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
            spaceBetween={30}
            centeredSlides={true}
          >
            <SwiperSlide>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0LQKoj3XXgo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/nfZghgRm4Po"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OUkCR0rhjwA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pvEXAjHgdOs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zo0hv9tKTF0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wt0WmqYwNPE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Container>
  );
}
