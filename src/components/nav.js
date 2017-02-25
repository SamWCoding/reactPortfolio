import React from "react";
import { Link } from "react-router";
import "./nav.css";

export default class Nav extends React.Component {
 
 render(){
    return (
      <nav className="navbar navbardefalt">
          <Link to="about">About</Link>
          <Link to="projects">Projects</Link>
          <Link to="contact">Contact Me</Link>
      </nav> 
    );
  }
 
}