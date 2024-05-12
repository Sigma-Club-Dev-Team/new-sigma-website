import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

const EventNavBar = () => {
  return (
    <>
      <Header />
      <nav className="topnav">
        <NavLink to="quiz-competition" className="nav">
          Sigma Quiz Competition
        </NavLink>
        <NavLink to="scholarship" className="nav">
          Sigma Scholarship Scheme
        </NavLink>
        <NavLink to="health-outreach/2024" className="nav">
          Sigma Health Outreach
        </NavLink>
        <NavLink to="sport-competition" className="nav">
          Sigma Chief Cup
        </NavLink>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default EventNavBar;
