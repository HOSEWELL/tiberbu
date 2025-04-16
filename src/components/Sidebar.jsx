import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserMd, FaUsers, FaTimes, FaCalendarAlt } from 'react-icons/fa';

function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed md:relative top-0 left-0 h-full w-64 bg-blue-100 border-r border-blue-200 text-gray-800 shadow-md transform transition-transform duration-300 z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      <div className="p-4 flex items-center justify-between md:block">
        <h2
          className="text-xl font-bold cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => navigate('/home')}
        >
          Admin Panel
        </h2>
        <button
          className="md:hidden text-xl text-blue-700"
          onClick={toggleSidebar}
        >
          <FaTimes />
        </button>
      </div>

      <nav className="flex flex-col px-4">
        <NavLink
          to="/admin/dashboard/doctors"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive
                ? 'bg-blue-200 text-blue-800 font-semibold shadow-sm'
                : 'hover:bg-blue-50'
            }`
          }
          onClick={toggleSidebar}
        >
          <FaUserMd className="text-blue-600" /> Doctors
        </NavLink>

        <NavLink
          to="/admin/dashboard/patients"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 mt-2 rounded-lg transition-all duration-200 ${
              isActive
                ? 'bg-blue-200 text-blue-800 font-semibold shadow-sm'
                : 'hover:bg-blue-50'
            }`
          }
          onClick={toggleSidebar}
        >
          <FaUsers className="text-blue-600" /> Patients
        </NavLink>

        <NavLink
          to="/admin/dashboard/schedules"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 mt-2 rounded-lg transition-all duration-200 ${
              isActive
                ? 'bg-blue-200 text-blue-800 font-semibold shadow-sm'
                : 'hover:bg-blue-50'
            }`
          }
          onClick={toggleSidebar}
        >
          <FaCalendarAlt className="text-blue-600" /> Schedules
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
