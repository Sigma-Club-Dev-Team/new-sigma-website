import {
  Box,
  Link,
  Button,
  Image,
  Text,
  Stack,
  useColorModeValue,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaTag } from "react-icons/fa";

import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";
import image1 from "../../assets/Merch-Assets/Pants/short black.png";
import image2 from "../../assets/Merch-Assets/Pants/short purple.png";
import image3 from "../../assets/Merch-Assets/Pants/short white.png";
import image4 from "../../assets/Merch-Assets/Pants/pants purple sigma club text with art-1.png";
import image5 from "../../assets/Merch-Assets/Pants/pants white sigma club text with art.png";

const CarouselCard = ({ content, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = content.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(handleNext, interval);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Box
      className="animate-bottom"
      w={{ base: "100%", md: "47%" }}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"md"}
      rounded={"md"}
      overflow={"hidden"}
      mx="auto"
      my={3}
    >
      <Box bg={"gray.100"} pos={"relative"}>
        <IconButton
          icon={<ChevronLeftIcon />}
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          onClick={handlePrev}
          aria-label="Next"
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex="2"
          fontSize={40}
          variant="outline"
        />

        <IconButton
          icon={<ChevronRightIcon />}
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          onClick={handleNext}
          aria-label="Next"
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex="2"
          fontSize={40}
          variant="outline"
        />

        <Image
          src={content[currentIndex].imageUrl}
          layout={"fill"}
          height="300px"
          w="100vw"
        />
      </Box>

      <Stack bg={"brand.purple"}>
        <Flex justifyContent="space-around" color="white" py={3}>
          <Text transition="ease-in-out">{content[currentIndex].note}</Text>
          <Text display="flex" alignItems={"center"} gap={"1"}>
            <FaTag />
            {content[currentIndex].Price}
          </Text>
        </Flex>
        <Box p={4} display="flex" justifyContent="center">
          {Array.from({ length: totalSlides }, (_, index) => (
            <Box
              key={index}
              as="span"
              bg={index === currentIndex ? "white" : "yellow.500"}
              mx={1}
              w={2}
              h={2}
              zIndex={1}
              borderRadius="full"
              display="inline-block"
            ></Box>
          ))}
          <Link
            target="_blank"
            href="https://wa.me/2349037469878?text=Hi%2C%20I%27m%20interested%20in%20the%20Sigma%20merch.%20My%20name%20is%20________"
          >
            <Button position="absolute" right={5} bottom={3} px={4}>
              Buy
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

const ShortsCard = () => {
  const content = [
    {
      imageUrl: image1,
      note: "Black Short",
      Price: "N4,000",
    },
    {
      imageUrl: image2,
      note: "Purple Short",
      Price: "N4,000",
    },
    {
      imageUrl: image3,
      note: "White Short",
      Price: "N4,000",
    },

    {
      imageUrl: image4,
      note: "Purple Pant",
      Price: "N4,500",
    },
    {
      imageUrl: image5,
      note: "White Pant",
      Price: "N4,500",
    },
  ];

  const interval = 3000; // Transition interval in milliseconds

  return <CarouselCard content={content} interval={interval} />;
};

export default ShortsCard;
