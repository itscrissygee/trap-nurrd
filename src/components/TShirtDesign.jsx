import { useState } from "react";
import PropTypes from "prop-types";
import DesignUpload from "/src/components/DesignUpload";
import TShirtPreview from "/src/components/TShirtPreview";

const SHIRT_TEMPLATES = [
  {
    id: 1,
    name: "LA VIDA ES HERMOSA",
    price: 22.0,
    image: "/src/assets/shirt1.png", // You'll need to add these images to your assets folder
  },
  {
    id: 2,
    name: "EL LADO BUENO",
    price: 22.0,
    image: "/src/assets/shirt2.png",
  },
  {
    id: 3,
    name: "NECESITO CAFÉ",
    price: 22.0,
    image: "/src/assets/shirt3.png",
  },
  {
    id: 4,
    name: "FLORCITAS",
    price: 22.0,
    image: "/src/assets/shirt4.png",
  },
];

const PromoText = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h1 className="text-4xl font-bold text-red-500 mb-6">MERCH - SHIRTS</h1>
      <p className="text-xl leading-relaxed text-red-500">
        Tune in and toke up with tees that bring the 🔥. We've linked up with
        dope artists across the globe to drop designs inspired by the sweet
        sounds of music and the chill vibes of cannabis culture. ✌️ Each shirt
        is a statement piece, a conversation starter, a reflection of your own
        unique rhythm. Ditch the basic brands and rock threads that resonate
        with your soul. 🎶 Elevate your style and let your true self shine. ✨
      </p>
    </div>
  );
};

const ShirtTemplate = ({ template, onSelect }) => {
  return (
    <div className="bg-black p-4 rounded-lg">
      <img
        src={template.image}
        alt={template.name}
        className="w-full h-auto bg-white mb-4"
      />
      <div className="flex justify-between items-center">
        <h3 className="text-white text-xl font-bold">{template.name}</h3>
        <p className="text-red-500">${template.price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => onSelect(template)}
        className="w-full mt-4 bg-white text-black py-2 rounded hover:bg-gray-200 transition-colors">
        Select Design
      </button>
    </div>
  );
};

ShirtTemplate.propTypes = {
  template: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

const TShirtDesign = () => {
  const [activeSection, setActiveSection] = useState("gallery");

  const handleTemplateSelect = (template) => {
    console.log("Selected template:", template);
    // Add functionality to handle template selection
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <PromoText />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SHIRT_TEMPLATES.map((template) => (
          <ShirtTemplate
            key={template.id}
            template={template}
            onSelect={handleTemplateSelect}
          />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Create Your Own Design
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded">
            <TShirtPreview />
          </div>

          <div>
            <DesignUpload
              onUpload={(file) => console.log("Uploaded file:", file)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtDesign;
