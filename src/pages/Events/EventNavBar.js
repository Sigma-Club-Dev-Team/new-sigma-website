import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link, Outlet } from "react-router-dom";
import "./index.css";

const EventNavBar = () => {
  return (
    <>
      <Header />
      <nav className="topnav">
        <Link to="quiz-competition" className="nav">
          Sigma Quiz Competition
        </Link>
        <Link to="Scholarship" className="nav">
          Sigma Scholarship Scheme
        </Link>
        <Link to="health-outreach" className="nav">
          Sigma Guest Luncheon
        </Link>
        <Link to="sport-competition" className="nav">
          Sigma Essay Competition
        </Link>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default EventNavBar;
