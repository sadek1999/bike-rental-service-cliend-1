import { Outlet } from "react-router-dom";
import Footer from "../../pages/sheard/Footer";
import Navbar from "../../pages/sheard/Navbar";


const MainLayout = () => {
  return <div className="max-w-7xl mx-auto bg-green-50">
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
  </div>;
};

export default MainLayout;
