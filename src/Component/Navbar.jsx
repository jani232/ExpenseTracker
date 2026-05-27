import React from "react";
import "./sidebar.css";

export default function Navbar({ open, setOpen }) {
  return (
    <div className="navbar">

      {/* Left Side */}
      <div className="navLeft">

        <button
          className="menuBtn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

       

      </div>

      {/* Right Side */}
      <div className="navRight">
        <p>About</p>
        <p>Contact</p>
        <p>My Profile 👤</p>
      </div>

    </div>
  );
}