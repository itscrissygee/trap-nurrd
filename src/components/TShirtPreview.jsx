const TShirtPreview = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
      <div className="relative w-64 h-64">
        {/* Basic T-shirt shape using CSS */}
        <div className="absolute inset-0 bg-black">
          {/* T-shirt neck */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white"></div>
          {/* T-shirt sleeves */}
          <div className="absolute top-8 left-0 w-12 h-16 bg-black"></div>
          <div className="absolute top-8 right-0 w-12 h-16 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default TShirtPreview;
