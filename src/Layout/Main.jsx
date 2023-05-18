import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBer from "../pages/Shared/NavBer/NavBer";

const Main = () => {
  return (
    <div>
      <NavBer></NavBer>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
