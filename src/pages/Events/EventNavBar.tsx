import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink, Outlet } from "react-router-dom";
import {
  Box,
} from "@chakra-ui/react";
import "./index.css";

const EventNavBar = () => {
  return (
    <>
      <Header />
      <Box maxW="7xl" mx={'auto'}>
      <nav className="topnav" >
        <NavLink to="quiz-competition" className="nav">
          Sigma Quiz Competition
        </NavLink>
        <NavLink to="scholarship" className="nav">
          Sigma Scholarship Scheme
        </NavLink>
        <NavLink to="health-outreach/2024" className="nav">
          Sigma Health Outreach
        </NavLink>
        <NavLink to="/events/sigma-chief's-league/2024" className="nav">
          Sigma Chief's League
        </NavLink>

        <NavLink to="/events/Gentlemen-picnic" className="nav">
          Sigma Gentlemen Picnic 
        </NavLink>
        <NavLink to="/events/sigma-iyd" className="nav">
          Sigma Int'l Youth Day
        </NavLink>
      </nav>
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};

export default EventNavBar;
