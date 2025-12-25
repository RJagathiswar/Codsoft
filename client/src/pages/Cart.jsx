
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) return <h3>Your cart is empty</h3>;

  return (
    <div style={{ padding:20 }}>
      <h3>Your Cart</h3>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <br />
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}
