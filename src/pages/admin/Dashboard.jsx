import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddAnimal from "./AddAnimal";
import RemoveAnimal from "./RemoveAnimal";
import Stock from "./Stock";
import Sold from "./Sold";

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <div className="d-flex mb-4">
        <Link className="btn btn-success me-2" to="add">Add Animal</Link>
        <Link className="btn btn-danger me-2" to="remove">Remove Animal</Link>
        <Link className="btn btn-info me-2" to="stock">Stock</Link>
        <Link className="btn btn-secondary" to="sold">Sold</Link>
      </div>

      <Routes>
        <Route path="add" element={<AddAnimal />} />
        <Route path="remove" element={<RemoveAnimal />} />
        <Route path="stock" element={<Stock />} />
        <Route path="sold" element={<Sold />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
