import React, { useContext } from "react";
import logo from "../assets/pawsyLogo.jpeg";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="navbar bg-white shadow-md px-6 py-3">
      {/* Navbar Start: Logo + Mobile Dropdown */}
      <div className="navbar-start flex items-center gap-2">
        {/* Hamburger for Mobile */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          {/* Mobile Dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 z-10 text-gray-700 font-medium text-lg"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost normal-case text-xl flex items-center gap-2 p-0">
          <img src={logo} alt="PAWSY Logo" className="h-14 w-14 rounded-full" />
          <span className="text-4xl font-bold text-blue-900">
            P<span className="text-pink-700">A</span>W<span className="text-pink-700">S</span>Y
          </span>
        </Link>
      </div>

      {/* Navbar Center: Desktop Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8 text-gray-700 font-medium text-xl">
          <li>
            <Link to="/" className="hover:text-blue-600 hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-600 hover:underline">Services</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-600 hover:underline">My Profile</Link>
          </li>
        </ul>
      </div>

      {/* Navbar End: Avatar + Email + Login/Logout (Always Visible) */}
      <div className="navbar-end flex items-center gap-4">
        {user && <span className="text-gray-700 font-medium text-lg">{user.email}</span>}

        {user ? (
          <button
            onClick={handleLogout}
            className="btn bg-gray-600 text-white hover:bg-blue-900 transition text-lg px-6 py-2"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="btn bg-gray-600 text-white hover:bg-blue-900 transition text-lg px-6 py-2"
          >
            Login
          </NavLink>
        )}

        <Link to="/profile">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="User Avatar"
              title={user.displayName || "Profile"}
              className="h-12 w-12 rounded-full border-2 border-blue-700 object-cover hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <FaUserCircle
              title={user?.displayName || "Guest"}
              className="text-4xl text-gray-600 hover:text-blue-700 transition-colors duration-200"
            />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;




