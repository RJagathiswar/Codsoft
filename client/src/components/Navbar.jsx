
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav style={{ background:"#2e7d32", padding:10, color:"white" }}>
      <Link to="/" style={{ color:"white" }}>EVERGREEN</Link> | 
      <Link to="/cart" style={{ color:"white" }}>Cart</Link> | 
      <Link to="/login" style={{ color:"white" }}>Login</Link> | 
      <Link to="/register" style={{ color:"white" }}>Register</Link>
    </nav>
  );
}
