import React, { useState } from "react";
import axios from "axios";
import "./AdoptPet.css";

const AdoptPet = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    photo: "",
    animal: "",
  });

  const animalOptions = [
    "Labrador",
    "Persian Cat",
    "Brown Bear",
    "Cockatoo",
    "Bulldog",
    "Siamese Cat",
    "Beagle",
    "Golden Retriever",
    "Parrot",
    "German Shepherd",
  ];
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files.length > 0) {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Submitting...");

    try {
      await axios.post("http://localhost:3000/adoptions", {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        photo: formData.photo.name || formData.photo,
        animal: formData.animal,
      });
      const emailForm = new FormData();
      emailForm.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY); 
      emailForm.append("subject", "🐾 New Pet Adoption Request");
      emailForm.append("name", formData.name);
      emailForm.append("email", formData.email);
      emailForm.append("mobile", formData.mobile);
      emailForm.append("animal", formData.animal);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: emailForm,
      });

      const data = await response.json();

      if (data.success) {
        setResult(" Adoption request submitted & email sent successfully!");
        e.target.reset();
        setFormData({ name: "", email: "", mobile: "", photo: "", animal: "" });
      } else {
        setResult(" Submitted locally, but email not sent: " + data.message);
        console.log("Web3Forms Error:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult(" Failed to submit adoption request.");
    }
  };

  return (
    <div className="adoptpet-container">
      <div className="adoptpet-card shadow-sm">
        <h2 className="text-center mb-4">Adopt a Pet</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control neon-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control neon-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control neon-input"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Passport Size Photo</label>
            <input
              type="file"
              className="form-control neon-input"
              name="photo"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Select Animal</label>
            <select
              className="form-select neon-input"
              name="animal"
              value={formData.animal}
              onChange={handleChange}
              required
            >
              <option value="">-- Select --</option>
              {animalOptions.map((animal, index) => (
                <option key={index} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100 mt-3">
            Submit Adoption Request
          </button>
        </form>

        <div className="text-center mt-3">
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default AdoptPet;
