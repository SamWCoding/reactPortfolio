import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './pages/layout';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';




ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='about' component={About}></Route>
      <Route path='projects' component={Projects}></Route>
      <Route path='contact' component={Contact}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
