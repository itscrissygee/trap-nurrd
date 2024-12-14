import PropTypes from "prop-types";
import SpotifyBanner from "./SpotifyBanner";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">
              Trap Nurrd
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

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <p>© 2024 Trap Nurrd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SpotifyBanner />
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
