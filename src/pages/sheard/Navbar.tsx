
import { NavLink } from "react-router-dom";

import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Navbar = () => {
  const dispatch =useAppDispatch();
  const { isLoggedIn, user } = useAppSelector((state: any) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const activeLinkStyle = "text-green-500 font-bold"; // Active link styling

  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          About Us
        </NavLink>
      </li>
      {user?.role === "ADMIN" && (
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Admin Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed bg-white-300/30 shadow-md max-w-7xl  mx-auto  backdrop-blur-sm  w-full ">
      {/* Logo and Mobile Menu */}
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost text-xl">
          BikeRental
        </NavLink>
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
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
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>

      {/* Authentication Links */}
      <div className="navbar-end">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? activeLinkStyle : "btn")}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? `${activeLinkStyle} btn-outline ml-2` : "btn btn-outline ml-2"
              }
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
