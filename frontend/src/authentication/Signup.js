import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", { username, password, role });
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient text-white px-4">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-md shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option className="bg-purple-400" value="user">User</option>
            <option className="bg-purple-400" value="admin">Admin</option>
          </select>
          <button
            type="submit"
            className="w-full bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-200">
          Already have an account?{" "}
          <a href="/login" className="text-blue-200 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
