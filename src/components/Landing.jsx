import React from 'react';

function Landing() {
  return (
    <section id='landing' className="bg-gradient-to-br from-blue-50 to-blue-200 py-14 pt-[8em]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-5 justify-between">

        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-15">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-[2em]">
            Tiberbu Helps Patients Book Appointments with Doctors
          </h1>
          <p className="text-lg text-gray-700 mb-15">
            Tiberbu is a platform designed to help patients easily book appointments with doctors based on their availability. Whether you need a routine check-up or specialized care, Tiberbu connects you with the right doctor at the right time.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/prof.png" 
            alt="Doctor Appointment" 
            className="w-full h-[500px] max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
