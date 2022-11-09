import { Outlet } from "react-router-dom";
import MainLayout from "../components/MainLayout";

const MainLayoutRoutes = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default MainLayoutRoutes;
