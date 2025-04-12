// src/pages/AdminDashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Doctors from '../components/Doctors';
import Patients from '../components/Patients';
import Schedules from '../components/Schedules';

import { FaHospitalAlt, FaBars } from 'react-icons/fa';

function WelcomeCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <FaHospitalAlt className="text-blue-400 text-6xl mb-4 animate-pulse" />
      <h1 className="text-3xl font-semibold text-blue-700 mb-2">Welcome, Admin 👩‍⚕️</h1>
      <p className="text-gray-600 max-w-md">
        “To know even one life has breathed easier because you have lived — that is to have succeeded.”
      </p>
      <p className="mt-4 text-sm text-gray-500">Navigate using the sidebar to manage Doctors and Patients.</p>
    </div>
  );
}

function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Mobile Nav Toggle */}
        <div className="md:hidden p-4">
          <button
            onClick={toggleSidebar}
            className="text-blue-700 text-2xl focus:outline-none"
          >
            <FaBars />
          </button>
        </div>

        <main className="flex-1 px-6 pb-6">
          <Routes>
            <Route index element={<WelcomeCard />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="patients" element={<Patients />} />
            <Route path="schedules" element={<Schedules/>} />
            <Route path="*" element={<Navigate to="/admin/dashboard" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
