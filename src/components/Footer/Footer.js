import React from "react";
import githubIcon from "../../images/github.png";
import "./Footer.scss";

function Footer(props) {
  return (
    <div id="footer">
      <p>
        Made by{" "}
        <span className="emphasis">
          <a href="https://github.com/tkxx" target="_blank">
            Tabitha Sin
          </a>
        </span>
        ,{" "}
        <span className="emphasis">
          <a href="https://github.com/Jack-B-Lenihan" target="_blank">
            Jack Lenihan
          </a>
        </span>
        , and{" "}
        <span className="emphasis">
          <a href="https://github.com/nolanjharris" target="_blank">
            Nolan Harris
          </a>
        </span>
        .{" "}
        <a href="https://github.com/devbeatz">
          <img src={githubIcon} alt="github icon" id="github-icon" />
        </a>
      </p>
    </div>
  );
}

export default Footer;
