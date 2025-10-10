import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import buddy from "../assets/imgs/dogg.png";
import kitty from "../assets/imgs/kitty.png";
import bear from "../assets/imgs/bear.png";
import coco from "../assets/imgs/coco.png";
import bull from "../assets/imgs/Bulldog.png";
import luna from "../assets/imgs/SiameseCat.png";
import Retriever from "../assets/imgs/GoldenRetriever.png";
import popat from "../assets/imgs/parrot1.png";
import german from "../assets/imgs/german.png";
import Beagle from "../assets/imgs/Beagle.png";

const Contact = () => {
  const animals = [
    {
      id: 1,
      name: "Buddy",
      age: "2 years",
      breed: "Labrador",
      price: "₹5000",
      stock: 3,
      img: buddy,
    },
    {
      id: 2,
      name: "Kitty",
      age: "1 year",
      breed: "Persian Cat",
      price: "₹3000",
      stock: 5,
      img: kitty,
    },
    {
      id: 3,
      name: "Bear",
      age: "3 years",
      breed: "Brown Bear",
      price: "₹10000",
      stock: 1,
      img: bear,
    },
    {
      id: 4,
      name: "Coco",
      age: "2 years",
      breed: "Cockatoo",
      price: "₹4500",
      stock: 2,
      img: coco,
    },
    {
      id: 5,
      name: "Max",
      age: "4 years",
      breed: "Bulldog",
      price: "₹6000",
      stock: 2,
      img: bull,
    },
    {
      id: 6,
      name: "Luna",
      age: "1 year",
      breed: "Siamese Cat",
      price: "₹3500",
      stock: 4,
      img: luna,
    },
    {
      id: 7,
      name: "Charlie",
      age: "3 years",
      breed: "Beagle",
      price: "₹5500",
      stock: 3,
      img: Beagle,
    },
    {
      id: 8,
      name: "Milo",
      age: "2 years",
      breed: "Golden Retriever",
      price: "₹7000",
      stock: 2,
      img: Retriever,
    },
    {
      id: 9,
      name: "Daisy",
      age: "1.5 years",
      breed: "Parrot",
      price: "₹4000",
      stock: 5,
      img: popat,
    },
    {
      id: 10,
      name: "Rocky",
      age: "3 years",
      breed: "German Shepherd",
      price: "₹8000",
      stock: 1,
      img: german,
    },
  ];

  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center fw-bold text-primary">
        🐾 Adopt a Friend 🐾
      </h2>
      <p className="text-center mb-5 fs-5 text-muted">
        Select your companion and give them a loving home.
      </p>

      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>
            <strong>Name:</strong> Vishavdip Devanand Vaidya
          </p>
          <p>
            <strong>Address:</strong> Aurangabad, Maharashtra, India
          </p>
          <p>
            <strong>Phone:</strong> +91 9623XXXXXX
          </p>
          <p>
            <strong>Email:</strong> yashvaidya9623@gmail.com
          </p>
        </div>

        <div className="contact-right">
          <h2>Adopt, Don’t Shop ❤️</h2>
          <p>
            Every pet deserves a loving home. By adopting, you are saving a life
            and gaining a lifelong friend. We are here to help you connect with
            your perfect companion!
          </p>
        </div>
      </div>
      <div className="row">
        {animals.map((animal, index) => (
          <div className="col-md-4 mb-4" key={animal.id}>
            <div
              className="card animal-card shadow-sm"
              style={{
                backgroundColor: `hsl(${index * 36}, 70%, 90%)`,
              }}
            >
              <img
                className="card-img-top"
                src={animal.img}
                style={{
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{animal.name}</h5>
                <p className="mb-1">
                  <strong>Breed:</strong> {animal.breed}
                </p>
                <p className="mb-1">
                  <strong>Age:</strong> {animal.age}
                </p>
                <p className="text-success fw-bold">{animal.price}</p>
                <button className="btn btn-primary mt-2 px-4">
                  <Link to="/adopt" className="btn btn-primary">
                    Adopt Me
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container"></div>
    </div>
  );
};

export default Contact;
