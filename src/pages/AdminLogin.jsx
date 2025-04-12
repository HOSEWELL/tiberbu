// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

function AdminLogin() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const adminPassword = import.meta.env.VITE_ADMIN;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === adminPassword) {
      navigate('/admin/dashboard');
    } else {
      alert('Incorrect Password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="relative bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        {/* Close Icon */}
        <button
          onClick={() => navigate('/home')}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Enter Admin Password"
            className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
