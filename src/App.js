import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "./utils/Constants";
import NavBar from "./components/navbar/NavBar";
import { MainContainer } from "./globalStyle";
import "./App.css";
import { getUserById } from "./store/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(1));
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
