import React, { use } from "react";
import logo from "../assets/pawsyLogo.jpeg"; // Update the path if needed
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const {user,logOut} = use(AuthContext)

  const handleLogout = () =>{
    
    logOut()
    .then(() => {
     toast.success("log out successfully")
    })
    .catch((error) => {
  alert(error)
});
  }
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Logo + Brand Name */}
      <div className="flex items-center gap-2">

          <img src={logo} alt="PAWSY Logo" className="h-15 w-15 rounded-full" />
      
        <span className="text-4xl font-bold text-blue-900">P<span className="text-pink-700">A</span>W<span className="text-pink-700">S</span>Y</span>
      </div>
      <div>
        {user && user?.email}
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-xl">
        <li className="hover:text-blue-600 hover:underline cursor-pointer">Home</li>
        <li className="hover:text-blue-600 hover:underline cursor-pointer">Services</li>
        <li className="hover:text-blue-600 hover:underline cursor-pointer">My Profile</li>
      </ul>

      {/* Right: Login + Avatar */}
      <div className="flex items-center gap-4">
        {
          user? (<button onClick={handleLogout} className="bg-gray-600 text-white btn px-8 py-3  rounded-lg hover:bg-blue-900 transition text-xl">
          Logout
        </button>) : (<NavLink to='/login' className="bg-gray-600 text-white btn px-8 py-3  rounded-lg hover:bg-blue-900 transition text-xl">
          Login
        </NavLink>)
        }
        <FaUserCircle className="text-3xl text-gray-600 cursor-pointer h-15 w-15" />
      </div>
    </nav>
  );
};

export default Navbar;
