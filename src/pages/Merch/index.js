import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Center, Flex, Container, Heading } from "@chakra-ui/react";
import Cap from "./Cap";
import Hoodie from "./Hoodie";
import Shirt from "./Shirt";
import Shorts from "./Shorts";
import Loader from './Loader'
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
            <Heading fontSize='24px' px={6} m={4}>Represent The Heritage Of The Founding Fathers</Heading>
            <Center>
              <Container maxW={"8xl"} p={4} display="flex">
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
              </Container>
            </Center>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default MerchPage;
