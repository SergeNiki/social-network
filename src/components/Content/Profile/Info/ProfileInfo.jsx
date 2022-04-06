import React from "react";
import classes from "./ProfileInfo.module.css";
import userPhoto from "./../../../../assets/images/user.png"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

  return (
    <div className={classes.profileInfo}>
      <img
        src={props.profile.profile_image ? props.profile.profile_image : userPhoto }
        alt="ava"
      />
      <div className={classes.personInfo}>
        <h3>{props.profile.username != null ? props.profile.username : "NoName"}</h3>
        <p>{props.profile.bio != null ? props.profile.bio : "NoInfo"}</p>
        <ProfileStatus status={props.profile.display_status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
