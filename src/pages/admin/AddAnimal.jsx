import React, { useState } from "react";
import axios from "axios";

const AddAnimal = () => {
  const [animal, setAnimal] = useState({
    name: "",
    age: "",
    breed: "",
    price: "",
    stock: "",
    img: "",
  });

  const handleChange = (e) => {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/animals", animal);

      alert("Animal added successfully!");
      setAnimal({
        name: "",
        age: "",
        breed: "",
        price: "",
        stock: "",
        img: "",
      });
    } catch (err) {
      console.error("Error adding animal:", err);
      alert("Failed to add animal. Make sure JSON Server is running.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">Add New Animal</h2>

      <form
        onSubmit={handleSubmit}
        className="shadow p-4 rounded bg-light"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <div className="mb-3">
          <label className="form-label fw-bold">Animal Name</label>
          <input
            type="text"
            name="name"
            value={animal.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter animal name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Age</label>
          <input
            type="text"
            name="age"
            value={animal.age}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter age (e.g. 2 years)"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Breed</label>
          <input
            type="text"
            name="breed"
            value={animal.breed}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter breed"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={animal.price}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Stock</label>
          <input
            type="number"
            name="stock"
            value={animal.stock}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter available quantity"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Image URL</label>
          <input
            type="text"
            name="img"
            value={animal.img}
            onChange={handleChange}
            className="form-control"
            placeholder="Paste image URL"
          />
        </div>

        <button type="submit" className="btn btn-success w-100 fw-bold">
          Add Animal
        </button>
      </form>
    </div>
  );
};

export default AddAnimal;
