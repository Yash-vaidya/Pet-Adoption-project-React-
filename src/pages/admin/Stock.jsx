import React, { useEffect, useState } from "react";
import axios from "axios";

const Stock = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const res = await axios.get("http://localhost:3000/animals");
      setAnimals(res.data);
    } catch (error) {
      console.error("Error fetching stock:", error);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">📦 Animal Stock</h2>

      <div className="row">
        {animals.map((a) => (
          <div key={a.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              {a.img && (
                <img
                  src={a.img}
                  className="card-img-top"
                  alt={a.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{a.name}</h5>
                <p className="card-text">
                  <strong>Age:</strong> {a.age} <br />
                  <strong>Breed:</strong> {a.breed} <br />
                  <strong>Price:</strong> ₹{a.price} <br />
                  <strong>Stock:</strong> {a.stock}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stock;
