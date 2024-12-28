import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleLogin = async (e) => {
    
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Logging in with:', { email, password });
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-200  border rounded shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">LOGIN</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-600">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-600">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter password"
          />
        </div>

        {/* Updated Login Button */}
        <button
          type="submit"
          className={`bg-blue-600 text-white px-4 py-2 rounded w-full ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600'
          }`}
          disabled={loading} // Disable button when loading
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="flex justify-between items-center mt-4">
        <div>
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm text-gray-600">
            Remember Me
          </label>
        </div>
        <a href="/forgot-password" className="text-blue-500 hover:underline text-sm">
          Forgot Password?
        </a>
      </div>

      <div className="mt-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition w-full mb-2">
          Login with Google
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-gray-600 transition w-full">
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
