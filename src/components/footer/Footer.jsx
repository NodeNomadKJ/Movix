import React from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import Person2Icon from "@mui/icons-material/Person2";

const Footer = () => {
  return (
    <footer className="footernavbar">
      <ContentWrapper>
        <div className="menuItems">
          <NavLink
            className="menuItem"
            to="/"
          >
            <PlayCircleOutlineIcon />
          </NavLink>
          <NavLink
            className="menuItem"
            to="/search"
          >
            <SearchIcon />
          </NavLink>
          <NavLink
            className="menuItem"
            to="/account"
          >
            <Person2Icon />
          </NavLink>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
