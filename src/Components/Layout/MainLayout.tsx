import { Outlet } from "react-router-dom";
import Footer from "../../pages/sheard/Footer";
import Navbar from "../../pages/sheard/Navbar";


const MainLayout = () => {
  return <div>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
  </div>;
};

export default MainLayout;
