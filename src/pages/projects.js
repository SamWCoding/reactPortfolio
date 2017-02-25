import React from "react";

export default class Layout extends React.Component {

 render(){
  return (
    <div className="portfolio">
      <h1 className="sectionTitle">Portfolio</h1>

      <div className="twocols">
          <div className="leftcol">
            <div className="website">
              <a href="https://samwcoding.github.io/Projects/wikiviewer/wikiview.html">
                <img className="img-responsive webpic" alt="Wikipedia Search Site" src="http://climbingstrengthtraining.com/wp-content/uploads/2017/02/WikiViewer.png" />
                <div className="caption text-center">
                  <p>Wikipedia Search site using the Wikipedia API</p>
                </div>
              </a>
            </div>
            <div className="website">
              <a href="https://samwcoding.github.io/Projects/JS_Calc/main.html">
                <img className="img-responsive webpic" alt="JavaScript Calculator" src="http://climbingstrengthtraining.com/wp-content/uploads/2017/01/JS_Calc.png" />
                <div className="caption text-center">
                  <p>Fully functioning calculator built using JavaScript</p>
                </div>
              </a>
            </div>
            <div className="website">
              <a href="https://samwcoding.github.io/Projects/ConnorSite/Connor.html">
                <img className="img-responsive webpic" alt="Profile Site for Connor Byrne" src="http://climbingstrengthtraining.com/wp-content/uploads/2017/01/Capture.png" />
                <div className="caption text-center">
                  <p>Profile Site for Connor Byrne</p>
                </div>
              </a>
            </div>
          </div>

          <div className="rightcol">
            <div className="website">
                <a href="https://samwcoding.github.io/Projects/ChuckNoris/ChuckNoris.html">
                    <img className="img-responsive webpic" alt="Chuck Norris Quote Generator" src="http://climbingstrengthtraining.com/wp-content/uploads/2017/02/ChuckNorris.png" />
                    <div className="caption text-center">
                        <p>Chuck Norris quote generator with <em>tweet the quote</em> option</p>
                    </div>
                </a>
            </div>
            <div className="website">
                <a href="https://samwcoding.github.io/Projects/PureCSS/PureCSS.html">
                    <img className="img-responsive webpic" alt="Portfolio of CSS work" src="http://climbingstrengthtraining.com/wp-content/uploads/2017/01/PureCSS.png" />
                    <div className="caption text-center">
                        <p>Portfolio of images styled only with CSS</p>
                    </div>
                </a>
            </div>
            <div className="website">
                <a href="https://samwcoding.github.io/Projects/Pomo-Clock/Pomo.html">
                    <img className="img-responsive webpic" alt="Pomodoro timer App" src="http://climbingstrengthtraining.com/wp-content/uploads/2017/01/Pomo.png" />
                    <div className="caption text-center">
                        <p>Pomodoro Timer functioning using Javascript</p>
                    </div>
                </a>
            </div>
          </div>
        </div>
        <h3 className="text-center bot"><a href="https://github.com/SamWCoding/Projects">See all of my project code</a></h3>
      </div>

    );
  }
}
