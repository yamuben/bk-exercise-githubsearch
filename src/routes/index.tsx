import { Routes, Route } from "react-router-dom";
import HomeView from "../views/Home";
import MainLayoutRoutes from "./MainLayoutRoutes";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayoutRoutes />}>
        <Route path="/" element={<HomeView />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
