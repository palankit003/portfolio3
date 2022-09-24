import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        Ankit <span style={{ fontWeight: "normal" }}>Pal</span>
      </div>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
