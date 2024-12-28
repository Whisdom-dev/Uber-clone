import React from 'react';

const MapComponent = ({ pickup, destination }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md p-4 mt-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Map View</h3>
      <div
        className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center"
        style={{ maxWidth: '600px' }}
      >
        {/* Placeholder for Map */}
        <p className="text-gray-600 text-center">
          Map placeholder for trip <br />
          <span className="font-bold">From:</span> {pickup || 'Pickup location'} <br />
          <span className="font-bold">To:</span> {destination || 'Destination'}
        </p>
      </div>
    </div>
  );
};

export default MapComponent;
