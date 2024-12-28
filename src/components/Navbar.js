import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-black font-bold p-4 shadow-md">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-blue-200 transition">Login</Link>
        </li>
        <li>
          <Link to="/booking" className="hover:text-blue-200 transition">Booking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
