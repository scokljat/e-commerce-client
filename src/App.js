import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { Toaster } from "react-hot-toast";
import { routes, sidebarList } from "./utils/Constants";
import NavBar from "./components/navbar/NavBar";
import Shop from "./pages/shop/Shop";
import { getUserById } from "./store/user/userSlice";
import { getUserProducts } from "./store/products/productSlice";
import { MainContainer } from "./globalStyle";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getUserById(jwtDecode(localStorage.getItem("token")).id)).then(
        () =>
          dispatch(getUserProducts(jwtDecode(localStorage.getItem("token")).id))
      );
    }
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Toaster position="top-center" reverseOrder={false} />
      <MainContainer
        authPage={
          location.pathname === "/login" || location.pathname === "/register"
            ? true
            : false
        }
      >
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.page} />
          ))}
          <Route path="/shop" element={<Shop />}>
            {sidebarList.map((item, index) => (
              <Route key={index} path={item.category} element={<Shop />} />
            ))}
          </Route>
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
