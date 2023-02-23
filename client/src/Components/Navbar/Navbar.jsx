import React from "react";
import "./Navbar.css";
import { RiHome4Fill } from "react-icons/ri";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { LoginRegisterModal } from "../LoginRegisterModal/LoginRegisterModal";

import { MobileMenu } from "../MobileMenu/MobileMenu";
import { useState } from "react";
// import { Login } from "../Log-in/Login";
// import { Register } from "../sign-up/Register";

export const Navbar = () => {
  const [formType, setFormType] = useState("login");

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-container__logo">
          <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
            <h1 className="title-logo-moelist-navbar">MoesList</h1>
          </Link>
        </div>
        <div className="navbar-container__search d-none d-sm-block">
          <input
            className="navbar-container__search__input"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* <div className="navbar-container__icons__profile">
        <h2 className="navbar-text-profile">Login</h2>
      </div>
      <div className="navbar-container__icons__profile">
        <h2 className="navbar-text-profile">Register</h2>
      </div> */}

        <div className="nav-list">
          <div className="nav-list-link  d-none d-sm-block">
            <div className="navbar-container__icons__home">
              <RiHome4Fill className="navbar-container__icons_home__icon" />
            </div>
            <div className="navbar-container__icons__explore">
              <h2 className="navbar-text-explorer">Explorar</h2>
            </div>
          </div>
          <div className="nav-list-link  d-none d-sm-block">
            <div className="navbar-container__icons__home">
              <FaUserAlt className="navbar-container__icons_home__icon" />
            </div>
            <button
              type="button"
              className="text-decoration-none btn p-0"
              data-bs-toggle="modal"
              data-bs-target="#modal"
            >
              <h2 className="navbar-text-explorer">Cuenta</h2>
            </button>
          </div>
          <div className="nav-list-link d-sm-none">
            <button
              className="btn p-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="offcanvas"
            >
              <FaBars className="navbar-container__icons_home__icon" />
            </button>

            <MobileMenu />
          </div>
        </div>
      </div>
      <LoginRegisterModal formType={formType} setFormType={setFormType} />
    </>
  );
};
