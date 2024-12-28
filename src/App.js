import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Booking from './components/Booking';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import RideHistory from './components/RideHistory';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Navbar */}
        <Navbar />

        {/* Page Container */}
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
