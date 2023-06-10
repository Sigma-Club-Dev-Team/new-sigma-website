import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";

const EventNavBar = () => {
  return (
    <>
      <Header />
      <nav className="about-topnav">
        <Link to="history" className="nav">
          Sigma History
        </Link>
        <Link to="sigma-chief" className="nav">
          Sigma Chief
        </Link>
        <Link to="executives" className="nav">
          Executives/Committes
        </Link>
        <Link to="roll-of-honour" className="nav">
          Role of Honour
        </Link>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default EventNavBar;
