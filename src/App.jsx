import Layout from "/src/components/Layout";
import StudioBooking from "/src/components/StudioBooking";
import TShirtDesign from "/src/components/TShirtDesign";
import Cart from "/src/components/Cart";
import { CartProvider } from "/src/components/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/components/Home";
import Checkout from "/src/components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/t-shirts" element={<TShirtDesign />} />
            <Route path="/studio" element={<StudioBooking />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
