import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-10 px-6 bg-gradient-to-r  from-purple-500 via-blue-600 to-pink-500 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>Email: support@pawsy.com</p>
          <p>Phone: +880 123 456 789</p>
          <p>Address: 123 Pawsy Street, Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-white text-lg">
            <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-200"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Privacy Policy */}
        <div>
          <h2 className="text-xl font-bold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} PAWSY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
