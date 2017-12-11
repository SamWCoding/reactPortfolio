import React from "react";
import "../index.css";
import wikiview from "../pictures/wikiview.png";
import mdPreview from "../pictures/mdPreview.png";
import goalCoach from "../pictures/goalCoach.png";
import reminderPro from "../pictures/ReminderPro.png";

import Project from "../components/project";

export default class Projects extends React.Component {
  render() {
    const projects = [
      {
        link: "https://samwcoding.github.io/Projects/wikiviewer/wikiview.html",
        alt: "Wikipedia Search Site",
        image: wikiview,
        title: "Wikipedia Search site using the Wikipedia API"
      },
      {
        link: "https://samwcoding.github.io/Projects/mdPreview/build/",
        alt: "Mark Down Previewer",
        image: mdPreview,
        title: "Markdown Previewer with file upload functionality"
      },
      {
        link: "https://samwcoding.github.io/Projects/goal-coach/build/",
        alt: "Goal Coach - group goal tracking app",
        image: goalCoach,
        title: "Goal Coach - group goal tracking app",
        course: (
          <a href="https://www.udemy.com/react-js-and-redux-mastering-web-apps">
            (course)
          </a>
        )
      },
      {
        link: "https://samwcoding.github.io/Projects/ReminderPro/build/",
        alt: "Reminder app",
        image: reminderPro,
        title: "Reminder app",
        course: (
          <a href="https://www.udemy.com/node-with-react-fullstack-web-development">
            {" "}
            (course)
          </a>
        )
      }
    ];

    let projList = projects.map(proj => (
      <Project
        link={proj.link}
        alt={proj.alt}
        image={proj.image}
        title={proj.title}
        course={proj.course}
      />
    ));

    return (
      <div className="portfolio">
        <a className="anchor" name="projects" id="projectsAnchor" />
        <h1 className="sectionTitle h1">Portfolio</h1>

        <div className="twocols">
          <div id="projs">
            {projList.slice(0, Math.round(projList.length / 2))}
          </div>
          <div id="projs">
            {projList.slice(Math.round(projList.length / 2))}
          </div>
        </div>
        <h3 className="text-center bot h3">
          <a href="https://github.com/SamWCoding/Projects">
            See all of my project code
          </a>
        </h3>
      </div>
    );
  }
}
