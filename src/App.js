import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

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
      showAlert("Light theme enabled", "success");
      setstyle({
        backgroundColor: "white",
        color: "black",
      });
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else if (theme == "Dark") {
      showAlert("Dark theme enabled", "success");
      setstyle({
        backgroundColor: "black",
        color: "white",
      });
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else if (theme == "Red") {
      showAlert("Red theme enabled", "success");
      setstyle({
        backgroundColor: "rgb(134, 50, 50)",
        color: "white",
      });
      setmode("red");
      document.body.style.backgroundColor = "rgb(134, 50, 50)";
      document.body.style.color = "white";
    } else if (theme == "Green") {
      showAlert("Green theme enabled", "success");
      setstyle({
        backgroundColor: "rgb(33, 115, 33)",
        color: "white",
      });
      setmode("green");
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
    }, 2000);
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
    <Router>
      <>
        <Navbar title="textUtils" showStyle={showStyle} mode={mode}></Navbar>
        <Alert alert={alert}></Alert>
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
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
        </Routes>
        {/* <TextBox mode={mode} Style={style} showAlert={showAlert}></TextBox> */}
      </>
    </Router>
  );
}

export default App;
