import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Signup</h1>
        <form>
          <label className="block mb-4">
            <span className="text-gray-700">Name</span>
            <input type="text" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Your Name" />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input type="email" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="you@example.com" />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Password</span>
            <input type="password" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="********" />
          </label>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
