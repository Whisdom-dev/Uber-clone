import React, { useState } from "react";
import RideHistory from "./RideHistory"; // Import RideHistory component

const RideHistoryToggle = () => {
  const [showHistory, setShowHistory] = useState(true);

  return (
    <div className="p-4">
      {/* Toggle Button */}
      <button
        onClick={() => setShowHistory(!showHistory)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        {showHistory ? "Hide History" : "Show Ride History"}
      </button>

      {/* Conditional Rendering */}
      {showHistory ? (
        <RideHistory />
      ) : (
        <p className="text-gray-700">No ride history to show</p>
      )}
    </div>
  );
};

export default RideHistoryToggle;
