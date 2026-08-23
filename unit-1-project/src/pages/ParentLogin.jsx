import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./ParentLogin.css";

export default function ParentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/parent-dashboard");
  };

  return (
    <main className="parent-dashboard-container">
      <section className="login-form-section">
        <h1>Please Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            className="login-form-input"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@example.com"
          />
          <label htmlFor="password">Password</label>
          <input
            className="login-form-input"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
          />
          <button type="submit">Log In</button>
        </form>
      </section>
      <section className="create-account-section">
        <p>or</p>
        <Link className="create-account" to="/parent-create-account">
          Create An Account
        </Link>
      </section>
      <BackButton />
    </main>
  );
}
