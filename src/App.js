import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const [style, setstyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  function showStyle() {
    let theme = document.getElementById("theme").innerText;
    // console.log(theme);
    if (theme == "Light") {
      setstyle({
        backgroundColor: "white",
        color: "black",
      });
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else if (theme == "Dark") {
      setstyle({
        backgroundColor: "black",
        color: "white",
      });
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else if (theme == "Red") {
      setstyle({
        backgroundColor: "rgb(133, 86, 86)",
        color: "white",
      });
      setmode("dark");
      document.body.style.backgroundColor = "rgb(133, 86, 86)";
      document.body.style.color = "white";
    } else if (theme == "Green") {
      setstyle({
        backgroundColor: "rgb(33, 115, 33)",
        color: "white",
      });
      setmode("dark");
      document.body.style.backgroundColor = "rgb(33, 115, 33)";
      document.body.style.color = "white";
    }
  }
  function showAlert(message, type) {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }
  // function toggleMode() {
  //   if (mode == "light") {
  //     setmode("dark");
  //     document.body.style.backgroundColor = "#0c1859";
  //     showAlert("Dark Mode enables successfully", "success");
  //   } else {
  //     setmode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode enables successfully", "success");
  //   }
  // }
  return (
    // <Router>
    <>
      <Navbar title="textUtils" showStyle={showStyle}></Navbar>
      <Alert alert={alert}></Alert>
      {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <TextBox
                mode={mode}
                Style={style}
                showAlert={showAlert}
              ></TextBox>
            }
          />
        </Routes> */}
      <TextBox mode={mode} Style={style} showAlert={showAlert}></TextBox>
    </>
    // </Router>
  );
}

export default App;
