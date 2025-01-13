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
    const baseRate = 2.0; // Base rate
    const ratePerKm = 1.5; // Rate per km
    const calculatedFare = baseRate + ratePerKm * parseFloat(distance || 0);
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
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('https://luxecars.co.in/wp-content/uploads/2023/03/DSC06925-scaled.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center px-4"
        >
          Welcome to Uber Clone!
        </motion.h1>
        <p className="relative z-10 text-lg sm:text-xl lg:text-2xl text-white mt-2 text-center px-4">
          Fast, safe, and reliable rides at your fingertips.
        </p>

        <a
              href="/booking"
              className="relative z-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg transition-transform transform hover:scale-105 mt-6"
            >
              Book a Ride
            </a>
            <br></br>

        <p className="relative z-10 text-2xl sm:text-3xl font-bold text-white mt-8 text-center px-4">
            Your Jouney begins here!
            </p>   

        <p className="relative z-10 text-base sm:text-lg lg:text-xl text-white mt-2 text-center px-6">
        Register here with Uber Clone and book a ride with us today
        </p>

             <a
              href="/login"
              className="relative z-10 bg-blue-400 hover:bg-blue-500 text-white font-semibold px-5 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg transition-transform transform hover:scale-105 mt-4"
            >
              Sign in
            </a> 
      </div>

      {/* Ride Fare Estimator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="p-6 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Estimate Your Ride Fare</h2>
        <input
          type="number"
          placeholder="Enter distance in km"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="w-full md:w-1/2 p-2 border rounded mb-4"
        />
        <button
          onClick={calculateFare}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Calculate Fare
        </button>
        {fare > 0 && (
          <p className="mt-4 text-lg">
            Estimated Fare: <strong>${fare}</strong>
          </p>
        )}
      </motion.div>

      {/* Current Weather */}
      {weather && (
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold">Current Weather</h3>
          <p>
            {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
          </p>
        </div>
      )}

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-8 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-6">What Our Riders Say</h2>
        <Slider {...settings}>
          <div className="p-6 bg-gray-200 text-black rounded shadow">
            <p>"Great service! Highly recommended!"</p>
            <span className="block mt-2 font-semibold">- Jane Doe</span>
          </div>
          <div className="p-6 bg-gray-200 text-black rounded shadow">
            <p>"The drivers are punctual and friendly!"</p>
            <span className="block mt-2 font-semibold">- John Smith</span>
          </div>
          <div className="p-6 bg-gray-200 text-black rounded shadow">
            <p>"Affordable and reliable rides every time!"</p>
            <span className="block mt-2 font-semibold">- Emily Clark</span>
          </div>
        </Slider>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center mt-8">
        &copy; 2024 Uber Clone. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
