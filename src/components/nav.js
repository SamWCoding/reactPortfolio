import React from "react";
import "../index.css";

export default class Nav extends React.Component {

 
  toggleMenue(){
    var menueShow = document.querySelector("#nav-open");
    menueShow.style.display = (menueShow.style.display === 'none' || menueShow.style.display === '')? 'flex' : "none";
  }
  
  handleResize(){
    var menueShow = document.querySelector("#nav-open");
    menueShow.style.display = 'none';
  }
  
  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
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
        <div id="nav-open">
          <a href="#about"><button className="menueBtn">About</button></a>
          <a href="#projects"><button className="menueBtn">Projects</button></a>
          <a href="#contact"><button className="menueBtn">Contact Me</button></a>
        </div>
      </div>
    );
  }

}
