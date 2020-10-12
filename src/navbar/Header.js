import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./Dropdown";
import './navbar.css'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Rise 'n Hacktoberfest!
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-item nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-item nav-link"
                href="https://github.com/imyjimmy/hacktoberfest-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fork Me!
              </a>
            </li>
            <li className="menu-dropdown-btn">
              <DropDown />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
