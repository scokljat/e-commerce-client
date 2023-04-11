import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import MyShop from "../pages/MyShop";
import Profile from "../pages/profile/Profile";
import Error from "../pages/Error";
import Details from "../pages/Details";
import { ReactComponent as HomeIcon } from "../assets/images/home.svg";
import { ReactComponent as User } from "../assets/images/user.svg";
import { ReactComponent as Bag } from "../assets/images/bag.svg";
import WhiteDress from "../assets/images/home_photo4.jpg";
import BlackShirt from "../assets/images/home_photo2.jpg";
import Girl from "../assets/images/home_photo1.jpg";

export const routes = [
  { path: "/login", page: <Login /> },
  { path: "/register", page: <Register /> },
  { path: "/", page: <Home /> },
  { path: "/shop/:category", page: <Shop /> },
  { path: "/my-shop", page: <MyShop /> },
  { path: "/shop/:productId", page: <Details /> },
  { path: "/profile", page: <Profile /> },
  { path: "/*", page: <Error /> },
];

export const navbarList = [
  { route: "/dashboard", icon: <HomeIcon /> },
  { route: "/profile", icon: <User /> },
  { route: "/my-shop", icon: <Bag /> },
];

export const SliderData = [WhiteDress, Girl, BlackShirt];

export const sidebarList = [
  { name: "View all", path: "/shop/View-all", category: "View-all" },
  { name: "Dresses", path: "/shop/Dresses", category: "Dresses" },
  { name: "Tops", path: "/shop/Tops", category: "Tops" },
  { name: "Shirts", path: "/shop/Shirts", category: "Shirts" },
  { name: "Pants", path: "/shop/Pants", category: "Pants" },
  { name: "Jeans", path: "/shop/Jeans", category: "Jeans" },
  { name: "Jackets", path: "/shop/Jackets", category: "Jackets" },
  { name: "Skirts", path: "/shop/Skirts", category: "Skirts" },
  { name: "Shoes", path: "/shop/Shoes", category: "Shoes" },
];

export const selectOptions = ["S", "M", "L"];
