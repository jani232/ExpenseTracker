import React from "react";
import './sidebar.css'
import {Link} from 'react-router-dom'

export default function Sidebar({ open }) {
  return (
    <div className={`sidebar ${open ? "open" : "close"}`}>

      <ul className="menu">
        <li>Home</li>
        <Link to ="/FilterCategory"><li>Filter Category</li></Link>
        <Link to="/Newform"><li>Add New </li></Link>
        <li>Settings</li>
      </ul>

    </div>
  );
}