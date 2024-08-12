import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mamma Mia!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  <i className="fas fa-pizza-slice" />  &nbsp; Home
                </Link>
              
               
              </li>

              {token && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      <i className="fa fa-unlock-alt" />
                      &nbsp; Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      <i className="fa fa-lock" />
                      &nbsp; Logout
                    </a>
                  </li>
                </>
              )}

              {!token && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link " to="/login">
                      <i className="fa fa-lock" /> Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/register">
                      <i className="fa fa-lock" />
                      &nbsp; Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex" role="">
              <button className="btn btn-outline-primary" type="button">
                <i className="fa fa-shopping-cart" /> &nbsp; Total ${" "}
                {total.toLocaleString("es-CL")}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
