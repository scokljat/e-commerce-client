import axios from "../http";

const UsersServices = {
  registerUser: (user) => {
    const url = "/register";
    return axios.post(url, user);
  },

  loginUser: (user) => {
    const url = "/login";
    return axios.post(url, user);
  },

  getUserById: (id) => {
    const url = `/users/${id}`;
    return axios.get(url);
  },
};

export default UsersServices;
