import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const submit = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      setMessage("✅ Registered successfully. Please login.");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setMessage("❌ Registration failed. Email may already exist.");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Register</h2>

      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} /><br /><br />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} /><br /><br />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} /><br /><br />

      <button onClick={submit}>Register</button>

      <p>{message}</p>
    </div>
  );
}
