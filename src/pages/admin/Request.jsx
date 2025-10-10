import React, { useEffect, useState } from "react";
import axios from "axios";

const Request = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/adoptions")
      .then((res) => setRequests(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="mb-4">Adoption Requests</h2>
      {requests.length === 0 ? (
        <p>No adoption requests yet.</p>
      ) : (
        <table  
          border="1"
          cellPadding="10"
          style={{ width: "100%", textAlign: "left" }}
        >
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Animal</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={index}>
                <td>{req.name}</td>
                <td>{req.email}</td>
                <td>{req.mobile}</td>
                <td>{req.animal}</td>
                <td>
                  {req.photo ? (
                    <img src={req.photo} alt={req.animal} width="50" />
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Request;
