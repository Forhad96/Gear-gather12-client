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
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import ManageProducts from "../pages/Dashboard/ManageProducts/ManageProducts";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import ProductDetails from "../shared/ProductDetails/ProductDetails";
import EditProduct from "../shared/EditProduct/EditProduct";
import PrivateRoute from "./PrivateRoute";
import ManageReports from "../pages/Dashboard/ManageReports/ManageReorts";
import ViewReports from "../pages/Dashboard/ManageReports/ViewReports";
import AdminRoute from "./AdminRoute";
import Coupons from "../pages/Dashboard/Coupons/Coupons";
import AddCoupon from "../pages/Dashboard/Coupons/AddCoupon";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {},
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "manageProducts",
        element: (
          <AdminRoute>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        ),
      },
      {
        path: "myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "editProduct/:id",
        element: <EditProduct></EditProduct>,
      },
      {
        path: "manageReports",
        element: (
          <AdminRoute>
            <ManageReports></ManageReports>
          </AdminRoute>
        ),
      },
      {
        path: "viewReports/:id",
        element: (
          <AdminRoute>
            <ViewReports></ViewReports>
          </AdminRoute>
        ),
      },
      {
        path: "coupons",
        element: (
          <AdminRoute>
            <Coupons></Coupons>
          </AdminRoute>
        ),
      },
      {
        path: " addCoupon",
        element: (
          <AdminRoute>
            <AddCoupon></AddCoupon>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default route;
