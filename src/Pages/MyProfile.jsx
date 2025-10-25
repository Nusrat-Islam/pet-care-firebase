import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="min-h-screen flex  mt-8 items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full text-center">
        {/* User Image */}
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="User Profile"
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-pink-400 mb-4"
        />

        {/* User Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {user?.displayName || "No Name"}
        </h2>

        {/* User Email */}
        <p className="text-gray-600 mb-4">{user?.email || "No Email"}</p>

        {/* Update Profile Button */}
        <Link to='/update-profile'
          className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300"
          // onClick={() => alert("Update Profile feature coming soon!")}
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
