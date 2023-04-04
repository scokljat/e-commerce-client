import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./utils/Constants";
import NavBar from "./components/navbar/NavBar";
import { MainContainer } from "./globalStyle";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

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
