import PropTypes from "prop-types";

const TemplateGallery = ({ onSelect }) => {
  const templates = [
    { id: 1, name: "Hip Hop Classic", price: 29.99 },
    { id: 2, name: "Beat Maker", price: 29.99 },
    { id: 3, name: "Studio Life", price: 29.99 },
    { id: 4, name: "Producer", price: 29.99 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => onSelect(template)}
          className="bg-gray-100 p-4 rounded hover:bg-gray-200">
          <div className="h-32 bg-gray-300 mb-2 rounded"></div>
          <p className="font-bold">{template.name}</p>
          <p className="text-gray-600">${template.price}</p>
        </button>
      ))}
    </div>
  );
};

TemplateGallery.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default TemplateGallery;
