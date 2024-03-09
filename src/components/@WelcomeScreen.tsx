import React from "react";

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-md shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-green-600">
          Movement For Creative Society
        </h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Enter your email address to get started
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@yourcompany.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full mb-4">
          Continue with Email
        </button>
        <p className="text-center mb-4">OR</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-red-600 rounded-md w-full mb-4">
          Continue with Google
        </button>
        <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md w-full mb-6">
          Continue with Apple
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
