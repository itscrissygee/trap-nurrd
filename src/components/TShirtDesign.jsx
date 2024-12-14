import { useState } from "react";
import PropTypes from "prop-types";
import DesignUpload from "/src/components/DesignUpload";
import TShirtPreview from "/src/components/TShirtPreview";
import TemplateGallery from "/src/components/TemplateGallery";
import TextEditor from "/src/components/TextEditor";

const DesignOption = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-black text-white p-4 mb-4 rounded hover:bg-gray-800">
      {title}
    </button>
  );
};

DesignOption.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const TShirtDesign = () => {
  const [activeSection, setActiveSection] = useState("upload");

  const handleOptionClick = (option) => {
    setActiveSection(option);
  };

  const handleUpload = (file) => {
    console.log("Uploaded file:", file);
  };

  const handleTemplateSelect = (template) => {
    console.log("Selected template:", template);
  };

  const handleAddText = (textOptions) => {
    console.log("Added text:", textOptions);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "upload":
        return <DesignUpload onUpload={handleUpload} />;
      case "templates":
        return <TemplateGallery onSelect={handleTemplateSelect} />;
      case "text":
        return <TextEditor onAddText={handleAddText} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Design Your T-Shirt
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Preview Section */}
        <div className="bg-gray-100 p-8 rounded">
          <TShirtPreview />
        </div>

        {/* Design Options */}
        <div>
          <div className="mb-8">{renderActiveSection()}</div>

          <DesignOption
            title="Upload Your Design"
            onClick={() => handleOptionClick("upload")}
          />
          <DesignOption
            title="Choose From Templates"
            onClick={() => handleOptionClick("templates")}
          />
          <DesignOption
            title="Add Text"
            onClick={() => handleOptionClick("text")}
          />
        </div>
      </div>
    </div>
  );
};

export default TShirtDesign;
