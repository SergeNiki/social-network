import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <a href="/profile">
        <img
          src="https://cdn.dribbble.com/users/60166/screenshots/17217488/media/02728f99e977931182d683b6792a17b1.jpg?compress=1&resize=400x300"
          alt="logo"
        />
      </a>
      <div className={classes.login_block}>
        {props.isAuth ? (
          <div>
            {props.username} - <button onClick={props.logout}>Sign Out</button>
          </div>
        ) : (
          <div>
            <NavLink to={"/login"}>Sign In</NavLink> <br />
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
