import AboutNavBar from "./AboutNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./History";
import Chief from "./Chief";
import Executives from "./Executives";
import RollOfHonour from "./RollOfHonour";
import Header from "../../components/Header";

function AboutPage() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AboutNavBar />

        <div className="content">
          <Routes>
            <Route path="about/sigma-chief" element={<Chief />} />
            <Route path="about/history" element={<History />} />
            <Route path="about/executives" element={<Executives />} />
            <Route path="about/roll-of-honour" element={<RollOfHonour />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AboutPage;
