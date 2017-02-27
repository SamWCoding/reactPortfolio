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
            <h3> Front end developer and UX/UI designer, with experience in Data analytics, visualisation, machine learning and project management. Always striving to learn and develop. </h3>
            <h2> Web Developer - UX Designer - Data Scientist</h2>
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
            <li>Matlab</li>
          </ul>
        </div>
      </div>

    );
  }
}
