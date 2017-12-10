import React, { Component } from "react";
import axios from "axios";

import ArticlePreview from "../components/articlePreview";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://public-api.wordpress.com/rest/v1/sites/samwcoding.wordpress.com/posts"
      )
      .then(res => {
        this.setState({ posts: res.data.posts });
        console.log(this.state.posts);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="blog">
        <h1>Blog</h1>
        <div>this is a post</div>
        <ArticlePreview post={this.state.posts[1]} />
        <div> this is a second thing</div>
      </div>
    );
  }
}
