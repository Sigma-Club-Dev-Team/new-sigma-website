import Header from "./components/Header";
import Hero from "./components/hero";
import UpcomingEvents from "./components/upcomingEvents";
import MerchHero from "./components/MerchHero";
import Footer from "./components/footer";
import HonourarySigmites from "./components/HonSigmites";
import Documentary from "./components/Documentary";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <UpcomingEvents />
      <Documentary />
      <HonourarySigmites />
      <MerchHero />
      <Footer />
    </div>
  );
}

export default App;
