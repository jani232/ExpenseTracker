import React from "react";
import "./navbar.css";

export default function Navbar({ open, setOpen }) {
  return (
    <div className="navbar">

      
      <div className="navLeft">

        <button
          className="menuBtn" onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      
      <ul className="navRight">
         <li>About</li>
         <li>Contact</li>
         <li>My Profile</li>
      </ul>


    </div>
  );
}