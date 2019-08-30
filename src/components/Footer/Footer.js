import React from "react";
import "./Footer.scss";

function Footer(props) {
  return (
    <div id="footer">
      <p>
        Made by <span className="emphasis">Tabitha Sin</span>,{" "}
        <span className="emphasis">Jack Lenihan</span>, and{" "}
        <span className="emphasis">Nolan Harris</span>.
      </p>
    </div>
  );
}

export default Footer;
