import React from "react";
import Nav from "../components/nav"
import About from './about';
import Projects from './projects';
import Contact from './contact';

export default class Layout extends React.Component {



 render(){
  return (
    <div>
      <Nav />
      <div id="center-stripe">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>

   )
 }
}
