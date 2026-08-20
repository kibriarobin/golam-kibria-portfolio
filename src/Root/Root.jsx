import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Root = () => {
  return (
    <div className="max-w-full mx-auto overflow-x-hidden">
      <ScrollToTop />

      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;