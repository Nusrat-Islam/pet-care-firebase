import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ExpertVets = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Camerron",
      specialization: "Veterinary Surgeon",
      image: "https://i.ibb.co.com/d0XcnVzH/Veterinarian-I-want-to-be-a-vet-who-rescues-and-cares-for-animals.jpg",
      bio: "10+ years experience in small animal surgery and wellness.",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        whatsapp: "https://wa.me/880123456789"
      },
      price: 50
    },
    {
      id: 2,
      name: "Dr. James Lee",
      specialization: "Animal Nutritionist",
      image: "https://i.ibb.co.com/VYQ72qXr/Smiling-Vet-Doctor-With-Pet-Woman-Vet-Doctor-PNG-Transparent-Image-and-Clipart-for-Free-Download.jpg",
      bio: "Specializes in balanced diets and dietary plans for pets.",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        whatsapp: "https://wa.me/880123456780"
      },
      price: 40
    },
    {
      id: 3,
      name: "Dr. Ayesha Rahman",
      specialization: "Behavioral Expert",
      image: "https://i.ibb.co.com/6RPkNr6V/download-9.jpg",
      bio: "Helps pets with anxiety, aggression, and behavioral issues.",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        whatsapp: "https://wa.me/880123456781"
      },
      price: 45
    },
    {
      id: 4,
      name: "Dr. Michael Smith",
      specialization: "Grooming & Wellness",
      image: "https://i.ibb.co.com/nqT8M1XJ/Positive-emotions-at-work-Cheerful-middle-aged-male-vet-in-work-uniform-stroking-a-cute-dog-and-smil.jpg",
      bio: "Focus on overall pet hygiene and wellness during seasonal changes.",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        whatsapp: "https://wa.me/880123456782"
      },
      price: 35
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-100 hover:opecity-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Expert Vets</h2>
        <p className="text-gray-600 text-lg">
          Our team of experienced veterinarians is dedicated to keeping your pets healthy and happy.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {vets.map(vet => (
          <div key={vet.id} className="bg-white rounded-xl shadow p-6 text-center hover:-translate-y-5 transition-transform duration-400 flex flex-col justify-between">
            <div>
              <img 
                src={vet.image}
                alt={vet.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{vet.name}</h3>
              <p className="text-blue-600 font-medium">{vet.specialization}</p>
              <p className="text-gray-600 mt-2">{vet.bio}</p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4 text-gray-600 text-lg">
              <a href={vet.social.facebook} target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href={vet.social.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href={vet.social.twitter} target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href={vet.social.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Consultation (${vet.price})
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertVets;
