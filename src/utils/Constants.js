import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import MyShop from "../pages/MyShop";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import { ReactComponent as HomeIcon } from "../assets/images/home.svg";
import { ReactComponent as User } from "../assets/images/user.svg";
import { ReactComponent as Bag } from "../assets/images/bag.svg";

export const routes = [
  { path: "/", page: <Login /> },
  { path: "/register", page: <Register /> },
  { path: "/dashboard", page: <Home /> },
  { path: "/shop", page: <Shop /> },
  { path: "/my-shop", page: <MyShop /> },
  { path: "/profile", page: <Profile /> },
  { path: "/*", page: <Error /> },
];

export const navbarList = [
  { route: "/dashboard", icon: <HomeIcon /> },
  { route: "/profile", icon: <User /> },
  { route: "/my-shop", icon: <Bag /> },
];
