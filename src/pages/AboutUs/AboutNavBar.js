import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";

const EventNavBar = () => {
  return (
    <>
      <Header />
      <nav className="about-topnav">
        <NavLink to="history" className="nav">
          Sigma History
        </NavLink>
        <NavLink to="sigma-chief" className="nav">
          Sigma Chief
        </NavLink>
        <NavLink to="executives" className="nav">
          Executives/Committes
        </NavLink>
        <NavLink to="roll-of-honour" className="nav">
          Role of Honour
        </NavLink>
        
        <NavLink to="sigma-talents" className="nav">
          Sigma Talents
        </NavLink>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default EventNavBar;
