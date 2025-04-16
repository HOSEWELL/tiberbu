import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { X } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    password: '',
    insurance_provider: '',
    insurance_number: ''
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

    for (const key in formData) {
      if (formData[key].trim() === '') {
        toast.error(`Please fill in the ${key.replace('_', ' ')} field`);
        return;
      }
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/patients/`,
        formData
      );

      toast.success('Registration successful!');
      navigate('/signin');
    } catch (error) {
      toast.error('Registration failed! Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 px-4">
      <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={() => navigate('/home')}
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Create Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
            />
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
            />
          </div>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <div className="flex space-x-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
            />
          </div>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />

          <input
            type="text"
            name="insurance_provider"
            value={formData.insurance_provider}
            onChange={handleChange}
            placeholder="Insurance Provider"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />

          <input
            type="text"
            name="insurance_number"
            value={formData.insurance_number}
            onChange={handleChange}
            placeholder="Insurance Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6">
          <span>Already have an account? </span>
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
