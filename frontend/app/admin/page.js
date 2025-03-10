"use client";
import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleAddProduct = async () => {
    if (!name || !price || !stock || !imageUrl) {
      setMessage("❌ All fields are required.");
      return;
    }

    const newProduct = {
      productId: `prod-${Date.now()}`, // Generate a unique productId
      name,
      price: parseFloat(price), // Convert to number
      stock: parseInt(stock, 10), // Convert to number
      imageUrl,
    };

    try {
      await axios.post(
        "https://multi-cloud-ecommerce-backend-814232976544.us-central1.run.app/api/products/create",
        newProduct
      );
      setMessage("✅ Product added successfully!");
      setName("");
      setPrice("");
      setStock("");
      setImageUrl(""); // Clear input fields
    } catch (error) {
      setMessage("❌ Error: " + error.message);
    }
  };


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Admin Panel</h2>
      <input
        className="border p-2 mb-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 mb-2"
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        className="border p-2 mb-2"
        type="text"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <input
        className="border p-2 mb-2"
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleAddProduct}
      >
        Add Product
      </button>
      <p>{message}</p>
    </div>
  );
}
