import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { X } from 'lucide-react';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/sign_in/`,
        formData
      );

      localStorage.setItem('patientId', response.data.id);

      toast.success('Login successful!');
      navigate('/bookings');
    } catch (error) {
      toast.error('Login failed! Please check your credentials.');
    }
  };

  return (
    <div id='signin' className="flex justify-center items-center h-screen bg-blue-50 px-4">
      <div className="relative bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={() => navigate('/home')}
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          <span>Don't have an account? </span>
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
