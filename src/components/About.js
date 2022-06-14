import React, { useState } from "react";

export default function About(props) {
  const [myStyle, setmyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  // const [btnText, setbtnText] = useState("Enable Dark Mode");
  // function toggleState() {
  //   if (myStyle.color == "white") {
  //     setmyStyle({
  //       backgroundColor: "white",
  //       color: "black",
  //     });
  //     setbtnText("Enable Dark Mode");
  //   } else {
  //     setmyStyle({
  //       backgroundColor: "black",
  //       color: "white",
  //       border: "1px solid white",
  //     });
  //     setbtnText("Enable Light Mode");
  //   }
  // }
  return (
    <div
      className="container my-3"
      style={{
        color: props.mode == "light" ? "black" : "white",
      }}
    >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              props.mode == "light"
                ? "white"
                : props.mode == "dark"
                ? "grey"
                : props.mode == "green"
                ? "rgba(168, 210, 77, 0.62)"
                : "#d0b1b1",
            color: props.mode == "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor:
                  props.mode == "light"
                    ? "white"
                    : props.mode == "dark"
                    ? "grey"
                    : props.mode == "green"
                    ? "rgba(168, 210, 77, 0.62)"
                    : "#d0b1b1",
                color: props.mode == "dark" ? "white" : "black",
              }}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor:
                props.mode == "light"
                  ? "white"
                  : props.mode == "dark"
                  ? "#eceaeaa3"
                  : props.mode == "green"
                  ? "rgba(142, 185, 51, 0.62)"
                  : "rgb(176, 140, 140)",
              color: "black",
            }}
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              props.mode == "light"
                ? "white"
                : props.mode == "dark"
                ? "grey"
                : props.mode == "green"
                ? "rgba(168, 210, 77, 0.62)"
                : "#d0b1b1",
            color: props.mode == "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor:
                  props.mode == "light"
                    ? "white"
                    : props.mode == "dark"
                    ? "grey"
                    : props.mode == "green"
                    ? "rgba(168, 210, 77, 0.62)"
                    : "#d0b1b1",
                color: props.mode == "dark" ? "white" : "black",
              }}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor:
                props.mode == "light"
                  ? "white"
                  : props.mode == "dark"
                  ? "#eceaeaa3"
                  : props.mode == "green"
                  ? "rgba(142, 185, 51, 0.62)"
                  : "rgb(176, 140, 140)",
              color: "black",
            }}
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              props.mode == "light"
                ? "white"
                : props.mode == "dark"
                ? "grey"
                : props.mode == "green"
                ? "rgba(168, 210, 77, 0.62)"
                : "#d0b1b1",
            color: props.mode == "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor:
                  props.mode == "light"
                    ? "white"
                    : props.mode == "dark"
                    ? "grey"
                    : props.mode == "green"
                    ? "rgba(168, 210, 77, 0.62)"
                    : "#d0b1b1",
                color: props.mode == "dark" ? "white" : "black",
              }}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor:
                props.mode == "light"
                  ? "white"
                  : props.mode == "dark"
                  ? "#eceaeaa3"
                  : props.mode == "green"
                  ? "rgba(142, 185, 51, 0.62)"
                  : "rgb(176, 140, 140)",
              color: "black",
            }}
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleState} className="btn btn-primary">
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
