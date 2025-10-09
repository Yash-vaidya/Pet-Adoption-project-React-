import React, { useEffect, useState } from "react";
import axios from "axios";

const SoldAnimals = () => {
  const [sold, setSold] = useState([]);

  useEffect(() => {
    fetchSold();
  }, []);

  const fetchSold = async () => {
    try {
      const res = await axios.get("http://localhost:3000/sold");
      setSold(res.data);
    } catch (error) {
      console.error("Error fetching sold data:", error);
    }
  };

  return (
    <div className="sold-animals">
      <h2>💰 Sold Animals</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Animal Name</th>
            <th>Category</th>
            <th>Buyer Name</th>
          </tr>
        </thead>
        <tbody>
          {sold.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.category}</td>
              <td>{s.buyer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SoldAnimals;
