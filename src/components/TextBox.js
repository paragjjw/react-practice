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
          <b>Enter text here</b>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={typeText}
          style={{
            backgroundColor: props.mode == "dark" ? "grey" : "white",
            color: props.mode == "dark" ? "white" : "black",
          }}
          id="textBox"
          rows="8"
        ></textarea>
        <button
          className={`btn btn-${
            props.mode == "dark" ? "outline-light" : "primary"
          } mx-2 my-2`}
          onClick={UpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode == "dark" ? "outline-light" : "primary"
          } mx-2 my-2`}
          onClick={LowerCase}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode == "dark" ? "outline-light" : "primary"
          } mx-2 my-2`}
          onClick={clearText}
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
        <p>
          {text.length > 0
            ? text
            : "Enter some text in the above textbox to preview it here"}
        </p>
      </div>
    </div>
  );
}
