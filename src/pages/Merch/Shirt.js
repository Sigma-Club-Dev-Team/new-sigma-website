import {
  Box,
  Link,
  Image,
  Text,
  Stack,
  useColorModeValue,
  IconButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaTag } from "react-icons/fa";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";
import image1 from "../../assets/Merch-Assets/Shirts/t shirt front with fela.jpg";
import image2 from "../../assets//Merch-Assets/Shirts/t shirt with Havanna Flter.jpg";

import image4 from "../../assets/Merch-Assets/Shirts/T-shirt purple headart.png";
import image5 from "../../assets/Merch-Assets/Shirts/T-shirt purple sigma club text with art on sleeves.png";
import image7 from "../../assets/Merch-Assets/Shirts/T-shirt white headart.png";
import image8 from "../../assets/Merch-Assets/Shirts/T-shirt white sigma club text with art.png";
import image9 from "../../assets/Merch-Assets/Shirts/TShirt_purple and white.png";

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

const ShirtCard = () => {
  const content = [
    {
      imageUrl: image1,
      note: "T-Shirt With Fela Potrait",
      Price: "N,7000",
    },
    {
      imageUrl: image2,
      note: "Havanna T-Shirt",
      Price: "N,7000",
    },

    {
      imageUrl: image4,
      note: "Purple Shirt V1",
      Price: "N,7000",
    },
    {
      imageUrl: image5,
      note: "Purple Shirt v2",
      Price: "N,7000",
    },
    {
      imageUrl: image9,
      note: "Purple T-Shirt v3",
      Price: "N,7000",
    },

    {
      imageUrl: image8,
      note: "White T-Shirt v1",
      Price: "N,7000",
    },

    {
      imageUrl: image7,
      note: "White T-Shirt v2",
      Price: "N,7000",
    },
  ];

  const interval = 3000; // Transition interval in milliseconds

  return <CarouselCard content={content} interval={interval} />;
};

export default ShirtCard;
