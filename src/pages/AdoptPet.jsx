import React, { useState, useEffect } from "react";
import axios from "axios";

const AdoptPet = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    photo: "",
    animal: "",
  });

  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/animals")
      .then((res) => setAnimals(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/adoptions", formData)
      .then((res) => {
        alert("Adoption request submitted successfully!");
        setFormData({ name: "", email: "", mobile: "", photo: "", animal: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Adopt a Pet</h2>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
          <label className="form-label">Passport Size Photo URL</label>
          <input type="file" className="form-control" name="photo" value={formData.photo} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
          <label className="form-label">Select Animal</label>
          <select className="form-select" name="animal" value={formData.animal} onChange={handleChange} required>
            <option value=""></option>
            {animals.map((animal) => (
              <option key={animal.id} value={animal.name}>{animal.name}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit Adoption Request</button>
      </form>
    </div>
  );
};

export default AdoptPet;
