import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [navStyle, setnavStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  function lightTheme() {
    document.getElementById("theme").classList.remove("show");
    document
      .getElementsByClassName("dropdown-menu")[0]
      .classList.remove("show");
    document.getElementById("theme").innerText = "Light";
    setnavStyle({ backgroundColor: "white", color: "black" });
    props.showStyle();
  }
  function darkTheme() {
    document.getElementById("theme").classList.remove("show");
    document
      .getElementsByClassName("dropdown-menu")[0]
      .classList.remove("show");
    document.getElementById("theme").innerText = "Dark";
    setnavStyle({ backgroundColor: "black", color: "white" });
    props.showStyle();
  }
  function redTheme() {
    document.getElementById("theme").classList.remove("show");
    document
      .getElementsByClassName("dropdown-menu")[0]
      .classList.remove("show");
    document.getElementById("theme").innerText = "Red";
    setnavStyle({
      backgroundColor: "rgb(83, 28, 28)",
      color: "white",
    });
    props.showStyle();
  }
  function greenTheme() {
    document.getElementById("theme").classList.remove("show");
    document
      .getElementsByClassName("dropdown-menu")[0]
      .classList.remove("show");
    document.getElementById("theme").innerText = "Green";
    setnavStyle({ backgroundColor: "#044804", color: "white" });
    console.log(navStyle);
    props.showStyle();
  }
  return (
    <div style={navStyle}>
      {/* <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      > */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" style={navStyle} to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  style={navStyle}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={navStyle} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="btn-group" style={navStyle}>
              <button
                type="button"
                className={`btn btn-${
                  props.mode == "light"
                    ? "primary"
                    : props.mode == "dark"
                    ? "secondary"
                    : props.mode == "green"
                    ? "success"
                    : "danger"
                } dropdown-toggle`}
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
                id="theme"
              >
                Choose a theme
              </button>
              <ul
                className="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="dropdownMenuButton1"
                style={{
                  backgroundColor:
                    props.mode == "light"
                      ? "white"
                      : props.mode == "dark"
                      ? "#8c8a8a"
                      : props.mode == "green"
                      ? "rgb(163, 208, 66)"
                      : "#d2b7b7",
                }}
              >
                <li
                  className="dropdown-item disabled"
                  style={{
                    backgroundColor:
                      props.mode == "light"
                        ? "white"
                        : props.mode == "dark"
                        ? "#ffffffbf"
                        : props.mode == "green"
                        ? "#70972a"
                        : "#946d6d",
                    color: "black",
                    marginTop: "-8px",
                    borderRadius: "5px",
                  }}
                >
                  Choose a theme
                </li>
                <li
                  className="dropdown-item"
                  style={{ color: props.mode == "dark" ? "white" : "black" }}
                  onClick={lightTheme}
                >
                  Light
                </li>
                <li
                  className="dropdown-item"
                  style={{ color: props.mode == "dark" ? "white" : "black" }}
                  onClick={darkTheme}
                >
                  Dark
                </li>
                <li
                  className="dropdown-item"
                  style={{ color: props.mode == "dark" ? "white" : "black" }}
                  onClick={greenTheme}
                >
                  Green
                </li>
                <li
                  className="dropdown-item"
                  style={{ color: props.mode == "dark" ? "white" : "black" }}
                  onClick={redTheme}
                >
                  Red
                </li>
              </ul>
            </div>
            {/* <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggle}
              />
              <label
                className={`form-check-label text-${
                  props.mode == "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode == "dark" ? "light" : "dark"} Mode
              </label>
            </div> */}
            {/* <form classNameName="d-flex" role="search">
              <input
                classNameName="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button classNameName="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
