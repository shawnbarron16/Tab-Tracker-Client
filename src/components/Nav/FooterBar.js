import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

export const FooterBar = () => {
  return (
    <>
      <div className="footer">
        <div className="content has-text-centered" style={{fontSize: ".8em"}}>
          <a href="https://github.com/shawnbarron16" target="_blank" className="footerBar__link">Github</a>
        </div>
        <div className="content has-text-centered" style={{fontSize: ".8em"}}>
            <a href="https://www.linkedin.com/in/shawn-barron16/" target="_blank" className="footerBar__link">LinkedIn</a>
        </div>
      </div>
    </>
  );
};