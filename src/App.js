import { Routes, Route } from "react-router-dom";
import { routes } from "./utils/Constants";
import "./App.css";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.page} />
        ))}
      </Routes>
    </>
  );
}

export default App;
