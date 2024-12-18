import PropTypes from "prop-types";
import SpotifyBanner from "./SpotifyBanner";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import logoImage from "/src/assets/logo.png";

const Navigation = () => {
  const { cart } = useCart();
  return (
    <nav className="bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logoImage}
                alt="Poor Man's Republic"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/t-shirts" className="text-white hover:text-gray-300">
              Custom T-Shirts
            </Link>
            <Link to="/studio" className="text-white hover:text-gray-300">
              Studio Booking
            </Link>
            <Link to="/cart" className="text-white hover:text-gray-300">
              Cart ({cart.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
