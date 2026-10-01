import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="public-nav">
      <Link to="/" className="public-brand">
        <img src="/assets/AzentmartHR.png" alt="AzentMart AI" />
      </Link>

      <div className="public-nav-links">
        <Link to="/login">Login</Link>
        <Link to="/signup" className="btn btn-primary">
          Get started
        </Link>
      </div>
    </nav>
  );
}
