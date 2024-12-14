import PropTypes from "prop-types";

const HomeSection = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

HomeSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Trap Nurrd</h1>
        <p className="text-xl mb-8">
          Custom T-Shirts & Professional Studio Space
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/t-shirts"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Design T-Shirt
          </a>
          <a
            href="/studio"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Book Studio
          </a>
        </div>
      </div>

      <HomeSection
        title="Custom T-Shirts"
        description="Create your unique design or choose from our collection"
      />

      <HomeSection
        title="Studio Booking"
        description="Professional recording space for your next project"
      />
    </div>
  );
};

export default Home;
