import React, { useState } from "react";

export default function TextBox(props) {
  const [text, setText] = useState("");
  function typeText(e) {
    setText(e.target.value);
  }
  function UpperCase() {
    setText(text.toUpperCase());
  }
  function LowerCase() {
    setText(text.toLowerCase());
  }
  function noOfWords() {
    if (text.length == 0) return 0;
    if (text.lastIndexOf(" ") == text.length - 1)
      return text.split(" ").length - 1;
    return text.split(" ").length;
  }
  function clearText() {
    setText("");
  }
  return (
    // <div style={{ color: props.mode == "dark" ? "white" : "black" }}>
    <div style={props.Style}>
      <div className="mb-3 container">
        <label htmlFor="textBox" className="form-label">
          <b style={{ fontSize: "1.3rem" }}>Enter text here</b>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={typeText}
          style={{
            border: "1px solid black",
            backgroundColor:
              props.mode == "light"
                ? "white"
                : props.mode == "dark"
                ? "#808080b5"
                : props.mode == "green"
                ? "rgba(168, 210, 77, 0.62)"
                : "#d0b1b1",
            color: props.mode == "light" ? "black" : "white",
          }}
          id="textBox"
          rows="8"
        ></textarea>
        <button
          className={`btn btn-${
            props.mode == "light" ? "primary" : "outline-light"
          } mx-2 my-2`}
          onClick={UpperCase}
          disabled={text.length == 0}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode == "light" ? "primary" : "outline-light"
          } mx-2 my-2`}
          onClick={LowerCase}
          disabled={text.length == 0}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode == "light" ? "primary" : "outline-light"
          } mx-2 my-2`}
          onClick={clearText}
          disabled={text.length == 0}
        >
          Clear text
        </button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {noOfWords()} words and {text.length} characters
        </p>
        <p>{0.008 * noOfWords()} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
