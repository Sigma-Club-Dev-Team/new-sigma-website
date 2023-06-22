import HomePage from "./pages/Home";
import BlogPage from "./pages/Articles/Blog";
import MerchPage from "./pages/Merch";
import Header from "./components/Header";
import EventNavBar from "./pages/Events/EventNavBar";
import AboutNavBar from "./pages/AboutUs/AboutNavBar";
import Chief from "./pages/AboutUs/Chief";
import History from "./pages/AboutUs/History";
import Executives from "./pages/AboutUs/Executives";
import RollOfHonour from "./pages/AboutUs/RollOfHonour";
import Scholarship from "./pages/Events/Scholarship";
import Quiz from "./pages/Events/Quiz";
import HealthOutreach from "./pages/Events/HealthOutreach";
import SportCompetition from "./pages/Events/SportCompetition";
import Blogdetails from "./pages/Articles/Blogdetails";
import { Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <Routes element={<Header />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutNavBar />}>
        <Route path="sigma-chief" element={<Chief />} />
        <Route path="history" element={<History />} />
        <Route path="executives" element={<Executives />} />
        <Route path="roll-of-honour" element={<RollOfHonour />} />
      </Route>
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blogs/:id" element={<Blogdetails />} />
      <Route path="/merch" element={<MerchPage />} />
      <Route path="/events" element={<EventNavBar />}>
        <Route path="scholarship" element={<Scholarship />} />
        <Route path="quiz-competition" element={<Quiz />} />
        <Route path="health-outreach" element={<HealthOutreach />} />
        <Route path="sport-competition" element={<SportCompetition />} />
      </Route>
    </Routes>
  );
}

export default App;
