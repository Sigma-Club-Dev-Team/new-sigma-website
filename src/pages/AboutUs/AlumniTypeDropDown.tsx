import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { Link as RRLink } from "react-router-dom";

type AlumniTypeDropDownProps = {
  label: "Old Chiefs" | "Old Sigmites";
};
export default function AlumniTypeDropDown({ label }: AlumniTypeDropDownProps) {
  console.log("Current Selection");
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="outline"
        mx={2}
      >
        {label}
      </MenuButton>
      <MenuList>
        <RRLink to={"/about/roll-of-honour"}>
          <MenuItem>Old Chiefs</MenuItem>
        </RRLink>
        <RRLink to={"/about/old-sigmites"}>
          <MenuItem>Old Sigmites</MenuItem>
        </RRLink>
      </MenuList>
    </Menu>
  );
}
