import { userAPI } from "../api/api";

const TOGGLE_FOLLOWED = "TOGGLE-FOLLOWED";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";
const CLEAR_STATE = "CLEAR_STATE";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOWED:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, is_followed: !user.is_followed };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    case CLEAR_STATE:
      return initialState;

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter((id) => id !== action.userID),
      };
    default:
      return state;
  }
};

export const toggleFollow = (userID) => ({
  type: TOGGLE_FOLLOWED,
  userID,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const clearState = () => ({
  type: CLEAR_STATE
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingInProgress = (isFetching, userID) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userID,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    // dispatch(setCurrentPage(currentPage));
    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.users));
      dispatch(setTotalCount(data.count));
    });
  };
};

export const unfollow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userID));
    userAPI.unfollow(userID).then((response) => {
      if (response.status === 204) {
        dispatch(toggleFollow(userID));
      }
      dispatch(toggleFollowingInProgress(false, userID));
    });
  };
};

export const follow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userID));
    userAPI.follow(userID).then((response) => {
      if (response.status === 201) {
        dispatch(toggleFollow(userID));
      }
      dispatch(toggleFollowingInProgress(false, userID));
    });
  };
};

export default usersReducer;
