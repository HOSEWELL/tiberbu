import React from 'react';
import { useNavigate } from 'react-router-dom';

function Explore() {
  const navigate = useNavigate();

  return (
    <section id='explore' className="min-h-[50vh] flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-blue-400">Welcome to Tiberbu</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        Your health, our priority — book a doctor's appointment with ease and confidence.
      </p>
      <button
        onClick={() => navigate('/booking')}
        className="px-6 py-3 bg-blue-400 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300"
      >
        Book Appointment
      </button>
    </section>
  );
}

export default Explore;
