import HomePage from "./pages/Home";
import ViewAllPosts from "./pages/Posts/Posts";
import BlogPage from "./pages/Articles/Blog";
import MerchPage from "./pages/Merch";
import Header from "./components/Header";
import EventNavBar from "./pages/Events/EventNavBar";
import AboutNavBar from "./pages/AboutUs/AboutNavBar";
import Chief from "./pages/AboutUs/Chief";
import History from "./pages/AboutUs/History";
import Executives from "./pages/AboutUs/Executives";
import OldChiefs from "./pages/AboutUs/OldChiefsTable";
import OldSigmites from "./pages/AboutUs/OldSigmitesTable";

import Scholarship from "./pages/Events/Scholarship";
import Quiz from "./pages/Events/Quiz";
import Quiz2024 from "./pages/Events/Quiz/Editions/2024"
import Quiz2024Stages from "./pages/Events/Quiz/Editions/2024/Stages";
import HealthOutreach2024 from "./pages/Events/HealthOutreach/HealthOutreach2024";
import HealthOutreach2023 from "./pages/Events/HealthOutreach/HeathOutreach2023";
import ChiefsLeague2023 from "./pages/Events/SigmaChief'sLeague/SigmaChief'sLeague2023";
import ChiefsLeague2024 from "./pages/Events/SigmaChief'sLeague/SigmaChief'sLeague2024";
import Blogdetails from "./pages/Articles/Blogdetails";
import Talents from "./pages/AboutUs/Sigma Talents/profile";
import Picnic from './pages/Events/GentlemenPicnic/Picnic'
import { Routes, Route } from "react-router-dom";
import "./app.css";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes element={<Header />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutNavBar />}>
          <Route path="sigma-chief" element={<Chief />} />
          <Route path="history" element={<History />} />
          <Route path="executives" element={<Executives />} />
          <Route path="roll-of-honour" element={<OldChiefs />} />
          <Route path="old-sigmites" element={<OldSigmites />} />
          <Route path="sigma-talents" element={<Talents />} />
        </Route>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/posts" element={<ViewAllPosts />} />
        <Route path="/blogs/:id" element={<Blogdetails />} />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/events" element={<EventNavBar />}>
          <Route path="scholarship" element={<Scholarship />} />
          <Route path="quiz-competition" element={<Quiz />} />
          <Route path="health-outreach/2024" element={<HealthOutreach2024 />} />
          <Route path="health-outreach/2023" element={<HealthOutreach2023 />} />
          <Route path="/events/sigma-chief's-league/2023" element={<ChiefsLeague2023 />} />
          <Route path="/events/sigma-chief's-league/2024" element={<ChiefsLeague2024 />} />
          <Route path="/events/Gentlemen-picnic" element={<Picnic />} />
        </Route>
        <Route path="/events/quiz-competition/2024" element={<Quiz2024 />} />
        <Route path="/events/quiz-competition/2024/stages" element={<Quiz2024Stages />} />
      </Routes>
    </>
  );
}

export default App;
