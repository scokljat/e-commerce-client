import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { routes } from "./utils/Constants";
import NavBar from "./components/navbar/NavBar";
import { getUserById } from "./store/user/userSlice";
import { MainContainer } from "./globalStyle";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getUserById(jwtDecode(localStorage.getItem("token")).id));
    }
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <MainContainer>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.page} />
          ))}
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
