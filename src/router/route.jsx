import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../layout/Dashboard/Dashboard";
import DashboardHome from "../pages/Dashboard/Dashboard/DashboardHome";
import Profile from "../pages/Dashboard/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,
        element:<DashboardHome></DashboardHome>
      },
      {
        path:'profile',
        element:<Profile></Profile>
      },
      {
        path:'allUsers',
        element:<AllUsers></AllUsers>,
      }
    ]
  },
]);
export default route;
