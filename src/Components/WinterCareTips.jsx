import React from 'react';
import cats3 from "../assets/bg-5.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WinterCareTips = () => {
      useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once:false,     // only animate once while scrolling
    });
  }, []);
    return (
       <div  className=' mt-10  '>
         <h1 className='text-5xl font-bold flex justify-center text-center my-20'>Winter Care Tips for Pets</h1>
         <div className='md:flex justify-center itmes-center gap-25 '>
         
            <div>
                <img src={cats3} alt="" data-aos="fade-up-left" className='rounded-xl shadow-xl'/>
            </div>
            <div data-aos="fade-up-right" className=' flex justify-center items-center '>
               
               
                    <ol className='md:text-xl font-medium mt-10 mb-10'>
                         <h2 className='text-2xl md:text-3xl font-semibold  w-160 text-purple-600 mb-5 px-10'>Keep your furry friends safe, warm, and happy this winter with our expert tips.</h2>
  <div className="px-10">
    <li><span className='font-bold'>Keep Them Warm</span> - Provide cozy sweaters, blankets, and heated beds.</li>
  <li><span className='font-bold'>Protect Their Paws</span> - Use paw balm or booties to prevent cracking and irritation.</li>
  <li><span className='font-bold'>Hydration is Key</span> - Make sure pets always have access to fresh water.</li>
  <li><span className='font-bold'>Indoor Playtime</span> - Keep pets active indoors to maintain energy.</li>
  <li><span className='font-bold'>Regular Grooming</span> - Trim hair around paws and check for dry skin.</li>
  <li><span className='font-bold'>Avoid Overfeeding</span> - Adjust food portions if pets are less active.</li>
  <li><span className='font-bold'>Warm Bedding </span>- Place beds away from drafts and cold floors.</li>
  <li><span className='font-bold'>Keep Vaccinations Updated </span>- Protect against seasonal illnesses.</li>
  <li><span className='font-bold'>Limit Outdoor Time</span> - Short walks in extreme cold;always supervise pets.</li>
  </div>
</ol>

              
            </div>
        </div>
       </div>
    );
};

export default WinterCareTips;