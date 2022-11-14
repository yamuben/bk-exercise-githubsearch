import { Routes, Route } from "react-router-dom";
import HomeView from "../views/Home";
import MainLayoutRoutes from "./MainLayoutRoutes";
import HistoryView from "../views/History"

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayoutRoutes />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/search/:search" element={<HomeView />} />
        <Route path="/history" element={<HistoryView />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
