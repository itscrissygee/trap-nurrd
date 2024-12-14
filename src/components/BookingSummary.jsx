import PropTypes from "prop-types";

const BookingSummary = ({ booking }) => {
  const calculateTotal = () => {
    const baseRate = {
      recording: 100,
      production: 80,
      mixing: 90,
    };

    return baseRate[booking.studioType] * parseInt(booking.duration);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Date:</span>
          <span>{booking.date}</span>
        </div>
        <div className="flex justify-between">
          <span>Time:</span>
          <span>{booking.time}</span>
        </div>
        <div className="flex justify-between">
          <span>Duration:</span>
          <span>{booking.duration} hour(s)</span>
        </div>
        <div className="flex justify-between">
          <span>Studio Type:</span>
          <span className="capitalize">{booking.studioType}</span>
        </div>
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

BookingSummary.propTypes = {
  booking: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    studioType: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookingSummary;
