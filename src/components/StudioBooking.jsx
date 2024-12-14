import { useState } from "react";
import BookingSummary from "/src/components/BookingSummary";
import { useCart } from "./CartContext";

const StudioBooking = () => {
  const { addToCart } = useCart();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    duration: "1",
    studioType: "recording",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate price based on studio type and duration
    const baseRate = {
      recording: 100,
      production: 80,
      mixing: 90,
    };

    const bookingItem = {
      id: Date.now(), // Simple unique ID
      name: `${
        formData.studioType.charAt(0).toUpperCase() +
        formData.studioType.slice(1)
      } Studio - ${formData.date} ${formData.time}`,
      price: baseRate[formData.studioType] * parseInt(formData.duration),
      ...formData,
    };

    addToCart(bookingItem);
    alert("Booking added to cart!");

    // Reset form
    setFormData({
      date: "",
      time: "",
      duration: "1",
      studioType: "recording",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Book Studio Time</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow">
          {/* Rest of your form code stays the same */}
          <div>
            <label className="block mb-2 font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required>
              <option value="">Select a time</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Duration (hours)</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required>
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
              <option value="8">8 hours (Full Day)</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Studio Type</label>
            <select
              name="studioType"
              value={formData.studioType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required>
              <option value="recording">Recording Studio</option>
              <option value="production">Production Room</option>
              <option value="mixing">Mixing Studio</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </form>

        {/* Summary Section */}
        <div>
          <BookingSummary booking={formData} />
        </div>
      </div>
    </div>
  );
};

export default StudioBooking;
