import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  username: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, username, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, username, isAuth },
});

export const getAuthUserData = () => {
  return async (dispatch) => {
    try {
      const response = await authAPI.authUserData();
      let { id, username } = response.data;
      dispatch(setAuthUserData(id, username, true));
    } catch (err) {
      console.log(err);
    }
  };
};

export const signup = (email, username, password, setStutus, setSubmitting) => {
  return async (dispatch) => {
    try {
      const response = await authAPI.signup(email, username, password);
      alert("Success!")
    } catch ({response}) {
      console.log(response)
      response.data
        ? setStutus({ ...response.data })
        : setStutus({ error: "Some error" });
    }
    setSubmitting(false);
  }
}

export const login = (username, password, setStatus, setSubmitting) => {
  return async (dispatch) => {
    try {
      const response = await authAPI.login(username, password);
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      dispatch(getAuthUserData());
    } catch ({response}) {
      debugger
      response.data.detail
        ? setStatus({ error: response.data.detail })
        : setStatus({ error: "Some error" });
    } 
    setSubmitting(false);
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(setAuthUserData(null, null, false));
  };
};

export default authReducer;
