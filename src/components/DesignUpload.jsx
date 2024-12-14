import PropTypes from "prop-types";

const DesignUpload = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded p-8 text-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="design-upload"
      />
      <label
        htmlFor="design-upload"
        className="bg-black text-white px-6 py-3 rounded cursor-pointer hover:bg-gray-800">
        Select Design File
      </label>
      <p className="mt-4 text-gray-500">Supported formats: PNG, JPG, SVG</p>
    </div>
  );
};

DesignUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
};

export default DesignUpload;
