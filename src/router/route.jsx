import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
]);
export default route;