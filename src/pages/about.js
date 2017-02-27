import React from "react";
import '../index.css';

export default class Layout extends React.Component {

  render(){
    return (
      <div className="about">
        <a class="anchor" name="about" id="aboutAnchor"></a>
        <div id="root"></div>
        <h1 className="sectionTitle">About Me</h1>
        <div className="twocols">
          <div className="aboutText">
            <h4 className="text-center"> Front end developer and UX/UI designer, with experience in Data analytics, visualisation, machine learning and project management. Always striving to learn and develop. </h4>
            <h3 className="text-center"> Web Developer - UX Designer - Data Scientist</h3>
          </div>
          <div className="profpic">
            <img className="img-circle img-responsive" alt="Sam Williams" src="http://climbingstrengthtraining.com/wp-content/uploads/2017/01/samImg.jpg" />
          </div>
        </div>
        <div className="Skills">
          <h3>Skills</h3>
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
