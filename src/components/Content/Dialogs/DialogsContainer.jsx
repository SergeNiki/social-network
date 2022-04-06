import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import {
  sendMessage
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, {
//   sendMessage,
//   onChangeTextMessage,
// })(AuthRedirectComponent);

// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, {
    sendMessage
  }),
  withAuthRedirect
)(Dialogs);
