import { useState , } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teaser from './pages/Teaser'
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';


function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Teaser />} />
        <Route path='/home' element={<Home/>} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
      </Routes>
    </Router>

     
    </>
  )
}

export default App
