import React from "react";
import { Link, Redirect } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { IconButton, Button } from "@material-ui/core";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AnnouncementIcon from '@material-ui/icons/Announcement';

const Nav = () => {
  return (
    <div className = 'navBar'>
      <Link to="/home">
        <IconButton>
          <HomeIcon />
          <span>Home</span>
        </IconButton>
      </Link>
      <Link to="/search">
        <IconButton>
          <SearchIcon />
          <span>Drug Search</span>
        </IconButton>
      </Link>
      <Link to="/recommend">
        <IconButton>
          <LocalHospitalIcon/>
          <span>Get a Recommendation</span>
        </IconButton>
      </Link>
      <Link to="/covid">
        <IconButton>
          <AnnouncementIcon/>
          <span>Covid News/Recommendations</span>
        </IconButton>
      </Link>
    </div>
  );
};

export default Nav