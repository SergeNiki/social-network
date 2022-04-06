import { connect } from "react-redux";
import {
  getUsers,
  unfollow,
  follow,
  clearState,
} from "../../../redux/users-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import Users from "./Users";

// const Users = (props) => {
//   const [currPage, setCurrPage] = useState(1);

//   useEffect(() => {
//     return () => {
//       props.clearState();
//     };
//   }, []);

//   useEffect(() => {
//     props.getUsers(currPage, props.pageSize);
//   }, [currPage]);

//   const users = props.users.map((user) => (
//     <User
//       key={user.id}
//       user={user}
//       toggleFollow={props.toggleFollow}
//       followingInProgress={props.followingInProgress}
//       toggleFollowingInProgress={props.toggleFollowingInProgress}
//       unfollow={props.unfollow}
//       follow={props.follow}
//     />
//   ));
//   return (
//     <div className={classes.users}>
//       <div>
//         <ul>{users}</ul>
//         {props.isFetching ? (
//           <div>Loading...</div>
//         ) : (
//           <button
//             onClick={() => {
//               setCurrPage(currPage + 1);
//             }}
//           >
//             show more
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUsers,
    unfollow,
    follow,
    clearState,
  }),
  withAuthRedirect
)(Users);
