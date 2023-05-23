import { Outlet } from "react-router-dom";
import AppNavbar from "./components/Navbar/AppNavbar";
import AuthProvider from "./context/AuthProvider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <AppNavbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
