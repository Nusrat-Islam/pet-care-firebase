import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, profileUpdate, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    profileUpdate(
     name,
     photoURL,
  )
      .then(() => {
        setUser({ ...user, displayName: name, photoURL });
        toast.success("Profile updated successfully ✅");
        navigate("/profile");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update profile!");
      });
  };



  return (
    <div className="flex mt-8 flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-green-900">
          Update Profile
        </h2>

        <label className="block mb-2 text-green-700 font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 rounded border border-gray-300 focus:ring-2 text-black focus:ring-pink-400"
        />

        <label className="block mb-2 text-green-700 font-medium">Photo URL</label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="w-full p-3 mb-4 rounded border border-gray-300 focus:ring-2 text-black focus:ring-pink-400"
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;

