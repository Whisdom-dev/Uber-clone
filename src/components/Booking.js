import React, { useState } from 'react';
import MapComponent from './MapComponent';

const Booking = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const handleBooking = () => {
    if (!pickup || !destination) {
        alert("Please enter both pickup and destination.");
        return;
      }
    console.log('Booking ride from', pickup, 'to', destination);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Book a Ride</h2>

      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Pickup Location:</span>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter pickup location"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Destination:</span>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter destination"
          />
        </label>
        <button
          onClick={handleBooking}
          className="w-full bg-blue-500 text-black p-2 rounded-lg hover:bg-gray-600 transition"
        >
          Book Now
        </button>
      </div>

      <div className="mt-6 h-96">

      <MapComponent pickup={pickup} destination={destination} />
      </div>
    </div>
  );
};

export default Booking;
