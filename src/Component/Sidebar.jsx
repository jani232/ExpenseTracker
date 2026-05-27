import React from "react";
import './sidebar.css'

export default function Sidebar({ open }) {
  return (
    <div className={`sidebar ${open ? "open" : "close"}`}>

      <ul className="menu">
        <li>🏠 Home</li>
        <li>📋 Tasks</li>
        <li>📅 Calendar</li>
        <li>⚙️ Settings</li>
      </ul>

    </div>
  );
}