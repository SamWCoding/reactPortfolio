import React, { Component } from "react";

export default class ArticlePreview extends Component {
  render() {
    if (this.props.post) {
      return (
        <div className="article">
          {this.props.post.featured_image ? (
            <img
              className="img-responsive webpic"
              alt="article header"
              src={this.props.post.featured_image}
            />
          ) : (
            ""
          )}
          <div className="text-center">{this.props.post.title}</div>
          <div className="content">{this.props.post.excerpt}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}
