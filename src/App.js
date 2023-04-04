import { Routes, Route } from "react-router-dom";
import { routes } from "./utils/Constants";
import NavBar from "./components/navbar/NavBar";
import { MainContainer } from "./globalStyle";
import "./App.css";

function App() {
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
