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
import Clothes from "../assets/images/clothes.jpg";
import Clothes2 from "../assets/images/clothes2.jpg";

export const routes = [
  { path: "/login", page: <Login /> },
  { path: "/register", page: <Register /> },
  { path: "/", page: <Home /> },
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

export const SliderData = [
  {
    image: Clothes,
  },
  {
    image: Clothes2,
  },
];

export const sidebarList = [
  { name: "View all", path: "/shop?category=view-all" },
  { name: "Dresses", path: "/shop?category=dresses" },
  { name: "Tops", path: "/shop?category=tops" },
  { name: "Shirts", path: "/shop?category=shirts" },
  { name: "Pants", path: "/shop?category=pants" },
  { name: "Jeans", path: "/shop?category=jeans" },
  { name: "Jackets", path: "/shop?category=jackets" },
  { name: "Skirts", path: "/shop?category=skirts" },
  { name: "Shoes", path: "/shop?category=shoes" },
];
