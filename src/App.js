import Header from "./components/Header";
import Hero from "./components/hero";
import UpcomingEvents from "./components/upcomingEvents";
import Documentary from "./components/Documentary";
import Philantrophy from "./components/Philantrophy";
import Blog from "./components/TopStories";
import HonourarySigmites from "./components/HonSigmites";
import MerchHero from "./components/MerchHero";
import Footer from "./components/footer";

function App() {
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

export default App;
