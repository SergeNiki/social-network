import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const setActive = ({isActive})=>isActive ? classes.activeLink : ' ';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to={"/profile"} className={setActive} >Profile</NavLink>
        </li>
        <li>
          <NavLink to={"/dialogs"} className={setActive} >Messages</NavLink>
        </li>
        <li>
          <NavLink to={"/friends"} className={setActive} >Friends</NavLink>
        </li>
        <li>
          <NavLink to={"/users"} className={setActive} >Users</NavLink>
        </li>
        <li>
          <NavLink to={"/settings"} className={setActive} >Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
