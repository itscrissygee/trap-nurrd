import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty</div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>
          ))}

          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <div className="flex justify-between items-center font-bold">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-4 bg-black text-white p-3 rounded hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
