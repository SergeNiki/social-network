import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const setActive = ({ isActive }) => (isActive ? classes.activeLink : " ");

const DialogItem = (props) => {
  return (
    <li className={classes.dialog_item}>
      <NavLink to={props.id} className={setActive}>
        <img src={props.src} alt="ava" />
        <p>{props.name}</p>
      </NavLink>
    </li>
  );
};

export default DialogItem;
