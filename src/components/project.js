import React from "react";
import "../index.css";

export default class Project extends React.Component {
  render() {
    return (
      <div className="website">
        <a href={this.props.link}>
          <img
            className="img-responsive webpic"
            alt={this.props.alt}
            src={this.props.image}
          />
          <div className="caption text-center">
            <p className="p">
              {this.props.title} {this.props.course ? this.props.course : ""}
            </p>
          </div>
        </a>
      </div>
    );
  }
}
