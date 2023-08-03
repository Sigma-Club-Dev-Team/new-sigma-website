import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Center, Flex, Container, Heading } from "@chakra-ui/react";
import Cap from "./Cap";
import Hoodie from "./Hoodie";
import Shirt from "./Shirt";
import Shorts from "./Shorts";
import Loader from "./Loader";
import { useState, useEffect } from "react";

const MerchPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Header />

      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Container
              maxW={"8xl"}
              p={4}
              display="flex"
              flexDirection={"column"}
            >
              <Heading fontSize="24px" p={4}>
                Represent The Heritage Of The Founding Fathers
              </Heading>
              <Center>
                <Flex
                  flexWrap="wrap"
                  direction={{ base: "column", md: "row" }}
                  p={0}
                >
                  <Hoodie />
                  <Shorts />
                  <Cap />
                  <Shirt />
                </Flex>
              </Center>
            </Container>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default MerchPage;
