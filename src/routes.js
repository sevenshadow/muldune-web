import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ProjectsPage from './components/projects/ProjectsPage';
import ProjectPage from './components/projects/ProjectPage';
import ServicesPage from './components/services/ServicesPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="services" component={ServicesPage} />
    <Route path="projects" component={ProjectsPage} />
    <Route path="project/:id" component={ProjectPage} />
    <Route path="contact" component={ContactPage} />
    
  </Route>
);
