const Home = () => {
    return (
      <div className="relative h-screen">
        {/* Hero Section */}
        <div
          className="relative lg:w-1/2 h-full bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('https://luxecars.co.in/wp-content/uploads/2023/03/DSC06925-scaled.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Your Journey Begins Here
            </h1>
            <p className="text-lg lg:text-xl mb-6">
              Fast, safe, and reliable rides at your fingertips.
            </p>
            <a
              href="/booking"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Book a Ride
            </a>
          </div>
        </div>
  
        <div className="lg:w-1/2 h-50 flex flex-col justify-center px-8 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-center">Book a Ride</h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Pickup Location"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Destination"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white w-40 px-4 py-2 rounded hover:bg-blue-600 transition">
              Book Now
            </button>
          </div>
        </div>
  
        {/*Testimonials Section */}
        <div className="mt-8 text-center">
    <h2 className="text-3xl font-bold mb-4">What Our Riders Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 bg-gray-100 rounded shadow">
        <p>"Great experience! The drivers are professional and always on time."</p>
        <span className="block mt-2 font-semibold">- Jane Doe</span>
      </div>
      <div className="p-4 bg-gray-100 rounded shadow">
        <p>"Affordable and comfortable rides. Highly recommended!"</p>
        <span className="block mt-2 font-semibold">- John Smith</span>
      </div>
      <div className="p-4 bg-gray-100 rounded shadow">
        <p>"Easy to book and reliable service. I love it!"</p>
        <span className="block mt-2 font-semibold">- Emily Clark</span>
      </div>
    </div>
  </div>
  
      </div>
    );
  };
  
  export default Home;
  