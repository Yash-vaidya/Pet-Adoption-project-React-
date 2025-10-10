import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ id: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.id === "yash" && credentials.password === "mayuri") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid ID or Password");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card shadow-sm">
        <h2 className="text-center mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Admin ID</label>
            <input
              type="text"
              className="form-control neon-input"
              name="id"
              value={credentials.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control neon-input"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-success w-100 mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
