import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Layout from "./components/layout";
import Home from "./components/Home";
import CheckoutForm from "./components/CheckoutForm";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";
import StudioBooking from "./components/StudioBooking"; // Fixed this import
import TShirtDesign from "./components/TShirtDesign";

const stripePromise = loadStripe("pk_test_placeholder");

function App() {
  return (
    <Router>
      <CartProvider>
        <PayPalScriptProvider options={{ "client-id": "test" }}>
          <Elements stripe={stripePromise}>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<CheckoutForm />} />
                <Route path="/t-shirts" element={<TShirtDesign />} />
                <Route path="/studio" element={<StudioBooking />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Layout>
          </Elements>
        </PayPalScriptProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
