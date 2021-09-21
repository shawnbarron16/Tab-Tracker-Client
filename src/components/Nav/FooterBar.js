import React from "react";
import { Link } from "react-router-dom";

export const FooterBar = () => {
  return (
    <>
      <ul className="footerBar">
        <ul className="footerBar__item">
          <a href="https://github.com/shawnbarron16" target="_blank" className="footerBar__link">Github</a>
        </ul>
        <ul className="footerBar__item">
            <a href="https://www.linkedin.com/in/shawn-barron16/" target="_blank" className="footerBar__link">LinkedIn</a>
        </ul>
      </ul>
    </>
  );
};