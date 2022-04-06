import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { login } from "./../../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h2>Login</h2>
      <LoginForm login={props.login} />
      
    </div>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
