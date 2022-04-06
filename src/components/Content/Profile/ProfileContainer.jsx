import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  getUserStatus,
  updateStatus
} from "./../../../redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    this.props.getUserProfile(this.props.userId);
    // this.props.getUserStatus(this.props.userId);
  };

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  myUserID: state.auth.id,
  // isAuth: state.auth.isAuth,
});

const withRouter = (Component) => {
  let RouterComponent = (props) => {
    let params = useParams();
    if (!params.userId) {
      return <Navigate to={`/profile/${props.myUserID}`} />;
    }
    return <Component {...props} userId={params.userId} />;
  };
  return RouterComponent;
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateStatus
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
