import axios from "axios";

const instance = axios.create({
  baseURL: "http://31.148.203.10:25566/",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  if (localStorage.getItem('access')) {
    config.headers.Authorization = `JWT ${localStorage.getItem('access')}`
  }
  return config;
})

instance.interceptors.response.use((config) => {
  return config;
}, async (error) => {
  const originalRequest = error.config;
  if(error.response.status == 401 && error.config && !originalRequest._isRetry && localStorage.getItem('refresh')) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.post("http://31.148.203.10:25566/auth/jwt/refresh/", {
        refresh: localStorage.getItem("refresh")
    })
    localStorage.setItem("access", response.data.access);
    return instance.request(originalRequest);
    } catch (error) {
      localStorage.clear();
      window.location.reload();
      console.log("Не авторизован!")
    }
  }
  throw error;
})

export const userAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await instance
      .get(`api/v1/users/?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },

  unfollow(userID) {
    return instance.delete(`api/v1/follow/${userID}/`);
  },

  follow(userID) {
    return instance.post(`api/v1/follow/${userID}/`);
  },
};

export const profileAPI = {
  async getUserProfile(userId) {
    const response = await instance.get(`api/v1/profile/id${userId}`);
    return response.data;
  },

  async getUserStatus(userID) {
    const response = await instance.get(`profile/status/${userID}`);
    return response.data;
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {
      status: status,
    });
  },
};

export const authAPI = {
  authUserData() {
    return instance.get(`api/v1/profile/`)
  },
  login(username, password) {
    return instance.post(`auth/jwt/create/`, { username, password });
  },
  signup(email, username, password) {
    return instance.post(`auth/users/`, {email, username, password});
  }
};
