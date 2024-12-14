import PropTypes from "prop-types";
import { useState } from "react";

const TextEditor = ({ onAddText }) => {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState("24");
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddText({ text, fontSize: `${fontSize}px`, color });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your text"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="w-full p-2 border rounded">
            <option value="18">Small</option>
            <option value="24">Medium</option>
            <option value="36">Large</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-1 h-10 border rounded"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">
        Add Text
      </button>
    </form>
  );
};

TextEditor.propTypes = {
  onAddText: PropTypes.func.isRequired,
};

export default TextEditor;
