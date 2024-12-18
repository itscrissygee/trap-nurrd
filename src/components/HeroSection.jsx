import PropTypes from "prop-types";
import logoImage from "../assets/logo.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <img
            src={logoImage}
            alt="Trapp Nurdd"
            className="mx-auto w-full max-w-xl h-auto object-contain"
          />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-medium italic mb-4">
            Poor Man's Republic
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            to="/t-shirts"
            className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300">
            Design T-Shirt
          </Link>
          <Link
            to="/studio"
            className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300">
            Book Studio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
