import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="container">
        <h1 className="dashboard-header">🐾 Admin Dashboard</h1>

        <div className="dashboard-nav text-center mb-4">
          <Link to="add" className="btn btn-success">
            Add Animal
          </Link>

          <Link to="stock" className="btn btn-success">
            Stock List
          </Link>
          <Link to="sold" className="btn btn-success">
            Sold Animals
          </Link>
        </div>
        <div className="hero">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            veniam? Odit aliquam in enim perferendis sequi magnam! Odio
            dignissimos aspernatur ex magnam blanditiis, quos aliquid maxime
            placeat distinctio soluta doloribus?
          </p>
        </div>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
