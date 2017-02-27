import React from "react";
import "../index.css";

export default class Nav extends React.Component {

 
  toggleMenue(){
    var menueShow = document.querySelector(".nav-open").classList;
    var [exp1, exp2, exp3] = document.querySelectorAll('.menstrip');
    console.log(exp1.classList);
    if(menueShow.contains('close-box')) {
      menueShow.remove('close-box');
      exp1.classList.add('toprotate');
      exp2.classList.add('fadeout');
      exp3.classList.add('bottomrotate');
    } else {
      menueShow.add('close-box');
      exp1.classList.remove('toprotate');
      exp2.classList.remove('fadeout');
      exp3.classList.remove('bottomrotate');
    }
  }
  
  handleResize(){
    var menueShow = document.querySelector(".nav-open").classList;
    var [exp1, exp2, exp3] = document.querySelectorAll('.menstrip');
    if (!menueShow.contains('close-box')) {
      menueShow.add('close-box');
      exp1.classList.remove('toprotate');
      exp2.classList.remove('fadeout');
      exp3.classList.remove('bottomrotate');
    }
  }
  
  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleResize)
  }


  render(){
    return (
      <div>
        <div id="navbar">
          <a href="#about" id="siteTitle">Sam Williams</a>
          <div id="nav-links">
            <a href="#about"><button className="menueBtn">About</button></a>
            <a href="#projects"><button className="menueBtn">Projects</button></a>
            <a href="#contact"><button className="menueBtn">Contact Me</button></a>
          </div>
          <div id="nav-collapsed">
            <button className="menueBtn" id="exp" onClick={this.toggleMenue}>
              <div className="menstrip exp1"></div>
              <div className="menstrip exp2"></div>
              <div className="menstrip exp3"></div>
            </button>
          </div>
        </div>
        <div className="nav-open close-box">
          <a href="#about"><button className="menueBtn" onClick={this.toggleMenue}>About</button></a>
          <a href="#projects"><button className="menueBtn" onClick={this.toggleMenue}>Projects</button></a>
          <a href="#contact"><button className="menueBtn" onClick={this.toggleMenue}>Contact Me</button></a>
        </div>
      </div>
    );
  }

}
