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

  editUser: (user) => {
    const url = "/users/edit";
    return axios.put(url, user);
  },

  editUserPassword: (user) => {
    const url = "/users/edit-password";
    return axios.put(url, user);
  },
};

export default UsersServices;
