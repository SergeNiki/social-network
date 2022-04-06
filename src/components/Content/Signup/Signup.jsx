import React from "react";
import { connect } from "react-redux";
import SignupForm from "./SignupForm";
import { signup } from "../../../redux/auth-reducer";

const Signup = (props) => {
  return (
    <div>
      <h2>Signup</h2>
      <SignupForm signup={props.signup} />
    </div>
  );
};

export default connect(null, {signup})(Signup);
