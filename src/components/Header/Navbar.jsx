import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ThemeController from "./ThemeController";

import { NavLink } from "react-router-dom";
const axiosPublic = axios.create({
  baseURL: "https://bookify-eight.vercel.app",
});
const Navbar = () => {
  const { data } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosPublic.get("/rooms");
      return res.data;
    },
  });
  console.log(data);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">TechDunia</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <ThemeController></ThemeController>
        <a className="btn">Register/Login</a>
      </div>
    </div>
  );
};
export default Navbar;

const links = (
  <>
    <li>
      <NavLink to='/home'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/products'>Products</NavLink>
    </li>
    <li>
      <NavLink to='/Contact'>Contact</NavLink>
    </li>

  </>
);
