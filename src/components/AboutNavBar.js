import { Link } from "react-router-dom";

const EventNavBar = () => {
  return (
    <nav className="about-topnav">
      <Link to="about/history" className="nav">
        Sigma History
      </Link>
      <Link to="about/sigma-chief" className="nav">
        Sigma Chief
      </Link>
      <Link to="about/executives" className="nav">
        Executives/Committes
      </Link>
      <Link to="about/roll-of-honour" className="nav">
        Role of Honour
      </Link>
    </nav>
  );
};

export default EventNavBar;
