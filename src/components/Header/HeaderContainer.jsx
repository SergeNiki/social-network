import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  username: state.auth.username,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  logout
})(HeaderContainer);
