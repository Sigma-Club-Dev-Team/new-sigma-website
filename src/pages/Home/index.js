import Header from "../../components/Header";
import Footer from "../../components/footer";
import Hero from "./hero";
import UpcomingEvents from "./upcomingEvents";
import Documentary from "./Documentary";
import Philantrophy from "./Philantrophy";
import Blog from "./TopStories";
import HonourarySigmites from "./HonSigmites";
import MerchHero from "./MerchHero";

function HomePage() {
  return (
    <div className="">
      <Header />
      <Hero />
      <UpcomingEvents />
      <Philantrophy />
      <Documentary />
      <Blog />
      <HonourarySigmites />
      <MerchHero />
      <Footer />
    </div>
  );
}

export default HomePage;
