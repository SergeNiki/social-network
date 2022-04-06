import React from "react";
import classes from "./Preloader.module.css"
import preloader from "./../../../assets/images/Spin-1s-200px.svg";

const Preloader = () => {
  return (
    <div className={classes.preloader} >
      <img style={ {fill: 'white'} } src={preloader} alt="loading gif" />
    </div>
  );
};

export default Preloader;
