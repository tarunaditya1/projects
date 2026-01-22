import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      navigate("/login");
    } catch {
      alert("Registration Failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input name="name" placeholder="Name" className="w-full border p-2 mb-4" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" className="w-full border p-2 mb-4" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="w-full border p-2 mb-4" onChange={handleChange} required />

        <select name="role" className="w-full border p-2 mb-4" onChange={handleChange}>
          <option value="buyer">Buyer</option>
          <option value="agent">Agent</option>
        </select>

        <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
          Register
        </button>
      </form>
    </div>
  );
}
