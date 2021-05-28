import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./SideNavbar.css";
import { IconContext } from "react-icons";
import { SubButton } from "../SubButton";

import { withRouter } from 'react-router-dom';
import Clock from "../layout/Clock";

import { logout } from "../../Actions/auth";
import { Typography } from "@material-ui/core";


import jwt_decode from "jwt-decode"

const SideNavbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [userName, setuserName] = useState( localStorage.token ? jwt_decode(localStorage.token).sub : 'Guest')

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  //this is the back button
const GoBackButton = withRouter(
  ({ history }) => (
    <SubButton onClick={history.goBack} primary='true'>BACK</SubButton>
  )
);

return (
  <div>
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="sidenavbar">
        <Link to="#" className="menu-bars-side">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <GoBackButton/>
        <div className ="clock-container">
        <Clock/>
        </div>
        <div className="rightside">
        <Link>
        <SubButton onClick={logout} to='/login' primary= 'true'  >Logout</SubButton>
        </Link>
        </div>
        <Typography className="current-user">
          Hi, {userName}
        </Typography>
      </div>
      <nav className={sidebar ? "sidenav-menu active" : "sidenav-menu"}>
        <ul className="sidenav-menu-items" onClick={showSidebar}>
          <li className="sidenavbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li> 
            );
          })}
          
        </ul>
      </nav>
    </IconContext.Provider>
  </div>
);
};


export default SideNavbar;