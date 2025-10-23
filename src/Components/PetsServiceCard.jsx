import React, { useEffect } from "react";
import { Link } from "react-router";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const PetsServiceCard = ({ service }) => {
  const { serviceId, serviceName, price, rating, image } = service;

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="card bg-base-100 shadow-lg hover:shadow-2xl  transition-all duration-300 border border-gray-100 rounded-2xl "
    >
<figure className=" h-80 md:h-[520px] lg:h-[520px] w-full overflow-hidden object-cover rounded-t-2xl">
  <img
    src={image}
    alt={serviceName}
    className=" h-full w-full transition-transform duration-300 hover:scale-105"
  />
</figure>


      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold text-gray-800 mb-2">
          {serviceName}
        </h2>

        {/* Rating and Price Row */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={18} fill="currentColor" />
            <span className="text-xl">{rating}</span>
          </div>
        <div>  <p className="font-medium text-blue-600 text-xl">${price}</p></div>
        </div>

        {/* View Details Button */}
        <div className="card-actions justify-center mt-3">
          <Link className="flex justify-center items-center "to={`/services/${serviceId}`}>
             <button className=" rounded-xl py-4 px-8 rounded-xm text-white font-semibold  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-all duration-300">
              View Details
            </button>
          
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetsServiceCard;

