import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [distance, setDistance] = useState("");
  const [fare, setFare] = useState(0);
  const [vehicleType, setVehicleType] = useState("Economy");

  // Get User Location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = `Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`;
        setLocation(coords);

        // Fetch weather based on user's coordinates
        fetchWeather(pos.coords.latitude, pos.coords.longitude);
      },
      (error) => {
        console.error("Error fetching location:", error);
        setLocation("Location access denied or unavailable");
      }
    );
  }, []);

  // Fetch Weather Info
  const fetchWeather = async (lat, lon) => {
    try {
      const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API Key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Calculate Fare
  const calculateFare = () => {
    const baseRates = {
      Economy: 2.0,
      Premium: 3.5,
      SUV: 5.0,
    };
    const ratePerKm = {
      Economy: 1.5,
      Premium: 2.5,
      SUV: 3.0,
    };
    const calculatedFare =
      baseRates[vehicleType] + ratePerKm[vehicleType] * parseFloat(distance || 0);
    setFare(calculatedFare.toFixed(2));
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Settings for Testimonials Carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen font-sans`}
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Hero Section */}
      <div
        className="hero relative h-96 bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage:
            "url('https://luxecars.co.in/wp-content/uploads/2023/03/DSC06925-scaled.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl sm:text-5xl font-bold text-white px-4"
        >
          Welcome to Uber Clone!
        </motion.h1>
        <p className="relative z-10 text-lg sm:text-xl text-white mt-4 px-4">
          Fast, safe, and reliable rides at your fingertips.
        </p>
        <motion.a
          href="#fare-estimator"
          className="relative z-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Book a Ride
        </motion.a>
      </div>

      {/* Ride Fare Estimator */}
      <div id="fare-estimator" className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Estimate Your Ride Fare</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <input
            type="number"
            placeholder="Enter distance in km"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="col-span-2 p-3 border rounded"
          />
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="p-3 border rounded"
          >
            <option value="Economy">Economy</option>
            <option value="Premium">Premium</option>
            <option value="SUV">SUV</option>
          </select>
        </div>
        <button
          onClick={calculateFare}
          className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition"
        >
          Calculate Fare
        </button>
        {fare > 0 && (
          <p className="mt-4 text-lg font-semibold">
            Estimated Fare: <span className="text-green-500">${fare}</span>
          </p>
        )}
      </div>

      {/* Current Weather */}
      {weather && (
        <div className="p-6 bg-white rounded shadow-md mx-auto max-w-xl mt-8">
          <h3 className="text-xl font-bold mb-2">Current Weather</h3>
          <p className="mb-1">
            <strong>Location:</strong> {weather.name}
          </p>
          <p className="mb-1">
            <strong>Temperature:</strong> {weather.main.temp}°C
          </p>
          <p className="mb-1">
            <strong>Description:</strong> {weather.weather[0].description}
          </p>
          <p className="mb-1">
            <strong>Wind Speed:</strong> {weather.wind.speed} m/s
          </p>
          <p className="mb-1">
            <strong>Humidity:</strong> {weather.main.humidity}%
          </p>
        </div>
      )}

      {/* Testimonials Section */}
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          What Our Riders Say
        </h2>
        <Slider {...settings}>
          <div className="p-6 bg-blue-100 rounded shadow text-center">
            <p>"Amazing service! Highly recommended."</p>
            <span className="block mt-2 font-semibold">- Jane Doe</span>
          </div>
          <div className="p-6 bg-blue-100 rounded shadow text-center">
            <p>"Drivers are punctual and friendly!"</p>
            <span className="block mt-2 font-semibold">- John Smith</span>
          </div>
          <div className="p-6 bg-blue-100 rounded shadow text-center">
            <p>"Affordable rides with excellent service."</p>
            <span className="block mt-2 font-semibold">- Emily Clark</span>
          </div>
        </Slider>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center mt-8">
        &copy; 2024 Uber Clone. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
