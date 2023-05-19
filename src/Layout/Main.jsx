import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBer from "../pages/Shared/NavBer/NavBer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {
  return (
    <div>
      <NavBer></NavBer>
      <Outlet></Outlet>
      <div className="mt-auto mx-auto">
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Main;
