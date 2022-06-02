import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
