import React from "react";
import "./About.css";
import { Link, Outlet } from "react-router-dom";
export default function About() {
  return (
      <div id="about-main">
        <ul className="about-links">
          <li>
            <Link to="/about/Me"> About Me</Link>
          </li>
          <li>
            <Link to="/about/Skills">About My Skills</Link>
          </li>
        </ul>
    <Outlet/>
      </div>
  );
}
