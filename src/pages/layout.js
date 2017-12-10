import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "../components/nav";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Blog from "./blog";

export default class Layout extends React.Component {
  render() {
    const main = () => (
      <div>
        <About />
        <Projects />
        <Contact />
      </div>
    );
    return (
      <div>
        <BrowserRouter>
          <div id="center-stripe">
            <Nav />
            <Route exact path="/" component={main} />
            <Route exact path="/blog" component={Blog} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
