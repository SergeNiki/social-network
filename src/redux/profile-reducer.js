import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  postsData: [
    { id: 1, text: "Сегодня отличная погода!", likesCount: 27 },
    {
      id: 2,
      text: "Дистант окончен. С понедельника очное обучение!",
      likesCount: 63,
    },
    { id: 3, text: "Чупапимуняня", likesCount: 108 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsData: [
          { id: 4, text: action.postText, likesCount: 0 },
          ...state.postsData,
        ]
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPost = (postText) => ({
  type: ADD_POST,
  postText
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then((data) => {
      dispatch(setUserStatus(data))
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if(response.status === 200) {
        dispatch(setUserStatus(status))
      } else {
        alert('Error!');
      }
    });
  };
};

export default profileReducer;
