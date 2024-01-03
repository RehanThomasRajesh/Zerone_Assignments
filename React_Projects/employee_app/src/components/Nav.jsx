import React from "react";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Employee App
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/add">
                  Add Emplyee
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/list">
                  Employee List
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/view">
                  View Employee
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;