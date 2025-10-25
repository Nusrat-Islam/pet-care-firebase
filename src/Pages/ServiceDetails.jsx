import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { id } = useParams();

  const [service, setService] = useState({});
  const [booking, setBooking] = useState({
    name:" ",
    email:" ",
  })

  useEffect(() => {

      const filteredData = serviceDetails.find(
        (singleService) => singleService.serviceId == id
      );
      setService(filteredData);

  }, [serviceDetails, id]);
  console.log(serviceDetails, service)

//for form
const handleInput = (e) =>{
    const {name, value} = e.target;
    setBooking(prev => ({ ...prev, [name]: value }));
};

const handleBooking = (e) => {
  e.preventDefault();
  console.log("Booking Data:", { ...booking, service: service.serviceName });
  toast.success(`Thank you ${booking.name}! Your booking for "${service.serviceName}" is received.`);
  setBooking({ name: "", email: "" });
};


  return (
    <div className="md:flex gap-15 justify-center items-start min-h-screen bg-gray-900 text-white px-4 py-5 ">
      <div className="max-w-lg  bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        {/* Service Info */}
        <figure className="  h-80 md:h-[520px] lg:h-[400px] w-full overflow-hidden object-cover ">
            <img
          src={service.image}
          alt={service.serviceName}
          className=" w-full h-full"
        />
        </figure>
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-bold text-amber-400">
            {service.serviceName}
          </h2>
          <p className="text-gray-300">{service.description}</p>

          <div className="mt-3">
            <p>
              <span className="font-semibold text-white">Provider:</span>{" "}
              {service.providerName}
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              {service.providerEmail}
            </p>
          </div>

          <div className="flex justify-between mt-4 text-sm">
            <p>
              <span className="font-semibold text-amber-400">Price:</span> $
              {service.price}
            </p>
            <p>
              <span className="font-semibold text-amber-400">Rating:</span> ⭐{" "}
              {service.rating}
            </p>
            <p>
              <span className="font-semibold text-amber-400">Slots:</span>{" "}
              {service.slotsAvailable}
            </p>
          </div>

          <p className="text-sm text-gray-400 italic mt-2">
            Category: {service.category}
          </p>

          {/* Booking Form (no functionality) */}
         
        </div>
      </div>

      <div className="flex justify-center itmes-center py-25">
         <form onSubmit={handleBooking} className="mt-6 bg-gray-700 p-4 rounded-lg space-y-3 ">
            <h3 className="text-lg font-semibold text-amber-400">
              Book Service
            </h3>
            <label className="label">Your Name</label>
            <input
            onChange={handleInput}
              type="text"
              name="name"
              value={booking.name}
              placeholder=""
              className="w-full px-3 py-2 rounded-lg text-white bg-gray-800 border border-gray-600 focus:outline-none focus:border-amber-400"
              required
            />
             
             <label className="label">Your Email</label>
            <input
             onChange={handleInput}
              type="text"
              name="email"
              value={booking.email}
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-amber-400"
              required
            />
       

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 transition-all py-2 rounded-lg font-semibold"
            >
              Book Now
            </button>
          </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
