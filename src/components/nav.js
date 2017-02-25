import React from "react";
import { Link } from "react-router";
import "../index.css";

export default class Nav extends React.Component {

  render(){
    return (
      <div className="navbar navbardefalt">
        <Link id="siteTitle" to="home">Sam Williams</Link>
        <div id="nav-links">
          <Link className="menueBtn" to="about">About</Link>
          <Link className="menueBtn" to="projects">Projects</Link>
          <Link className="menueBtn" to="contact">Contact Me</Link>
        </div>
        <div id="nav-collapsed">
          <button className="menueBtn" id="exp">
            <div className="menstrip exp1"></div>
            <div className="menstrip exp2"></div>
            <div className="menstrip exp3"></div>
          </button>
        </div>
      </div>
    );
  }

}
