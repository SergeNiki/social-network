import React from "react";
import classes from "./User.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../../assets/images/user.png";

const UserItems = (props) => {

  const onToggleFollow = () => {
    if (props.user.is_followed) {
      props.unfollow(props.user.id)
    } else {
      props.follow(props.user.id)
    }
  };

  return (
    <li className={classes.user}>
      <div className={classes.pers}>
        <NavLink to={"/profile/" + props.user.id} className={classes.img_wrap} >
          <img
            src={
              props.user.profile_image != null
                ? props.user.profile_image
                : userPhoto
            }
            alt="ava"
          />
        </NavLink>
        <button
          disabled={props.followingInProgress.some(
            (id) => id === props.user.id
          )}
          onClick={onToggleFollow}
          style={
            props.user.is_followed
              ? { backgroundColor: "rgb(197, 197, 197)" }
              : { backgroundColor: "rgb(100, 206, 255)" }
          }
        >
          {props.user.is_followed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className={classes.name_pers}>
        <NavLink to={"/profile/" + props.user.id}>
          <h3>{props.user.username}</h3>
        </NavLink>
      </div>
      <div className={classes.status}>{props.user.display_status}</div>
    </li>
  );
};

export default UserItems;
