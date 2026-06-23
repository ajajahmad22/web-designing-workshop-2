import React, { useState } from "react";
import "./App.css";

function Login({ users }) {
  const [loginForm, setLoginForm] = useState({
    name: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user exists
    const user = users.find((u) => u.name === loginForm.name);

    if (!user) {
      alert("User does not exist!");
      return;
    }

    // Check password
    if (user.password !== loginForm.password) {
      alert("Incorrect password!");
      return;
    }

    setMessage("User successfully logged in!");
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={loginForm.name}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginForm.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>

      {message && <p className="success">{message}</p>}
    </div>
  );
}

export default Login;
