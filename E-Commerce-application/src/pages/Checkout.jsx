
import { useState } from "react";

export default function Checkout() {
  const [method, setMethod] = useState("COD");
  const [done, setDone] = useState(false);

  if (done) return <h2>✅ Order Placed Successfully (Demo)</h2>;

  return (
    <div style={{ padding:20 }}>
      <h3>Delivery Address</h3>
      <input placeholder="Name"/><br/><br/>
      <input placeholder="Address"/><br/><br/>
      <input placeholder="City"/><br/><br/>
      <input placeholder="Pincode"/><br/><br/>

      <h3>Payment Method</h3>
      <select onChange={e => setMethod(e.target.value)}>
        <option value="COD">Cash on Delivery</option>
        <option value="UPI">UPI</option>
        <option value="NB">Net Banking</option>
      </select><br/><br/>

      <button onClick={() => setDone(true)}>
        {method === "COD" ? "Place Order" : "Pay Now"}
      </button>
    </div>
  );
}
