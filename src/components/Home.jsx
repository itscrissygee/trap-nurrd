import React from "react";
import heroImage from "../assets/logo.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            Welcome to Poor Man's Republic
          </h1>

          <p className="text-xl text-gray-300 text-center max-w-2xl mb-8">
            Your premier destination for custom t-shirts and studio bookings
          </p>

          <img
            src={heroImage}
            alt="Poor Man's Republic Hero"
            className="w-full max-w-sm h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
