import React from "react";
import './web.css';

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="#projects" >
          About
        </a>
    </div>
    <div className="web-option">
        <a href={"https://drive.google.com/file/d/1i1kc3CJ2BbVsafk1OfBZur1Y80zehusO/view?usp=sharing"} target = "_blank" rel="noopener noreferrer">
        CV
        </a>
    </div>
  </div>;
}

export default Web;