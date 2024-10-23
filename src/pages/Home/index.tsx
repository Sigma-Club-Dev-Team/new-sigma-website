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
// import SigmaWalk  from "./UpcomingEvent";
// import QuizCompetitionCard from "./QuizCompetitionCard";
import Quiz2025 from './UpcomingEvent'
import OurPosts from "./OurPosts";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      {/* <SigmaWalk /> */}
      <Quiz2025 />
      <UpcomingEvent />
      <Philantrophy /> 
      <OurPosts />
      <Documentary />
      <Blog />
      <HonourarySigmites />
      <MerchHero />
      <Footer />
    </>
  );
}

export default HomePage;
