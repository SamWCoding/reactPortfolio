import React from "react";
import '../index.css';

export default class Layout extends React.Component {

  render(){
    return (
      <div className="about">
        <a className="anchor" name="about" id="aboutAnchor"></a>
        <h1 className="sectionTitle">About Me</h1>
        <div className="twocols">
          <div className="aboutText">
            <h3> 
              I'm a JavaScript developer with commercial experience with Angluar 4, NodeJS and D3 data visualisation. Pervious projects that I have worked on 
              include creating a charting micro-service, expanding the functionality of an existing CRUD API. 
            </h3>
            <h2> JavaScript Web Developer - NodeJS API Developer </h2>
          </div>
          <div id="porfileimg">
            <img className="circle" alt="Sam Williams" src="http://climbingstrengthtraining.com/wp-content/uploads/2017/01/samImg.jpg" />
          </div>
        </div>
        <div className="Skills">
          <h3 >Skills</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>NodeJS API's</li>
            <li>PostgreSQL</li>
            <li>Mocha</li>
            <li>D3 Data Visualisation</li>
          </ul>
        </div>
      </div>

    );
  }
}
