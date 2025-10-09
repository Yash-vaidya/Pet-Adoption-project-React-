import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="container mt-5">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label className="form-label">Admin ID</label>
          <input
            type="text"
            className="form-control"
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
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
