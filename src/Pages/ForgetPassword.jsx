import React, { useContext, useRef } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const passedEmail = location.state?.email || "";
  const emailRef = useRef();

 useEffect(() => {
    if (location.state?.email) {
      emailRef.current.value = location.state.email;
    }
  }, [location.state]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Check your email to reset password ✅");
        window.location.href = "https://mail.google.com/mail/u/0/#inbox";
      })
      .catch((error) => {
        toast.error(error.message);
      });
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
          Reset Password
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-black text-sm mb-1">Email</label>
            <input
              type="email"
              ref={emailRef}
              defaultValue={passedEmail}
              placeholder="Enter your email"
              className="w-full text-yellow-600 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>
          <button
          onClick={handleResetPassword}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
