import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const EventNavBar = () => {
  return (
    <nav className="topnav">
      <Link to="events/quiz-competition" className="nav">
        Sigma Quiz Competition
      </Link>
      <Link to="events/Scholarship" className="nav">
        Sigma Scholarship Scheme
      </Link>
      <Link to="events/health-outreach" className="nav">
        Sigma Guest Luncheon
      </Link>
      <Link to="events/sport-competition" className="nav">
        Sigma Essay Competition
      </Link>
      <Menu className="topnav">
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          variant="outline"
        >
          Philantrophy
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
        </MenuList>
      </Menu>
    </nav>
  );
};

export default EventNavBar;
