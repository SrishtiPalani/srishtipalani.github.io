import React from "react";
import './mobile.css'
function Mobile({ isOpen, setIsOpen}) {
  return (
  <div className="mobile">
    <div className="mobile-option">
        <a href="#projects" >
          About
        </a>
    </div>
    <div className="mobile-option">
        <a href={"https://drive.google.com/file/d/1i1kc3CJ2BbVsafk1OfBZur1Y80zehusO/view?usp=sharing"} target = "_blank" rel="noreferrer">
        CV
        </a>
    </div>
  </div>
  );
}

export default Mobile;