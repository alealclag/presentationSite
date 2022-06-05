import React from "react";

export default function header(properties) {
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="./images/hamburger.png" className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarToggle">
          <ul className="navbar-nav m-lg-auto m-md-auto">
            <li className="nav-item">
              <a href="#workGradient" className="nav-link">
                <i className="fas fa-briefcase"></i> Work Experience
              </a>
            </li>
            <li className="nav-item">
              <a href="#eduGradient" className="nav-link">
                <i className="fas fa-graduation-cap"></i> Education
              </a>
            </li>
            <li className="nav-item">
              <a href="#knowGradient" className="nav-link">
                <i className="fas fa-brain"></i> Knowledges
              </a>
            </li>
            <li className="nav-item">
              <a href="#contactGradient" className="nav-link">
                <i className="fas fa-envelope"></i> Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
