import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-4">Something went wrong or the page you are looking for doesn't exist.</p>
        <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
      </div>
    </div>
  );
};

export default ErrorPage;
