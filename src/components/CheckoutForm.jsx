import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const handleStripeSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setPaymentError(error.message);
      setIsProcessing(false);
      return;
    }

    // Here you would typically send paymentMethod.id to your server
    console.log("Success:", paymentMethod);
    setIsProcessing(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {/* Payment Method Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
        <div className="space-y-2">
          <button
            className={`w-full p-3 border rounded-lg ${
              paymentMethod === "card"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
            onClick={() => setPaymentMethod("card")}>
            Credit/Debit Card
          </button>
          <button
            className={`w-full p-3 border rounded-lg ${
              paymentMethod === "paypal"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
            onClick={() => setPaymentMethod("paypal")}>
            PayPal
          </button>
        </div>
      </div>

      {/* Card Payment Form */}
      {paymentMethod === "card" && (
        <form onSubmit={handleStripeSubmit}>
          <div className="mb-4">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          {paymentError && (
            <div className="text-red-500 mb-4">{paymentError}</div>
          )}
          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50">
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>
        </form>
      )}

      {/* PayPal Button */}
      {paymentMethod === "paypal" && (
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalAmount,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              console.log("PayPal Transaction completed:", details);
            });
          }}
        />
      )}
    </div>
  );
};

export default CheckoutForm;
