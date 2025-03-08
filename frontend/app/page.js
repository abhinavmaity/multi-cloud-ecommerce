"use client";
import { useState } from "react";
import { signInWithEmailAndPassword, auth } from "../firebaseConfig";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      // Sign in user with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();

      // Call backend API with Firebase token
      const response = await axios.get(
        "https://multi-cloud-ecommerce-backend-814232976544.us-central1.run.app/test",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMessage(`✅ Success! Authenticated as ${response.data.user.email}`);
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        className="border p-2 mb-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 mb-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
      <p className="mt-4">{message}</p>
    </div>
  );
}
