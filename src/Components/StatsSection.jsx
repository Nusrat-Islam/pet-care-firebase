import React, { useEffect } from "react";
import { Users, Heart, Award, UserCheck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const StatsSection = () => {
  const stats = [
    { id: 1, icon: <Users size={36} />, number: 5625, label: "Adopted Pets" },
    { id: 2, icon: <UserCheck size={36} />, number: 275, label: "Professionals" },
    { id: 3, icon: <Heart size={36} />, number: 3450, label: "Happy Clients" },
    { id: 4, icon: <Award size={36} />, number: 85, label: "Win Awards" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // animate every scroll
    });
  }, []);

  return (
    <section
      className="relative w-full min-h-[500px] py-30 mt-13 mb-15"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/fVV4ZGTL/EMF-Defense-Pet-Pendant.jpg')", // replace with your BG
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

      {/* Cards container */}
      <div className="relative w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            data-aos="fade-up"
            data-aos-delay={index * 200} // staggered animation
            className="flex flex-col items-center justify-center bg-pink-300 bg-opacity-80 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 z-10"
          >
            <div className="mb-4 text-white">{stat.icon}</div>
            <h2 className="text-3xl font-bold text-white">
              {stat.number.toLocaleString()}
            </h2>
            <p className="mt-2 text-lg font-medium text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;




