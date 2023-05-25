import EventNav from "./EventNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Scholarship from "./Scholarship";
import Health from "./HealthOutreach";
import SportCompetition from "./SportCompetition";
import Header from "../../components/Header";
import "./index.css";

function EventPage() {
  return (
    <Router>
      <div className="App">
        <Header />
        <EventNav />
        <div className="content">
          <Routes>
            <Route path="events/scholarship" element={<Scholarship />} />
            <Route path="events/quiz-competition" element={<Quiz />} />
            <Route path="events/health-outreach" element={<Health />} />
            <Route
              path="events/sport-competition"
              element={<SportCompetition />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default EventPage;
