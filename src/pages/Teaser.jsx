import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";


function Teaser() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900">
      <h1 className="text-6xl font-bold tracking-wide mb-6 animate-pulse">Tiberbu </h1>
      <h1 className='text-6xl font-bold tracking-wide mb-6 animate-pulse'><FaUserDoctor /> </h1>
    </div>
  );
}

export default Teaser;
