import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import User from "./UserItem/User";
import classes from "./Users.module.css";

const Users = (props) => {
  const [currPage, setCurrPage] = React.useState(1);

  React.useEffect(() => {
    return () => {
      props.clearState();
    };
  }, []);

  React.useEffect(() => {
    props.getUsers(currPage, props.pageSize);
  }, [currPage]);

  const users = props.users.map((user) => (
    <User
      key={user.id}
      user={user}
      toggleFollow={props.toggleFollow}
      followingInProgress={props.followingInProgress}
      toggleFollowingInProgress={props.toggleFollowingInProgress}
      unfollow={props.unfollow}
      follow={props.follow}
    />
  ));
  return (
    <div className={classes.users}>
      <div>
        <ul>{users}</ul>
        {props.isFetching ? (
          <div>Loading...</div>
        ) : (
          <button
            onClick={() => {
              setCurrPage(currPage + 1);
            }}
          >
            show more
          </button>
        )}
      </div>
    </div>
  );
};

export default Users;
