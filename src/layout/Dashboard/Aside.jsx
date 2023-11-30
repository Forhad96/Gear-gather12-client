import { Link, NavLink } from "react-router-dom";
import useCheckRole from "../../hooks/useCheckRole";
import { FaListAlt, FaPlus, FaProductHunt, FaUserCircle, FaUsersCog } from "react-icons/fa";
import { TbAlertHexagonOff, TbReportAnalytics } from "react-icons/tb";
import { MdOutlineDiscount } from "react-icons/md";
import Loader from "../../shared/Loader/Loader";
const Aside = () => {
  const { userInfo: user ,loading} = useCheckRole();
console.log(user.role);
// if(loading){
//   return <Loader></Loader>
// }
  return (
    <aside
      id="aside"
      className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0"
    >
      <div className="relative border-b border-white/20">
        <a className="flex items-center gap-4 py-6 px-8" href="#/">
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
            Dashboard
          </h6>
        </a>
        <button
          className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>

      <div className="m-4">
        {/* Admin Link */}

        {loading ? (
          <Loader></Loader>
        ) : (
          <div>
            {user?.role === "admin" && <>{adminLinks}</>}
            {user?.role === "user" && <>{usersLInks}</>}
            {user?.role === "moderator" && <>{moderatorLinks}</>}
          </div>
        )}

        <ul className="mb-4 flex flex-col gap-1">
          <li className="mx-3.5 mt-4 mb-2">
            <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">
              auth pages
            </p>
          </li>
          <li>
            <a className="">
              <button
                className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  sign in
                </p>
              </button>
            </a>
          </li>
          <li>
            <a className="" href="#">
              <button
                className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  sign up
                </p>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Aside;

const adminLinks = (
  <ul className="mb-4 flex flex-col gap-1">
    <li>
      <NavLink aria-current="page" className="active" href="#">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 text-inherit"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            dashboard
          </p>
        </button>
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/profile" className="" href="#">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <FaUserCircle className="h-5 w-5"></FaUserCircle>

          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            profile
          </p>
        </button>
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/allUsers" className="">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <FaUsersCog className="w-5 h-5"></FaUsersCog>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            Manage Users
          </p>
        </button>
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/coupons" className="">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <MdOutlineDiscount className="w-5 h-5"></MdOutlineDiscount>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            Coupons
          </p>
        </button>
      </NavLink>
    </li>
    <li>
      <NavLink className="" href="#">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 text-inherit"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            notifactions
          </p>
        </button>
      </NavLink>
    </li>
  </ul>
);
const moderatorLinks = (
  <ul className="mb-4 flex flex-col gap-1">
    <li>
      <NavLink aria-current="page" className="active" href="#">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-primary text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 text-inherit"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            Home
          </p>
        </button>
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/profile" className="" href="#">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <FaUserCircle className="h-5 w-5"></FaUserCircle>

          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            profile
          </p>
        </button>
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/manageProducts" className="">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <FaListAlt className="w-4 h-4"></FaListAlt>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            Manage Product
          </p>
        </button>
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/manageReports" className="">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <TbReportAnalytics className="w-5 h-5"></TbReportAnalytics>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            Reported Products
          </p>
        </button>
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/bannedProducts" className="">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <TbAlertHexagonOff className="w-5 h-5"></TbAlertHexagonOff>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            Banned Product
          </p>
        </button>
      </NavLink>
    </li>
    <li>
      <NavLink className="" href="#">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 text-inherit"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            notifactions
          </p>
        </button>
      </NavLink>
    </li>
  </ul>
);

const usersLInks = (
  <ul className="mb-4 flex flex-col gap-1">
    <li>
      <NavLink to="/dashboard/profile" className="" href="#">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
<FaUserCircle className="h-5 w-5"></FaUserCircle>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            profile
          </p>
        </button>
      </NavLink>
    </li>
    <li>
      <Link to="/dashboard/addProduct" className="">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
<FaPlus className="w-5 h-5"></FaPlus>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            Add Product
          </p>
        </button>
      </Link>
      <Link to="/dashboard/myProducts" className="">
        <button
          className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
          type="button"
        >
<FaProductHunt className="w-5 h-5"></FaProductHunt>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            My products
          </p>
        </button>
      </Link>
    </li>
  </ul>
);
