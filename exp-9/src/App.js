import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mandatory validation
    if (!form.name || !form.email || !form.phone || !form.password) {
      alert("All fields are required!");
      return;
    }

    // Email validation
    if (!form.email.includes("@")) {
      alert("Enter a valid email!");
      return;
    }

    // Phone validation
    if (form.phone.length !== 10 || isNaN(form.phone)) {
      alert("Phone number must be exactly 10 digits!");
      return;
    }

    setUsers([...users, form]);
    setSuccess("Registration Successful!");

    setForm({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>

        {success && <p className="success">{success}</p>}
      </div>

      <div className="card">
        <h3>Registered Users</h3>
        {users.map((u, i) => (
          <p key={i}>
            {u.name} - {u.email} - {u.phone}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;