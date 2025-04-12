import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Teaser from './pages/Teaser';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Booking from './pages/Booking'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Doctors from './components/Doctors';
import Bookings from './components/Booking';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Teaser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/bookings" element={<Bookings/>} />


      </Routes>
    </Router>
    <ToastContainer position="top-right" autoClose={3000} />

  </React.StrictMode>
);
