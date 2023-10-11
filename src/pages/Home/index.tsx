import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import UpcomingEvent from "./UpcompingEvent";
import Documentary from "./Documentary";
import Philantrophy from "./Philantrophy";
import Blog from "./TopStories";
import HonourarySigmites from "./HonSigmites";
import MerchHero from "./MerchHero";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <UpcomingEvent />
      <Philantrophy />
      <Documentary />
      <Blog />
      <HonourarySigmites />
      <MerchHero />
      <Footer />
    </>
  );
}

export default HomePage;
