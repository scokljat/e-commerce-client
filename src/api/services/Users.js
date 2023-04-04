import axios from "../http";

const UsersServices = {
  registerUser: (user) => {
    const url = "/register";
    return axios.post(url, user);
  },
};

export default UsersServices;
