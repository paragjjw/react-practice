import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [navStyle, setnavStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  function lightTheme() {
    document.getElementById("theme").innerText = "Light";
    setnavStyle({ backgroundColor: "white", color: "black !important" });
    props.showStyle();
  }
  function darkTheme() {
    document.getElementById("theme").innerText = "Dark";
    setnavStyle({ backgroundColor: "black", color: "white !important" });
    props.showStyle();
  }
  function redTheme() {
    document.getElementById("theme").innerText = "Red";
    setnavStyle({ backgroundColor: "#8a0e0e", color: "white !important" });
    props.showStyle();
  }
  function greenTheme() {
    document.getElementById("theme").innerText = "Green";
    setnavStyle({ backgroundColor: "#044804", color: "white !important" });
    console.log(navStyle);
    props.showStyle();
  }
  // let dropdownItems = document.getElementsByClassName("dropdown-item");
  // Array.from(dropdownItems).forEach((element) => {
  //   element.addEventListener("click", (e) => {

  //     // e.preventDefault();
  //     document.getElementById("theme").innerText = e.target.innerText;
  //     props.showStyle();
  //     // console.log(props.style);
  //     console.log(e.target.innerText);
  //     if (e.target.innerText == "Light") {
  //       setnavStyle({ backgroundColor: "white", color: "black !important" });
  //     } else if (e.target.innerText == "Dark") {
  //       setnavStyle({ backgroundColor: "black", color: "white !important" });
  //     } else if (e.target.innerText == "Red") {
  //       setnavStyle({ backgroundColor: "#8a0e0e", color: "white !important" });
  //     } else if (e.target.innerText == "Green") {
  //       setnavStyle({ backgroundColor: "#044804", color: "white !important" });
  //     }
  //   });
  // });
  return (
    <div style={navStyle}>
      {/* <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      > */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={navStyle}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={navStyle} href="/about">
                  About
                </a>
              </li>
            </ul>
            <div className="btn-group" style={navStyle}>
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
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
              >
                <li className="dropdown-item disabled">Choose a theme</li>
                <li className="dropdown-item" onClick={lightTheme}>
                  Light
                </li>
                <li className="dropdown-item" onClick={darkTheme}>
                  Dark
                </li>
                <li className="dropdown-item" onClick={greenTheme}>
                  Green
                </li>
                <li className="dropdown-item" onClick={redTheme}>
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
