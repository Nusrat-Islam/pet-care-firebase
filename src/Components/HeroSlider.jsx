import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import pet2 from "../assets/bg-2.jpg";
import pet1 from "../assets/bg-1.jpg";

import pet3 from "../assets/bg-6.jpg";
import pet4 from "../assets/bg-7.jpg";

const HeroSlider = () => {
  const slides = [ pet2,pet1, pet3,pet4];

  return (
    <div className="relative w-full h-screen ">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((bg, index) => (
          <SwiperSlide key={index}>
  <div className="relative w-full h-screen">
    <img
      src={bg}
      alt="pet slide"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center  text-white text-6xl font-bold animate__animated animate__backInLeft">
    
      <h4 className="text-4xl text-pink-500 font-bold mx-w-md">Cozy Companions for Winter 🐾</h4>
      <p>The World's Best Team for Pet Care Services</p> 
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
