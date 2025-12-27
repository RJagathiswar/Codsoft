
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div style={{ width:200, border:"1px solid #ccc", margin:10, padding:10 }}>
      <img src={product.image} alt={product.name}
        style={{ width:"100%", height:150, objectFit:"cover" }} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => navigate("/checkout")}>Buy Now</button>
    </div>
  );
}
