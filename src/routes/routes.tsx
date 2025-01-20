import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About";


import Login from "../pages/Login";
import SignUp from "../pages/SignUp";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: "",
  //   children: [],
  // },
  // {
  //   path: "/user",
  //   element: "",
  //   children: [],
  // },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  

]);
