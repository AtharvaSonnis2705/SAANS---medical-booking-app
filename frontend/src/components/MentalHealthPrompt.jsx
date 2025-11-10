// src/components/MentalHealthPrompt.jsx
import React from 'react';
import { assets } from '../assets/assets';

const MentalHealthPrompt = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-10 my-10 bg-gradient-to-br from-[#39A9C3] to-white rounded-lg shadow-xl max-w-5xl mx-auto gap-8">
      
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        {}
        <img 
          src={assets.calmperson} 
          alt="Person meditating or in a calm state" 
          className="rounded-lg  w-full max-w-md object-cover"
        />
      </div>

      {/* Text Content Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white  mb-4 leading-tight">
          A Breath of Fresh Air for Your Thoughts
        </h2>
        <p className="text-lg text-blue-900 mb-6 leading-relaxed">
          In moments of stress, anxiety, or simply when you need a listening ear, our compassionate AI chatbot is here to support you. Explore a safe, private space designed to help you navigate your thoughts and feelings.
        </p>
        <a 
          href="http://localhost:5000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full 
                     bg-gradient-to-r from-blue-400 to-blue-400 
                     text-white text-lg font-semibold 
                     shadow-lg hover:shadow-xl 
                     transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          Talk to Our Mental Health Bot
        </a>
      </div>
    </div>
  );
};

export default MentalHealthPrompt;