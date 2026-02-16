import React from "react";
import "./body.css";
import About from "./about/index";


function Body() {
  return (
  <div className="body">
    <section id="about">
      <About />
    </section>
  </div>
  );
}

export default Body;